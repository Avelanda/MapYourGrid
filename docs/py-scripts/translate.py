import sys
import deepl
import re
import yaml
from pathlib import Path

def translate_markdown_file(source_file, target_lang):
    # Replace with your actual DeepL API key
    translator = deepl.Translator("32a7d15b-4a2b-4495-a1dc-3c864cfac951:fx")
    
    with open(source_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Step 1: Extract and protect YAML frontmatter
    yaml_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    yaml_content = ""
    main_content = content
    
    if yaml_match:
        yaml_content = yaml_match.group(0)
        main_content = content[len(yaml_content):]
        
        # Translate specific fields in YAML frontmatter
        yaml_body = yaml_match.group(1)
        try:
            yaml_data = yaml.safe_load(yaml_body)
            if yaml_data:
                # Translate title and description if they exist
                if 'title' in yaml_data:
                    try:
                        yaml_data['title'] = translator.translate_text(yaml_data['title'], target_lang=target_lang.upper()).text
                    except:
                        pass
                if 'description' in yaml_data:
                    try:
                        yaml_data['description'] = translator.translate_text(yaml_data['description'], target_lang=target_lang.upper()).text
                    except:
                        pass
                
                # Reconstruct YAML frontmatter
                yaml_content = "---\n" + yaml.dump(yaml_data, default_flow_style=False, allow_unicode=True) + "---\n"
        except:
            # If YAML parsing fails, keep original
            pass
    
    # Step 2: Extract and protect JavaScript/script blocks
    script_blocks = []
    def replace_script(match):
        script_blocks.append(match.group(0))
        return f"__SCRIPT_BLOCK_{len(script_blocks)-1}__"
    
    main_content = re.sub(r'<script[^>]*>.*?</script>', replace_script, main_content, flags=re.DOTALL)
    
    # Step 3: Extract and protect iframe blocks
    iframe_blocks = []
    def replace_iframe(match):
        iframe_blocks.append(match.group(0))
        return f"__IFRAME_BLOCK_{len(iframe_blocks)-1}__"
    
    main_content = re.sub(r'<iframe[^>]*>.*?</iframe>', replace_iframe, main_content, flags=re.DOTALL)
    
    # Step 4: Extract and protect image tags - but fix paths first
    # Fix image paths BEFORE protecting them
    main_content = re.sub(r'src="(?!http)(?!\.\./images/)([^"]*images/)', r'src="../\1', main_content)
    main_content = re.sub(r'src="\.\./\.\./images/', 'src="../images/', main_content)  # Fix double ../
    
    img_blocks = []
    def replace_img(match):
        img_blocks.append(match.group(0))
        return f"__IMG_BLOCK_{len(img_blocks)-1}__"
    
    main_content = re.sub(r'<img[^>]*/?>', replace_img, main_content)
    
    # Step 5: Extract and protect URLs and links
    url_blocks = []
    def replace_url(match):
        url_blocks.append(match.group(0))
        return f"__URL_BLOCK_{len(url_blocks)-1}__"
    
    # Protect all URLs (http/https)
    main_content = re.sub(r'https?://[^\s\)"\]]+', replace_url, main_content)
    
    # Step 6: Extract and protect markdown links
    md_link_blocks = []
    def replace_md_link(match):
        md_link_blocks.append(match.group(0))
        return f"__MD_LINK_BLOCK_{len(md_link_blocks)-1}__"
    
    main_content = re.sub(r'\[([^\]]*)\]\(([^)]*)\)', replace_md_link, main_content)
    
    # Step 7: Extract and protect ALL HTML attributes more aggressively
    protected_attrs = []
    
    def protect_attribute(match):
        full_attr = match.group(0)
        protected_attrs.append(full_attr)
        return f"__PROTECTED_ATTR_{len(protected_attrs)-1}__"
    
    # Protect all kinds of attributes more comprehensively
    attr_patterns = [
        r'\bclass="[^"]*"',
        r'\bid="[^"]*"', 
        r'\bstyle="[^"]*"',
        r'\btarget="[^"]*"',
        r'\brel="[^"]*"',
        r'\bhref="[^"]*"',
        r'\bsrc="[^"]*"',
        r'\balt="[^"]*"',
        r'\bwidth="[^"]*"',
        r'\bheight="[^"]*"',
        r'\btitle="[^"]*"',
        r'\bframeborder="[^"]*"',
        r'\ballow="[^"]*"',
        r'\breferrerpolicy="[^"]*"',
        r'\ballowfullscreen',
        r'\bdata-form="[^"]*"',
        r'\basync'
    ]
    
    for pattern in attr_patterns:
        main_content = re.sub(pattern, protect_attribute, main_content)
    
    # Step 8: Extract and protect complete HTML tags that should not be translated
    html_tag_blocks = []
    def replace_html_tag(match):
        html_tag_blocks.append(match.group(0))
        return f"__HTML_TAG_BLOCK_{len(html_tag_blocks)-1}__"
    
    # Protect specific tags that shouldn't be translated
    protected_tag_patterns = [
        r'<div[^>]*class="[^"]*card-icon[^"]*"[^>]*>.*?</div>',
        r'<div[^>]*style="[^"]*"[^>]*>(?!</div>)',  # Opening div with style
        r'</div>',  # Closing div tags
        r'<figcaption[^>]*>.*?</figcaption>',
        r'<small[^>]*>.*?</small>'
    ]
    
    for pattern in protected_tag_patterns:
        main_content = re.sub(pattern, replace_html_tag, main_content, flags=re.DOTALL)
    
    # Step 9: Extract and protect HTML links - handle ALL links more carefully
    link_blocks = []
    def replace_link(match):
        full_tag = match.group(0)
        link_blocks.append(full_tag)
        return f"__LINK_BLOCK_{len(link_blocks)-1}__"
    
    # More comprehensive link protection
    main_content = re.sub(r'<a\b[^>]*>.*?</a>', replace_link, main_content, flags=re.DOTALL)
    
    # Step 10: Now translate the remaining content more carefully
    # Split content into chunks and translate meaningful text only
    def should_translate_text(text):
        """Check if text should be translated"""
        text = text.strip()
        
        # Don't translate if:
        if (len(text) < 3 or                                    # Too short
            text.startswith('__') and '_BLOCK_' in text or      # Protected block
            text.startswith('__') and '_ATTR_' in text or       # Protected attribute  
            re.match(r'^[#\-\*\+\s]*$', text) or              # Markdown formatting only
            re.match(r'^<[^>]*>$', text) or                    # Pure HTML tag
            text.startswith('<!--') or                          # HTML comment
            re.match(r'^[\d\.\s%km]+$', text)):                # Numbers/percentages only
            return False
            
        return True
    
    def translate_text_content(text):
        """Translate text while preserving structure"""
        if not should_translate_text(text):
            return text
            
        try:
            # Clean up text before translation
            cleaned_text = text.strip()
            translated = translator.translate_text(cleaned_text, target_lang=target_lang.upper()).text
            return translated
        except Exception as e:
            print(f"Translation error for text '{text[:50]}...': {e}")
            return text
    
    # Step 11: Translate HTML content more systematically
    def translate_html_content(match):
        full_match = match.group(0)
        tag_start = match.group(1)  # Opening tag
        inner_content = match.group(2)  # Content inside
        tag_end = match.group(3)  # Closing tag
        
        # Skip if contains protected blocks
        if '__' in inner_content and ('_BLOCK_' in inner_content or '_ATTR_' in inner_content):
            return full_match
        
        # Check if inner content has nested HTML
        if '<' in inner_content and '>' in inner_content:
            # Has nested HTML, don't translate the whole thing
            return full_match
        
        # Translate the inner text content
        translated_inner = translate_text_content(inner_content)
        return f"{tag_start}{translated_inner}{tag_end}"
    
    # Apply translation to various HTML tags
    html_text_tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'li']
    for tag in html_text_tags:
        pattern = f'(<{tag}[^>]*>)([^<]*?)(</{tag}>)'
        main_content = re.sub(pattern, translate_html_content, main_content, flags=re.DOTALL)
    
    # Step 12: Translate remaining markdown and plain text
    lines = main_content.split('\n')
    translated_lines = []
    
    for line in lines:
        # Skip lines that are protected or don't need translation
        if ('__' in line and ('_BLOCK_' in line or '_ATTR_' in line)) or line.strip().startswith('#'):
            translated_lines.append(line)
            continue
        
        # Check if line has translatable content
        # Remove HTML tags to check actual text content
        text_content = re.sub(r'<[^>]*>', '', line).strip()
        
        if should_translate_text(text_content):
            translated_line = translate_text_content(line)
            translated_lines.append(translated_line)
        else:
            translated_lines.append(line)
    
    main_content = '\n'.join(translated_lines)
    
    # Step 13: Restore all protected content in reverse order
    
    # Restore HTML tag blocks
    for i, tag_block in enumerate(html_tag_blocks):
        main_content = main_content.replace(f"__HTML_TAG_BLOCK_{i}__", tag_block)
    
    # Restore protected attributes
    for i, attr in enumerate(protected_attrs):
        main_content = main_content.replace(f"__PROTECTED_ATTR_{i}__", attr)
    
    # Restore links
    for i, link_block in enumerate(link_blocks):
        main_content = main_content.replace(f"__LINK_BLOCK_{i}__", link_block)
    
    # Restore markdown links
    for i, md_link_block in enumerate(md_link_blocks):
        main_content = main_content.replace(f"__MD_LINK_BLOCK_{i}__", md_link_block)
    
    # Restore URLs
    for i, url_block in enumerate(url_blocks):
        main_content = main_content.replace(f"__URL_BLOCK_{i}__", url_block)
    
    # Restore images
    for i, img_block in enumerate(img_blocks):
        main_content = main_content.replace(f"__IMG_BLOCK_{i}__", img_block)
    
    # Restore iframes
    for i, iframe_block in enumerate(iframe_blocks):
        main_content = main_content.replace(f"__IFRAME_BLOCK_{i}__", iframe_block)
    
    # Restore scripts
    for i, script_block in enumerate(script_blocks):
        main_content = main_content.replace(f"__SCRIPT_BLOCK_{i}__", script_block)
    
    # Step 14: Final path fixes for translated files
    # Fix icon paths
    main_content = re.sub(r'src="/icons/', 'src="../icons/', main_content)
    main_content = re.sub(r'src="\.\./\.\./icons/', 'src="../icons/', main_content)  # Fix double ../
    
    # Fix data paths
    main_content = re.sub(r'"/data/', '"../data/', main_content)
    main_content = re.sub(r'"\.\./\.\./data/', '"../data/', main_content)  # Fix double ../
    
    # Step 15: Final cleanup
    main_content = re.sub(r'</a>\.', '</a>', main_content)
    main_content = re.sub(r'</div>\.', '</div>', main_content)
    main_content = re.sub(r'</h[1-6]>\.', lambda m: m.group(0)[:-1], main_content)
    
    # Step 16: Combine YAML frontmatter with translated content
    final_content = yaml_content + main_content
    
    return final_content

def translate_single_file(file_path, target_lang):
    source_file = Path(file_path)
    
    if not source_file.exists():
        print(f"File {file_path} not found!")
        return
    
    # Determine target folder based on language
    if target_lang.lower() in ['es', 'spanish']:
        lang_code = 'es'
        lang_folder = 'es'
    elif target_lang.lower() in ['fr', 'french']:
        lang_code = 'fr'  
        lang_folder = 'fr'
    else:
        print(f"Unsupported language: {target_lang}")
        print("Supported languages: es, spanish, fr, french")
        return
    
    # Create target directory structure
    docs_path = Path('docs')
    
    try:
        # Check if the file is within the docs directory
        relative_path = source_file.relative_to(docs_path)
        target_file = docs_path / lang_folder / relative_path
    except ValueError:
        # File is not in docs directory
        print(f"File must be in the docs/ directory. Got: {source_file}")
        print(f"Expected something like: docs/index.md")
        return
    
    # Create target directory if it doesn't exist
    target_file.parent.mkdir(parents=True, exist_ok=True)
    
    print(f"Translating {source_file} to {target_file}...")
    
    # Translate the file
    translated_content = translate_markdown_file(source_file, lang_code)
    
    # Write translated content
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(translated_content)
    
    print(f"Translation complete: {target_file}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python translate_single.py <file_path> <language>")
        print("Examples:")
        print("  python docs/py-scripts/translate_single.py docs/index.md es")
        print("  python docs/py-scripts/translate_single.py docs/starter-kit.md fr")
        print("  python docs/py-scripts/translate_single.py docs/progress.md spanish")
        sys.exit(1)
    
    file_path = sys.argv[1]
    target_lang = sys.argv[2]
    translate_single_file(file_path, target_lang)
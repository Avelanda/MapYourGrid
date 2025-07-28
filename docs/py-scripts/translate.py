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
    
    # Step 4: Extract and protect image tags
    img_blocks = []
    def replace_img(match):
        img_blocks.append(match.group(0))
        return f"__IMG_BLOCK_{len(img_blocks)-1}__"
    
    main_content = re.sub(r'<img[^>]*/?>', replace_img, main_content)
    
    # Step 5: Extract and protect markdown links FIRST
    md_link_blocks = []
    def replace_md_link(match):
        md_link_blocks.append(match.group(0))
        return f"__MD_LINK_BLOCK_{len(md_link_blocks)-1}__"
    
    main_content = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', replace_md_link, main_content)
    
    # Step 6: Extract and protect HTML links - but handle card links specially
    link_blocks = []
    def replace_link(match):
        full_tag = match.group(0)
        
        # Check if this is a card link that contains h3/p elements we want to translate
        if 'class="get-involved-card"' in full_tag:
            # For card links, we'll translate the inner content but protect the link structure
            # Extract the link attributes and content separately
            link_match = re.match(r'(<a[^>]*>)(.*)(</a>)', full_tag, re.DOTALL)
            if link_match:
                link_start = link_match.group(1)
                link_content = link_match.group(2)
                link_end = link_match.group(3)
                
                # Store the link wrapper but let content be processed
                link_blocks.append((link_start, link_end))
                return f"__CARD_LINK_START_{len(link_blocks)-1}__{link_content}__CARD_LINK_END_{len(link_blocks)-1}__"
        
        # For regular links, protect completely
        link_blocks.append(full_tag)
        return f"__LINK_BLOCK_{len(link_blocks)-1}__"
    
    # More careful regex for links - only match complete <a>...</a> structures
    main_content = re.sub(r'<a\b[^>]*>(?:[^<]|<(?!/a>))*</a>', replace_link, main_content, flags=re.DOTALL)
    
    # Step 7: Protect HTML attributes (class, id, style) MORE AGGRESSIVELY
    protected_attrs = []
    
    def protect_attribute(match):
        full_attr = match.group(0)
        protected_attrs.append(full_attr)
        return f"__PROTECTED_ATTR_{len(protected_attrs)-1}__"
    
    # Protect all kinds of attributes
    main_content = re.sub(r'\bclass="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\bid="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\bstyle="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\btarget="_blank"', protect_attribute, main_content)
    main_content = re.sub(r'\brel="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\bhref="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\bsrc="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\balt="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\bwidth="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\bheight="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\btitle="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\bframeborder="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\ballow="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\breferrerpolicy="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\ballowfullscreen', protect_attribute, main_content)
    main_content = re.sub(r'\bdata-form="[^"]*"', protect_attribute, main_content)
    main_content = re.sub(r'\basync', protect_attribute, main_content)
    
    # Step 8: Translate text content inside HTML tags
    def translate_html_text(match):
        full_match = match.group(0)
        tag_start = match.group(1)  # Opening tag
        text_content = match.group(2)  # Text inside
        tag_end = match.group(3)  # Closing tag
        
        # Skip if contains protected blocks or is too short
        if ('__' in text_content and '_BLOCK_' in text_content) or \
           ('__' in text_content and '_ATTR_' in text_content) or \
           len(text_content.strip()) < 3:
            return full_match
            
        # Only translate if there's actual text content
        text_only = re.sub(r'<[^>]*>', '', text_content).strip()
        if text_only and len(text_only) > 2:
            try:
                translated_text = translator.translate_text(text_content.strip(), target_lang=target_lang.upper()).text
                return f"{tag_start}{translated_text}{tag_end}"
            except Exception as e:
                print(f"Translation error for HTML text '{text_content[:50]}...': {e}")
                return full_match
        return full_match
    
    # Translate text inside common HTML tags
    html_tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'div', 'span']
    for tag in html_tags:
        pattern = f'(<{tag}[^>]*>)(.*?)(</{tag}>)'
        main_content = re.sub(pattern, translate_html_text, main_content, flags=re.DOTALL)
    
    # Step 9: Translate remaining markdown/text content line by line
    try:
        lines = main_content.split('\n')
        translated_lines = []
        
        for line in lines:
            stripped_line = line.strip()
            
            # Skip lines that are:
            # - Empty
            # - Pure HTML tags
            # - Contains protected blocks
            # - Markdown headers (starting with #)
            # - HTML comments
            if (not stripped_line or
                (stripped_line.startswith('<') and stripped_line.endswith('>')) or
                '__' in line and ('_BLOCK_' in line or '_ATTR_' in line) or
                stripped_line.startswith('#') or
                stripped_line.startswith('<!--')):
                translated_lines.append(line)
                continue
            
            # Check if line has substantial text content to translate
            # Remove HTML tags temporarily to check text content
            text_only = re.sub(r'<[^>]*>', '', line).strip()
            
            if len(text_only) > 2:  # Only translate if there's actual content
                try:
                    translated_line = translator.translate_text(line, target_lang=target_lang.upper()).text
                    translated_lines.append(translated_line)
                except Exception as e:
                    print(f"Translation error for line '{line[:50]}...': {e}")
                    translated_lines.append(line)
            else:
                translated_lines.append(line)
        
        main_content = '\n'.join(translated_lines)
        
    except Exception as e:
        print(f"Translation error in main content processing: {e}")
    
    # Step 10: Restore all protected content in REVERSE order
    
    # Restore protected attributes
    for i, attr in enumerate(protected_attrs):
        main_content = main_content.replace(f"__PROTECTED_ATTR_{i}__", attr)
    
    # Restore card links (special handling)
    for i, link_data in enumerate(link_blocks):
        if isinstance(link_data, tuple):  # Card link
            link_start, link_end = link_data
            main_content = main_content.replace(f"__CARD_LINK_START_{i}__", link_start)
            main_content = main_content.replace(f"__CARD_LINK_END_{i}__", link_end)
        else:  # Regular link
            main_content = main_content.replace(f"__LINK_BLOCK_{i}__", link_data)
    
    # Restore markdown links
    for i, md_link_block in enumerate(md_link_blocks):
        main_content = main_content.replace(f"__MD_LINK_BLOCK_{i}__", md_link_block)
    
    # Restore images
    for i, img_block in enumerate(img_blocks):
        main_content = main_content.replace(f"__IMG_BLOCK_{i}__", img_block)
    
    # Restore iframes
    for i, iframe_block in enumerate(iframe_blocks):
        main_content = main_content.replace(f"__IFRAME_BLOCK_{i}__", iframe_block)
    
    # Restore scripts
    for i, script_block in enumerate(script_blocks):
        main_content = main_content.replace(f"__SCRIPT_BLOCK_{i}__", script_block)
    
    # Step 11: Fix relative paths for translated versions
    main_content = re.sub(r'src="images/', 'src="../images/', main_content)
    main_content = re.sub(r'src="\.\./images/', 'src="../images/', main_content)  # Avoid double ../
    main_content = re.sub(r'href="/icons/', 'href="../icons/', main_content)
    main_content = re.sub(r'src="/icons/', 'src="../icons/', main_content)
    
    # Step 12: Final cleanup - remove any remaining translation artifacts
    # Clean up any stray periods that might have been added
    main_content = re.sub(r'</a>\.', '</a>', main_content)
    main_content = re.sub(r'</div>\.', '</div>', main_content)
    
    # Step 13: Combine YAML frontmatter with translated content
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
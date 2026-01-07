---
hide:
  - navigation
  - toc
  - footer
---

<style>
/* Remove default padding/margins from html and body */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

/* Remove padding/margin from main container and inner content */
.md-main, .md-main__inner, .md-content {
  margin: 0 !important;
  padding: 0 !important;
  width: 120% !important;
  max-width: none !important;
}

/* Hide headings and buttons inside the page */
.md-typeset h1, .md-content__button {
  display: none !important;
}


/* Make iframe fill the viewport completely */
.iframestyle {
  width: 100vw;
  height: 75vh;
  border: none;
  display: block;
  margin-top: -2rem;
  margin-left: -1.3rem;
  margin-bottom: -1.3rem;
  padding: 0;
}

@media (max-width: 1080px){
 .iframestyle {
   width: 104vw;
 }
}
</style>
<iframe
  src="https://mapyourgrid.dynartio.com/gridinspector/"
  class="iframestyle" allow="fullscreen">
</iframe>

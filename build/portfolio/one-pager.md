---
layout: layouts/portfolioProject.hbs
name: One Pager
cover_image_url: /images/portfolio/one-pager/thumbnail.png
cover_image_alt: A screenshot of the One Pager app
short_description: A self-editing HTML page for the read/write web
start_date: 2026-03-24
end_date: 2026-02-01
project_url: https://doodles.patrickweaver.net/one-pager/
source_url: https://github.com/patrickweaver/onge-pager
status: Complete
tags:
  - html
  - experiments
  - typescript
images:
  - /images/portfolio/one-pager/demo.gif
  - /images/portfolio/one-pager/prototype-1.gif
  - /images/portfolio/one-pager/prototype-2.png
  - /images/portfolio/one-pager/prototype-3.png
  - /images/portfolio/one-pager/prototype-4.png
  - /images/portfolio/one-pager/prototype-5.png
  - /images/portfolio/one-pager/prototype-6.png
---

One Pager is an `index.html` file that, when opened locally in a browser renders a JavaScript powered editing UI.

The project was inspired by both early visions and recent experiments of a read/write web. I wanted to create a living HTML file that could be crafted and cultivated over time. Read more about the inspirations in my [blog post about One Pager](/blog/one-pager-self-editing-html/).

The editing UI allows the page author to directly edit DOM elements and page metadata. When the author is done making changes they can save the current state of the DOM to a file via the UI. Once they have their updated `index.html` file saved locally, they can upload it to their hosting provider. The editing UI is preserved, but hidden when viewed on the web, so later edits can be made just by re-downloading the file.

One pager supports `<h1>` - `<h6>`, `<p>`, `<img>`, and `<a>` tags, as well as updating metadata and some global and element-level styles.

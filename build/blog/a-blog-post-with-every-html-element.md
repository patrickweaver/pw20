---
layout: layouts/blogPost.hbs
title: A Blog Post With Every HTML Element
date: 2023-02-20
# cover_image_url: 
# cover_image_alt: 
tags:
---

After learning a little bit more about web accessibility this year I have been exploring some of the less common HTML elements, and making changes to this website like wrapping the text of the posts on this blog in <code>&lt;article&gt;</code> tags and adding a <code>&lt;main&gt;</code> tag in the website’s layout templates (this website is built using [11ty](https://www.11ty.dev/)).

I had previously done some work to make sure that <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements were layed out nicely for images with associated captions, and I had been impressed with various [Recurser’s](https://www.recurse.com/) implementation of footnotes or sidenotes<sup id="footnote-1-link">[1](./#footnote-1)</sup>, and have been thinking it would be interesting to see what other interesting layouts were possible with just HTML.

I could, element by element, continue to add support (mostly by making CSS updates for each element to fit in with the rest of my style choices) as I came across specific needs for them, but not one to shy away from an exhaustive exploration, I decided to write this post and attempt to use every element. A goal was to avoid delaying future posts while I update the site to support a new element it uses, but in reality it took more than a year to make all the updates for just this post! I am using the [MDN Web Docs list of HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) as a refence which has more than 100 tags divdied into a few categories, which I will also use in this post. Many of the tags like <code>&lt;html&gt;</code> don’t make sense to include in the text of a blog post, but I’ll be updating the website’s layout as I go, so if you’re viewing this post on [patrickweaver.net](https://www.patrickweaver.net), then every one of the elements is used somewhere on this page.
## The Elements
### Main Root

- <code>[&lt;html&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)</code>

I didn’t have to make any changes to the <code>&lt;html&gt;</code> tag for this post, but one thing I don’t always remember to include is the <code>lang</code> property (in this case <code>lang="en"</code>).

### Document metadata

- <code>[&lt;base&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)</code>
- <code>[&lt;head&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)</code>
- <code>[&lt;link&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)</code>
- <code>[&lt;meta&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)</code>
- <code>[&lt;style&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)</code>
- <code>[&lt;title&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)</code>

I wasn’t familiar with the <code>&lt;base&gt;</code> tag before writing this post, though I've now added one with relative links to my layout templates. This caused a few issues with things like local development, and relative links, though they were easily resolved. The rest of the metadata tags were present before this post.

### Sectioning root

- <code>[&lt;body&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)</code>

Like the Document metadata tags, this was of course already present before this post, though it was interesting to read the documentation and learn about attributes like <code>onbeforeprint</code> that provides functionality I’ve used more hacky ways to accomplish before, and <code>onblur</code> that I’m now wondering about how often is used for annoying popups.

### Section

- <code>[&lt;&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)</code>
- <code>[&lt;&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)</code>
- <code>[&lt;&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)</code>




<ol>
    <li id="footnote-1">Which I am just now discovering there is no native HTML implementaton for! <a href="#footnote-1-link">↑ Return to post</a></li>
</ol>
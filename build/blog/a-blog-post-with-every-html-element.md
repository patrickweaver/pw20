---
layout: layouts/blogPost.hbs
title: A Blog Post With Every HTML Element
date: 2022-02-19
# cover_image_url: 
# cover_image_alt: A photo of a Raspberry Pi on an iPad
tags:
---

After learning a little bit more about web accessibility this year I have been exploring some of the less common HTML elements, and making changes to this website like wrapping the text of the posts on this blog in <code>&lt;article&gt;</code> tags and adding a <code>&lt;main&gt;</code> tag in the website’s layout templates (this website is built using [11ty](https://www.11ty.dev/)).

I had previously done some work to make sure that <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements were layed out nicely for images with associated captions, and I had been impressed with various [Recurser’s](https://www.recurse.com/) implementation of footnotes or sidenotes<sup id="footnote-1-link">[1](#footnote-1)</sup>, and have been thinking it would be interesting to see what other interesting layouts were possible with just HTML.

I could continue to add support (mostly in my CSS so they display nicely in the context of the rest of my style choices) for additional elements as I came across specific needs for them, but not one to shy away from an exhaustive exploration, I decided to write this post and attempt to use every element, which should also help avoid delaying future posts while I update the site to support a new element it uses. I am using the [MDN Web Docs list of HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) as a refence which has more than 100 tags divdied into a few categories, which I will also use in this post. Many of the tags like <code>&lt;html&gt;</code> don’t make sense to include in the text of a blog post, but I’ll be updating the website’s layout as I go, so if you’re viewing this post on [patrickweaver.net](https://www.patrickweaver.net), then every one of the elements is used somewhere on this page.

### Main Root

- [&lt;html&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

I didn’t have to make any changes to the <code>&lt;html&gt;</code> tag for this post, but one thing I don’t alway sremember to include is the <code>lang</code> property (in this case <code>lang="en"</code>).

### Document metadata

- [&lt;base&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;
- &lt;&gt;


<ol>
    <li id="footnote-1">Which I am just now discovering there is no native HTML implementaton for! <a href="#footnote-1-link">↑ Return to post</a></li>
</ol>
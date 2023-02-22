---
layout: layouts/blogPost.hbs
title: A Blog Post With Every HTML Element
date: 2023-02-20
# cover_image_url: 
# cover_image_alt: 
tags:
---

<section>

After learning a little bit more about web accessibility this year I have been exploring some of the less common HTML elements, and making changes to this website like wrapping the text of the posts on this blog in `<article>` tags and adding a `<main>` tag in the website’s layout templates (this website is built using [11ty](https://www.11ty.dev/)).


I had previously done some work to make sure that `<figure>` and `<figcaption>` elements were layed out nicely for images with associated captions, and I had been impressed with various [Recurser’s](https://www.recurse.com/) implementation of footnotes or sidenotes<sup id="footnote-1-link">[1](./#footnote-1)</sup>, and have been thinking it would be interesting to see what other interesting layouts were possible with just HTML.

I could, element by element, continue to add support (mostly by making CSS updates for each element to fit in with the rest of my style choices) as I came across specific needs for them, but not one to shy away from an exhaustive exploration, I decided to write this post and attempt to use every element. A goal was to avoid delaying future posts while I update the site to support a new element it uses, but in reality it took more than a year to make all the updates for just this post! I am using the [MDN Web Docs list of HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) as a reference which has more than 100 tags divided into a few categories, which I will also use in this post. Many of the tags like `<html>` don’t make sense to include in the text of a blog post, but I’ll be updating the website’s layout as I go, so if you’re viewing this post on [patrickweaver.net](https://www.patrickweaver.net), then every one of the elements is used somewhere on this page.

</section>

## The Elements

<section>

### Main Root

- [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

I didn’t have to make any changes to the `<html>` tag for this post, but one thing I don’t always remember to include is the `lang` property (in this case `lang="en"`).

</section>

<section>

### Document metadata

- [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
- [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
- [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
- [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

I wasn’t familiar with the `<base>` tag before writing this post, though I've now added one with relative links to my layout templates. This caused a few issues with things like local development, and relative links, though they were easily resolved. The rest of the metadata tags were present before this post.

</section>

<section>

### Sectioning root

- [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)

Like the Document metadata tags, this was of course already present before this post, though it was interesting to read the documentation and learn about attributes like `onbeforeprint` that provides functionality I’ve used more hacky ways to accomplish before, and `onblur` that I’m now wondering about how often is used for annoying popups.

</section>

<section>

### Content sectioning

- [`<address>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
- [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
- [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
- [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
- [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
- [`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
- [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

When I first looked at the list I assumed that `<address>` would be designed exclusively for mailing addresses, but was surprised to see that it can be used for email addresses, and even links. I updated the email address on the About page of site site, but I'll add an `<address>` below also:

<address>
    <p>Email Patrick:</p>
    <a href="mailto:hello.patrickw@gmail.com">hello.patrickw@gmail.com</a>
</address>

As I mentioned above, I updated the blog post page template to use the `<article>` tag, but reading the documentation, I'm now wondering if it would fit on every page of the site. I’m now using `<aside>` elements, which represent, “a portion of a document whose content is only indirectly related to the document’s main content”, to wrap around my footnotes at the bottom of this page (though I may try to style them as sidenotes in the future). The current design of this website doesn’t have a `<footer>`, but I’ve added one to this blog post, and while I had a `<header>` element on the page header previously, I now know that more than one is acceptable so there is one around the header section of blog posts.

#### Heading elements

As part of the style update and cleanup of this site that inspired this post I realized I was often using headers with incorrect hierarchy, which I cleaned up. Though I never reached 6 levels of headers, the closest I got was `<h3>` in some of the blog posts with multiple sections and subsections.

##### How to use top level headings

It is a little bit unclear how to use `<h1>` tags in a post like this from just the MDN documentation. This [tip from the W3C](https://www.w3.org/QA/Tips/Use_h1_for_Title) suggests different implementations for pages with standalone, or collection content, which would make it difficult to use the same templates and styles for different pages on this site.

###### How I decided to handle it

Before writing this post I had updated the site to use `<h1>` for the name of the site (my name) at the top, `<h2>` for the section name, for this page, “Blog”, and `<h3>` for the title of what would be the `<article>` on a page. However, after reading the documentation and the tip above, I decided to update the hierarchy and use `<h1>` for different things on different pages, and use classes for styles, which is probably more in line with the separation of concerns of HTML and CSS (which means this paragraph is below an `<h6>`).

The `<main>` element was one of the initial curiosities that led me down the path of reading about and implementing every element, though it wasn’t until I read through the MDN list that I added a `<nav>` element around the menu at the top of this page. I’ve added `<section>` elements to this post, but I’m not sure how often I will use them elsewhere. One reason is that it makes it harder to mix and match HTML and markdown with visually clear nesting in the [document where I am writing this post](https://github.com/patrickweaver/pw20/blob/main/build/blog/a-blog-post-with-every-html-element.md).

</section>

<section>

### Text content

- [`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)

I had previously used `<blockquote>` for embedding tweets into blog posts, but for this post I decided to add styles for standalone quotes also.

</section>

<section>

### Section

- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)

Description of section

</section>


<ol>
    <li id="footnote-1"><aside>Which I am just now discovering there is no native HTML implementaton for!</aside> <a href="#footnote-1-link">↑ Return to post</a></li>
</ol>

<footer role="contentinfo">
    Written between February 2022 and March 2023.
</footer>
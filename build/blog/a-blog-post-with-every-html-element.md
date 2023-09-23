---
layout: layouts/blogPost.hbs
title: A Blog Post With Every HTML Element
date: 2023-08-03
preview_text: "After learning a little bit more about web accessibility last year I had been exploring some of the less common HTML elements, and making changes to this website, like wrapping the text of the posts on this blog in"
cover_image_url: "/images/blog/html/park-html-crop.jpg"
cover_image_alt: "A photograph of a handwritten HTML document on lined paper"
tags:
---

<!-- markdownlint-disable MD033 MD013 -->

<style>
    section > ul {
        padding-left: 0;
    }
    section > ul > li {
        display: inline-block;
    }

    section > ul > li::after {
        content: ', ';
    }

    section > ul > li:last-child::after {
        content: '';
    }

    .confetti {
        position: fixed;
        font-size: 3rem;
        top: 50px;
    }

    #pw-links-portal {
    width: 300px;
    height: 200px;
    margin: 0.5rem;
    }

    .very-long-url-wrapper {
        max-width: 100%;
        overflow: scroll;
        padding-bottom: 1rem;
    }

    #weird-table {
        border: 5px double #8f8f9f;
        padding: 5px;
    }

    #weird-table .low-numbers {
        background-color: #ff4f2f4f;
    }

    #weird-table .high-numbers {
        background-color: #2f4fff4f;
    }

    #weird-table th {
        background-color: #2fff2f1f;
    }

    #weird-table th[scope='row'] {
    background-color: #2fffff1f;
    text-align: left;
}

    #weird-table th,
    #weird-table td {
        border: 2px solid black;
        padding: 5px;
        min-width: 40px;
        text-align: center;
    }

    #weird-table th:nth-child(1),
    #weird-table td:nth-child(1) {
        border: none;
    }

    #weird-table th:nth-child(2),
    #weird-table td:nth-child(2) {
        border-radius: 3px;
    }

    #weird-table th:nth-child(3),
    #weird-table td:nth-child(3) {
        border-radius: 6px;
    }

    #weird-table th:nth-child(4),
    #weird-table td:nth-child(4) {
        border-radius: 9px;
    }

    #weird-table th:nth-child(5),
    #weird-table td:nth-child(5) {
        border-radius: 12px;
    }

    #weird-table th:nth-child(6),
    #weird-table td:nth-child(6) {
        border-radius: 15px;
    }

    #weird-table th:nth-child(7),
    #weird-table td:nth-child(7) {
        border-radius: 18px;
    }

    #everything-form {
        border: 5px double #080f18;
        border-radius: 20px;
        padding: 10px;
    }

    #everything-form label {
        display: block;
    }

    #everything-form {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 20% 20% 20% 20% 20%;
    }

    #everything-form > * {
        margin: 2px;
    }

    #eform-type {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        background-color: #f8fffa;
        border-radius: 3px;
        border: 1px solid #d8dfda;
        text-align: right;
        padding: 4px;
    }

    #eform-size {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 7;
        text-align: center;
        margin: 5px 10px 5px 5px;
    }

    #eform-size-meter {
        width: 100%;
    }

    #eform-size > fieldset {
        width: 100%;
        background-color: #faeaff;
    }

    #eform-size > fieldset > legend {
        width: 100%;
        background-color: #fcf2ff;
        border-radius: 10px;
        border: 1px solid #dcd2df;
    }

    #eform-size > * {
        display: inline-block;
    }

    #eform-color {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3;
        text-align: right;
        background-color: #fafaef;
        padding: 6px;
        border-radius: 5px;
        border: 2px solid #bf6ff8;
    }

    #eform-dream {
        grid-column-start: 5;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 6;
        position: relative;
        border-radius: 3px;
        background-color: #e8ffe8;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 33% 34% 33%;
    }

    #eform-dream > label {
        writing-mode: vertical-lr;
        text-orientation: upright;
        vertical-align: middle;
        padding: 1rem 0.5rem;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    #dream-secret {
        text-orientation: sideways;
        font-size: 0.5rem;
    }

    #dream-input {
        resize: none;
        font-family: cursive;
        font-size: 2rem;
        display: block;
        margin: 4px;
        font-color: #38789f;
        writing-mode: vertical-lr;
        text-orientation: sideways;
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    #form-completion-label {
        display: inline-block;
        margin-top: 3rem;
        width: 100%;
        text-align: center;
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 4;
    }

    #form-completion {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 5;
        width: 100%;
        margin-top: 1rem;
    }

    #eform-submit-button {
        border: 4px solid #6faf38;
        background-color: #8fcf58;
        color: #ffeff8;
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 5;
        grid-row-end: 6;
        border-radius: 4px;
        box-shadow: -4px -4px 3px #bfbfef;
        margin: 5px;
        font-size: 2rem;
        font-family: serif;
        position: relative;
        cursor: pointer;
    }

    #eform-submit-button:hover {
        border-color: #51b578;
        background-color: #47775A;
        color: #F0F6FB;
        border-radius: 6px;
        font-size: 2.25rem;
    }

    #eform-submit-button:active {
        border-color: #54c480;
        background-color: #4E7E52;
        color: #F4FAFF;
        border-radius: 6px;
        top: -2px;
        left:-2px;
        box-shadow: -2px -2px 1px #bfbfef;
        border-radius: 3px;
        font-size: 2.5rem;
    }

    #everything-output {
        border: 4px dotted #f47a9e;
        border-radius: 10px;
        width: 300px;
        max-width: 90%;
        height: 100px;
        display: block;
        margin: 2rem 1rem;
        text-align: center;
        padding: 1rem;
    }

    #palm-sheriff {
        font-size: 0.75rem;
        line-height: 0.75rem;
        margin: 0 40%;
    }

    #menu-button {
        border: 2px solid #2f2f2f;
        border-radius: 10px;
        width: 200px;
        height: 3rem;
        padding: 0.5rem;
        background-color: #2f8fdf;
        color: #ffffff;
        text-align: center;
        box-shadow: -3px -3px 10px #9fcff8;
    }

    #menu-button:hover {
        box-shadow: -3px -3px 15px #9fcff8;
        background-color: #2888d0;
        cursor: pointer;
    }

    #menuitem-example {
        width: 300px;
        border: 2px solid #2f2f2f;
        padding: 0;
        background-color: #78c8fd;
        margin: 1px 0 0;
        border-radius: 4px;
    }

    #menuitem-example > menuitem {
        display: inline-block;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid #000000;
    }

    #menuitem-example > menuitem:last-child {
        border: none;
    }

    #nobr-box {
        width: 170px;
        border: 2px solid #2f2f2f;
        border-radius: 3px;
        padding: 5px;
        background-color: #fdfaf7;
        overflow: scroll;
        margin: 1rem 0;
    }

    footer {
        margin: 2rem 0 1rem;
        border: 1px solid #dfd8df;
        border-radius: 5px;
        padding: 1rem 10px;
        background-color: #fefcfe;
    }

    @media (max-width: 600px) {
        #everything-form {
        }

        #everything-form {
            display: grid;
            grid-template-columns: 20% 20% 20% 20% 20%;
            grid-template-rows: 25% 25% 35% 5% 10%;
        }

        #everything-form label {
            font-size: 1rem;
        }

        #eform-type {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 2;
        }

        #eform-color {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 3;
        }

        #eform-size {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 3;
            grid-row-end: 4;
            text-align: center;
            margin: 5px 10px 5px 5px;
        }

        #eform-dream {
            grid-column-start: 5;
            grid-column-end: 6;
            grid-row-start: 1;
            grid-row-end: 4;
        }

        #eform-dream > label {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 2;
        }

        #dream-secret {
            text-orientation: sideways;
            font-size: 0.5rem;
        }

        #dream-input {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 4;
        }

        #form-completion-label {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 4;
            grid-row-end: 5;
            font-size: 0.75rem;
            margin: 0;
            text-align: left;
        }

        #form-completion {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 5;
            grid-row-end: 6;
            margin-top: 0;
        }

        #eform-submit-button {
            grid-column-start: 5;
            grid-column-end: 6;
            grid-row-start: 4;
            grid-row-end: 6;
            border: 4px solid #6faf38;
            border-radius: 2px;
            box-shadow: -4px -4px 3px #bfbfef;
            margin: 5px;
            font-size: 1rem;
            font-family: serif;
            position: relative;
            writing-mode: vertical-lr;
            text-orientation: sideways;
        }

        #eform-submit-button:hover {
            border-radius: 4px;
            font-size: 1rem;
            writing-mode: vertical-rl;
        }

        #eform-submit-button:active {
            border-radius: 6px;
            top: -2px;
            left:-2px;
            box-shadow: -2px -2px 1px #bfbfef;
            border-radius: 2px;
            font-size: 1.25rem;
        }

        #palm-sheriff {
        font-size: 0.75rem;
        line-height: 0.75rem;
        margin: 0 30%;
    }
}
</style>

<section>

After learning a little bit more about web accessibility last year I had been exploring some of the less common <abbr title="Hyper Text Markup Language">HTML</abbr> elements, and making changes to this website, like wrapping the text of the posts on this blog in `<article>` tags and adding a `<main>` tag in the website’s layout templates (this website is built using <a href="https://www.11ty.dev/" target="_blank">Eleventy</a>).

I had previously done some work to make sure that `<figure>` and `<figcaption>` elements were layed out nicely for images with associated captions, and I had been impressed with various <a href="https://www.recurse.com/" target="_blank">Recurser’s</a> implementation of footnotes or sidenotes<sub id="footnote-1-link">[1](./#footnote-1)</sub>, and have been thinking it would be interesting to see what other interesting layouts were possible with just HTML.

I could, element by element, continue to add support (mostly by making <abbr title="Cascading Style Sheets">CSS</abbr> updates for each element to fit in with the rest of my style choices) as I came across specific needs for them, but not one to shy away from an exhaustive exploration, I decided to write this post and attempt to use every element.

A goal of the post, was to avoid delaying other future posts with CSS updates on a previously unused element, but in reality it took a year and a half to make all the updates for just this post! I am using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">MDN Web Docs list of HTML elements</a> as a reference which has more than 100 tags divided into a few categories, which I will also use in this post. Many of the tags like `<html>` don’t make sense to include in the text of a blog post, but if you’re viewing this post on [patrickweaver.net](https://www.patrickweaver.net), then every one of the elements is used somewhere on this page.

</section>

<hr />

## The Elements

<section id="main-root">

### Main Root

- [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

I didn’t have to make any changes to the `<html>` tag for this post, but one thing I don’t always remember to include is the `lang` property (in this case `lang="en"`).

</section>

<section id="document-metadata">

### Document Metadata

- [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
- [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
- [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
- [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

I wasn’t familiar with the `<base>` tag before writing this post, though I’ve now added one with relative links to my layout templates. This caused a few issues with things like local development, and relative links, though they were easily resolved. The rest of the metadata tags are familiar and were already here.

</section>

<section id="sectioning-root">

### Sectioning Root

- [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)

Like the Document metadata tags, in the layout, though it was interesting to read the documentation and learn about attributes, like `onbeforeprint` that provides functionality I’ve used more hacky methods to accomplish previously, and `onblur`, whose primary utility seems to be annoying popups.

</section>

<section id="content-sectioning">

<hgroup>
<h3>Content Sectioning</h3>
<p>Headers and Document Organization</p>
</hgroup>

- [`<address>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
- [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
- [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
- [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
- [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
- [`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [`<hgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
- [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
- [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
- [`<search>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search)

When I first looked at the list I assumed that `<address>` would be designed exclusively for mailing addresses, but was surprised to see that it can be used for email addresses, and even links. I updated the email address on the About page of site site, but I’ll add an `<address>` below also:

<address>
    <p>Email Patrick:</p>
    <a href="mailto:hello.patrickw@gmail.com">hello.patrickw@gmail.com</a>
</address>

As I mentioned above, I updated the blog post page template to use the `<article>` tag, but reading the documentation, I’m now wondering if it would fit on every page of the site.

I’m now using `<aside>` elements, which represent, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside">a portion of a document whose content is only indirectly related to the document’s main content</q>, to wrap around my footnotes at the bottom of this page (though I may try to style them as sidenotes in the future). The current design of this website doesn’t have a `<footer>`, but I’ve added one to this blog post, and while I had a `<header>` element on the page header previously, I now know that more than one is acceptable so there is one around the header section of each blog posts as well.

#### Heading elements

As part of the style update and cleanup of this site that inspired this post I realized I was often using headers with incorrect hierarchy, which I cleaned up. Though I never reached 6 levels of headers, the closest I got was `<h3>` in some of the blog posts with multiple sections and subsections.

##### How to use top level headings

It is a little bit unclear how to use `<h1>` tags in a post like this from just the MDN documentation. This [tip from the W3C](https://www.w3.org/QA/Tips/Use_h1_for_Title) suggests different implementations for pages with standalone, or collection content, which would make it difficult to use the same templates and styles for different pages on this site.

###### How I decided to handle it

Before writing this post I had updated the site to use `<h1>` for the name of the site (my name) at the top, `<h2>` for the section name, for this page, “Blog”, and `<h3>` for the title of what would be the `<article>` on a page. However, after reading the documentation and the tip above, I decided to update the hierarchy and use `<h1>` for different things on different pages, and use classes for styles, which is probably more in line with the separation of concerns of HTML and CSS (which means this paragraph is below an `<h6>`).

Sometime between when I started this experiment in early 2022 and when I published it in Summer 2023 `<hgroup>` and `<search>` were added to the MDN documentation (which I realize is not the official spec). I’ve added an `<hgroup>` around the heading of this section, with a subtitle `<p>` element. `<search>` is a semantic element that indicates that an input can be used for search, not for search results (with the exception of quick results that populate within a form ). While a `<search>` element that contains a `<form>` works with just HTML on a website that can generate search results on a server, because this website is statically generated the example below requires JavaScript. I haven’t seen a `<search>` element anywhere else, neither MDN’s header search, or google.com use it in 2023.

<!-- markdownlint-disable -->
<search>
<form id="search-form">
    <label for="text-search">Search this post: </label>
    <input type="search" id="text-search" />
    <button id="search-button" type="button">Search</button>
</form>
</search>
<output
id="search-output"
form="search-form"
for="text-search"
name="search-output"
style="display: none; margin: 1rem; border: 1px solid #555; padding: 0.5rem;"
>
<ul id="search-output-list"></ul>
</output>
<script>
    const searchInput = document.getElementById("text-search");
    const searchButton = document.getElementById("search-button");
    const searchOutput = document.getElementById("search-output");
    const searchOutputList = document.getElementById("search-output-list");
    searchButton.addEventListener('click', searchCb);
    searchInput.addEventListener('keydown', searchCb);
    function searchCb(event) {
        const { keyCode } = event;
        if (keyCode && keyCode !== 13) return;
        event.preventDefault()
        const text = searchInput.value;
        searchOutput.style.display = text ? "block" : "none";
        if (!text) return;
        const a = document.getElementsByTagName("article")[0].innerText;
        let index = 0
        let count = 0;
        while (index !== -1 && count < 5) {
            count++;
            index = a.indexOf(text, index);
            if (index !== -1) {
                const newResult = findStringInArticle(index, text)
                searchOutputList.innerHTML += `<li><code class="code-regular">${newResult}</code></li>`
                index++;
            }
        }
        function escapeHtml(unsafe) {
            // https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
        function findStringInArticle(index, text) {
            if (index >= 0) {
                let start = index - 100;
                if (start < 0 ) start = 0;
                let end = index + 100;
                if (end > a.length) end = a.length;
                return `${start > 0 ? '…' : ''}${escapeHtml(a.slice(start, index))}<mark>${escapeHtml(a.slice(index, index + text.length))}</mark>${escapeHtml(a.slice(index + text.length, end))}${end < a.length ? '…' : ''}`;
            }
        }
    }
</script>
<noscript>
    <p>This search functionality will only be interactive when JavaScript is enabled.</p>
</noscript>

<!-- markdownlint-enable -->
<!-- markdownlint-disable MD033 MD013 -->

The `<main>` element was one of the initial curiosities that led me down the path of reading about and implementing every element, though it wasn’t until I read through the MDN list that I added a `<nav>` element around the menu at the top of this page. I’ve added `<section>` elements to this post, but I’m not sure how often I will use them elsewhere. One reason is that it makes it harder to mix and match HTML and markdown with visually clear nesting in the [document where I am writing this post](https://github.com/patrickweaver/pw20/blob/main/build/blog/a-blog-post-with-every-html-element.md).

</section>

<section id="text-content">

### Text Content

- [`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
- [`<dd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
- [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
- [`<dl>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [`<dt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
- [`<figcaption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
- [`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
- [`<hr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
- [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
- [`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
- [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
- [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
- [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
- [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

I had previously used `<blockquote>` for embedding tweets into blog posts, but for this post I decided to add styles for standalone quotes. I didn’t know about the `<blockquote>` `cite` property or `<cite>` element until reading the docs more closely:

<figure class="blockquote-figure">
    <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#attributes">
        <h4><code>cite</code></h4>
        <p>A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.</p
    </blockquote>
    <figcaption><cite>MDN</cite> on <code>&lt;blockquote&gt;</code></figcaption>
</figure>

`<dd>`, `<dl>`, and `<dt>` are elements that, after finding out about them when first looking into more obscure HTML elements, I was very surprised to have not known about sooner. Although, it’s unclear from the documentation whether lists like the links on the current version of my [portfolio page](https://web.archive.org/web/20220628123804/https://www.patrickweaver.net/portfolio/) should use `<dl>` (I’m currently using `<ul>`). I am curious how `<ol>` and `<ul>` became part of almost every “Intro to HTML” class, but `<dl>` is relatively obscure. It’s also strange that `<ol>` and `<ul>` have default margins, but for `<dl>` the margin is on `<dd>`.

#### HTML list elements

<dl>
    <dt><code>dl</code></dt><dd>Description list</dd>
    <dt><code>ol</code></dt><dd>Ordered list</dd>
    <dt><code>ul</code></dt><dd>Unordered list</dd>
</dl>

`<div>` has acquired a bad reputation on the modern web due to overuse, so I was surprised to be using relatively few `<div>` elements, though once I started using elements that I wanted to style together, I ended up with around 20. It shows how unnecessary most `<div>`s probably are, though this site has minimal generic “sections”.

Among the first more obscure elements that I added to this site were `<figcaption>` and `<figure>`. I was adding some blog posts that had originally been published on Medium, and wanted to add captions below images in a web-semantically correct way. Though after reading the documentation, which says `<figure>` can be used for, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure#usage_notes">image, illustration, diagram, code snippet, etc.,</q> I realized that there are a lot of places where I currently have code blocks that I could be using them.

I have always liked `<hr>` elements a lot, but I’m never sure when to use them. The documentation says, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr#try_it">While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS</q> which made me revisit the `<hr>` styles on this site and I decided to include an emoji in an `hr:after` rule, though I should check how that works on a screen reader.

The items in the (inline styled) lists of elements on this page are of course `<li>` elements, though I had never looked at the documentation until now. It’s interesting that the same `<li>` element is used in both `<ol>` and `<ul>` lists, with quirks like <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attributes">The value attribute has no meaning for unordered lists</q>, but is not used to wrap the `<dt>` and `<dd>` elements in a `<dl>`.

I had not encountered `<menu>` before writing this post, and I was initially surprised that it survived to HTML 5 (while [`<menuitem>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem) didn’t) because modern browsers treat it as essentially a `<ul>`. Researching further [on Wikipedia](https://en.wikipedia.org/wiki/HTML_element#Basic_text) I read:

<figure class="blockquote-figure">
    <blockquote cite="https://en.wikipedia.org/wiki/HTML_element#Basic_text">MENU existed in HTML Tags, and was standardized in HTML 2.0; deprecated in HTML 4.0 Transitional; invalid in HTML 4.0 Strict; then redefined in HTML5, but removed in HTML 5.2,</blockquote>
</figure

and now I don’t know what to think, but here’s a `<menu>`:

<menu id="interactive-menu">
    <script type="text/javascript">
        const b = (id) => `
            <div
                id="${id}"
                class="confetti"
                style="left: ${Math.random() * 1000}px"
            >
                🎈
            </div>
        `;
        const s = (id) => `
            <div
                id="${id}"
                class="confetti"
                style="left: ${Math.random() * 1000}px"
            >
                🧽
            </div>
        `;
        const m = document.getElementById('interactive-menu');
        function balloons() { confetti(b) };
        function sponges() { confetti(s) };
        function confetti(f) {
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            for (let i = 0; i < 3; i++) {
                const id = `c-${String(Math.random()).slice(2, 9)}`
                m.insertAdjacentHTML('beforeend', f(id))
                sink(id)
            }
            async function sink(id) {
                const e = document.getElementById(id);
                const startTop = getComputedStyle(e)?.top ?? '0px';
                let top = parseInt(startTop.slice(0, startTop.indexOf('p')), 10);
                while (top < vh + 100) {
                    top = top + 2;
                    e.style.top = `${top}px`;
                    await new Promise(r => setTimeout(r, 16.67));
                }
                e.remove();
            }
        }
    </script>
    <li><button onclick="balloons()">Balloons</button></li>
    <li><button onclick="sponges()">Sponges</button></li>
    <noscript>
        <p>This menu will only be interactive when JavaScript is enabled.</p>
    </noscript>
</menu>

`<ol>` and `<ul>` are some of the HTML elements I used in my earliest web pages, and more recently I try to use `<ul>` with CSS in places that are semantically lists, but might not be styled like a traditional list.

I was surprised not to find more guidance on using `<p>` tags on [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p), something I wonder often when adding non long form text to a website is, “is this really a paragraph?” But, it seems like as far as HTML is concerned, if it’s not a heading, then probably!

Before reading the documentation I had really only considered using `<pre>` tags along with `<code>` tags for code blocks, but the example used on MDN is used to show how `<pre>` can display meaningful whitespace for things like:

<figure class="no-padding-figure"><pre role="img" aria-label="An ASCII picture of a house with the label, 'in this house we write semantic HTML'">
  ┏┓
  ┃┃╱╲ in
  ┃╱╱╲╲ this
  ╱╱╭╮╲╲house
  ▔▏┗┛▕▔ we
  ╱▔▔▔▔▔▔▔▔▔▔╲
write semantic HTML
  ╱╱┏┳┓╭╮┏┳┓ ╲╲
  ▔▏┗┻┛┃┃┗┻┛▕▔
</pre></figure>

</section>

<section id="inline-text-semantics">

### Inline Text Semantics

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [`<abbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
- [`<b>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
- [`<bdi>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
- [`<bdo>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)
- [`<br>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
- [`<cite>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
- [`<code>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
- [`<data>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data)
- [`<dfn>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
- [`<em>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
- [`<i>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
- [`<kbd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
- [`<mark>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
- [`<q>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
- [`<rp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
- [`<rt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
- [`<ruby>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
- [`<s>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
- [`<samp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)
- [`<small>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
- [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
- [`<strong>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
- [`<sub>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
- [`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
- [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
- [`<u>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
- [`<var>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)
- [`<wbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)

As with other very common tags I was curious to get to the documentation for `<a>` to see if there was anything I was unaware of, or had been using incorrectly. I was surprised to discover that `<a href="#">link</a>` links to the top of the page after years as just using it as a placeholder when I didn’t know the URL yet.

`<abbr>` seems likely to be the least used tag, especially because the <abbr title="MDN Web Docs, previously Mozilla Developer Network and formerly Mozilla Developer Center">MDN</abbr> documentation doesn’t make a great case for it <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr#default_styling">the purpose of this element is purely for the convenience of the author.</q>

The distinction between `<b>` and `<strong>`, as the docs have it, is not what I had previously thought (that `<strong>` was the HTML5 replacement for `<b>`). I think the distinction is more nuanced and overlapping than the technical nature of the documentation is really able to convey. The way I will probably explain it to other people in the future is that, for the most part, you should use `<b>` for <b>single words</b> (or compound words), <strong>and `<strong>` for whole sentences or phrases</strong>. This is more a rule of thumb and bypasses the actual distinction. The documentation reads:

<figure>
    <blockquote>
        The <code>&lt;strong&gt;</code> element is for content that is of greater importance, while the <code>&lt;b&gt;</code> element is used to draw attention to text without indicating that it’s more important.
    </blockquote>
    <figcaption>
        <cite><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong#b_vs._strong">MDN on “<code class="code-regular">&lt;b&gt;</code> vs. <code class="code-regular">&lt;strong&gt;</code>”</a></cite>
    </figcaption>
</figure>

But I can’t think of many instances where I would want to draw attention to a word, where that word is not more important than other words. The recommendation seems to be from a reality where, for the most part, all words are of equal importance, but deserve different amounts of attention, which doesn’t seem very common.

I’ll probably think of `<b>` from now on as the HTML tag with a similar effect as the quotation marks used for “emphasis” you might see on signage that can cause intergenerational confusion.

`<bdi>` is a tag for a concept that I hadn’t considered until now, text whose direction might (or might not) differ from the direction of the surrounding text. The examples on the documentation are all names, but could stand in for any user inputted text. In the future I will probably try to wrap any tags, like the ones controlled by the input below, that might contain arbitrary user inputted unicode characters in a `<bdi>` tag just to be safe.

<form>

    <label for="bdi-name-input">What is your name?</input>
    <input type="text" id="bdi-name-input">

</form>

<p>Hello, <bdi id="bdi-name-display">&nbsp;&nbsp;&nbsp;&nbsp;</bdi>, thanks for reading!</p>
<div>
<button id="rtl-fill" type="button">Fill with a RTL language name</button> (<a href="https://en.wikipedia.org/wiki/Abdul_Rahman_Munif" target="_blank">عَبْد الرَّحْمٰن بِن إِبْرَاهِيم المُنِيف</a>)
</div>
<script type="text/javascript">
    const bdi_i = document.getElementById("bdi-name-input");
    const bdi_o = document.getElementById("bdi-name-display");
    const bdi_b = document.getElementById("rtl-fill");
    bdi_i.addEventListener("input", function(event) {
        bdi_o.innerHTML = event.target?.value || "&nbsp;&nbsp;&nbsp;&nbsp;";
    })
    bdi_b.addEventListener("click", function(event) {
        const rtl_name = 'عَبْد الرَّحْمٰن بِن إِبْرَاهِيم المُنِيف';
        bdi_o.innerHTML = rtl_name;
        bdi_i.value = rtl_name;
    })

</script>

<noscript>
    <p>This form will only be interactive when JavaScript is enabled.</p>
</noscript>

`<bdo>` I will probably use less often because I don’t work with RTL languages often, but it is still good to know how to handle small amounts of RTL text, like this link to the page for HTML on the Farsi Wikipedia: <a href="https://fa.wikipedia.org/wiki/%D8%A7%DA%86%E2%80%8C%D8%AA%DB%8C%E2%80%8C%D8%A7%D9%85%E2%80%8C%D8%A7%D9%84" target="_blank"><bdo dir="rtl">اچ‌تی‌ام‌ال</bdo></a>.

`<br>` is interesting to me, because for a time (a long time ago) it seemed to be as misused as `<div>` has been recently, but, as CSS has gotten more robust that is probably less often the case; though I wonder if it is still taught early in HTML classes. It’s interesting that the example use case in the docs is poetry because it makes me wonder how the grey area between a paragraph and a standalone line was considered in creating the HTML spec. It also seems like a `<pre>` tag might be a better fit in some cases.

`<cite>` and `<q>` are interesting because they try to add HTML semantic elements for meaning that is also conveyed by visible punctuation in most languages. It’s the kind of redundancy that underscores repetitiousness of working with computers (the default style for <cite>cite</cite> uses italics while <q cite="this is not really a quotation">q</q> adds quotation marks not in the text.).

I’ve clearly used many `<code>` elements in this post so far, but reading the documentation made me wonder whether the recently released Markdown support in Google Docs uses `<code>` for text, but on inspecting the HTML of a Doc, I remembered that `<canvas>` is used to render the document now.

Occasionally the MDN documentation examples are difficult to mentally translate to real-world use cases. `<data>` is one of these, where the only examples show a `<data>` element with a `value` property with product IDs wrapped around product names In that case the IDs seem either, user facing, in which case it would probably be better to display them to the user, or non user facing, in which case, I’m not sure who the “data” is for. Interestingly, `<data>` doesn’t seem to appear in the [W3C HTML5 specification](https://www.w3.org/TR/2011/WD-html5-20110405/).

`<dfn>` is another strange element because it seems like it is misnamed, as it wraps, not the definition of a term, but instead that term within the definition. It does [only seem to have been part of the never officially adopted HTML 2.0 proposal](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html), and it exemplifies the academic nature of the early web. The [HTML Tags: Past, Present, Proposed](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html) page on martinrinehart.com defines <dfn title="Hyper Text Markup Language 2.0">HTML 2.0</dfn> as <q cite="http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html">There never was an HTML 2.0 standard, but these all shaped browser development in the late 20th century</q> with references to several RFC documents.

`<em>` and `<i>` bring up similar usage questions as `<b>` and `<strong>`, but in my opinion with even more nuance, especially, as the documentation notes, with other more specific tags like `<cite>` that also by default italicize text in most browsers. The rule of thumb from above also for the most part fits here, `<em>` for single words, and `<i>` for sentences or phrases, though the examples in the documentation seem to mostly use `<i>` for drawing attention to potential confusion, as in, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#i_vs._em">The word <i>the</i> is an article</q>.

`<kbd>` is another tag that makes me wonder about the conceptual boundaries of the usage of the tag. It is intended for specifying keys on a computer keyboard, for example: to type the <code>&lt;</code> character used for (the non escaped) version of the tags in this post, I press <kbd>Shift</kbd> + <kbd>,</kbd> (the styles here on <code>&lt;kbd&gt;</code> are applied through custom CSS). But I’m curious if it would also be appropriate to put a `<kbd>` around something like <i>Right click</i> (in this case I used `<i>` instead).

`<mark>` is interesting because it suggests a 2-way authoring web that was originally envisioned, but failed to come to fruition, with usage notes like, <q>Think of this like using a <mark>highlighter pen</mark> in a book to mark passages that you find of interest.</q> The yellow here is the default style in all major browsers.

`<rp>`, `<rt>`, and `<ruby>` all relate to rendering [“ruby” or “agate” fonts](<https://en.wikipedia.org/wiki/Agate_(typography)>), which are the smallest legible text used in print. They are used in HTML to, <q>provide pronunciation, translation, or transliteration information for East Asian typography.</q> Because I don’t read any East Asian languages, I’ll use the same example as the MDN docs do below. Interestingly, `<rp>` is used to hide parentheses characters, which are included in the source. It’s surprising to me that there is an element to hide these characters in a very rare instance, but we still rely on CSS to [hide content visually](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#hiding-content-visually) (but still show it to screen readers).

<ruby>
漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>

`<s>` is the strikethrough element, which should be used to indicate text that is not accurate or relevant, but was previously. Along with `<menu>` it is one of two elements (or [according to MDN 3 with `<u>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u#usage_notes)) that were [deprecated in HTML 4.01, and un-deprecated and redefined in HTML5](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html). The redefinition changes the use of the tag from presentational, which should now be achieved with CSS, to relevant to the context of the text. However, some screen readers don’t announce the strikethrough, which seems potentially confusing. I’ve added the CSS recommended by the MDN docs to my website, so the strikethrough should be announced here.

<ul>
  <li><s>HTML 3.0: <code>&lt;s&gt;</code> is used for presentation</s></li>
  <li>HTML 5: <code>&lt;s&gt;</code> is used for removed text</li>
</ul>

`<samp>` is another element I wasn’t aware of before reading the MDN docs. It is used for rendering the output of a computer program, which I had previously just used `<code>` for (I just updated my [Raspberry Pi blog post](/blog/how-to-raspberry-pi-server/) to use `<samp>`). Another example is below:

<figure class="figure-with-outline">
<figcaption>A “Hello, World” program in JavaScript:</figcaption>
<code>
console.log("Hello, World")
</code>
<br /><br />
<samp>
Hello, World
</samp>
</figure>

`<small>` is used to render smaller text, which is something I would usually have done with CSS. The MDN docs don’t provide much clarity about which strategy to use: <q>Authors are encouraged to use their best judgement when determining whether to use <code>&lt;small&gt;</code> or CSS.</q>. <small>I will probably continue to use CSS for the most part since the effect seems to be presentational for the most part.</small>

<p><code>&lt;span&gt;</code> is a very familiar element, but reading the documentation made me wonder for the first time why HTML and CSS allow contradictory element styles like a <div style="display: inline"><code>&lt;div style="display: inline" /&gt;</code></div><p>

<p> or a <span style="display: block"><code>&lt;span style="display: block" /&gt;</code></span>. Though the <code>&lt;div&gt;</code> breaks the parent <code>&lt;p&gt;</code> tag, while the <code>&lt;span&gt;</code> does not.</p>

`<sub>` (used for footnotes here) and `<sup>` (used in the equation below) are more elements I probably have used the CSS implementations of previously (though it is appropriate for presentation only super or subscript.)

`<time>` seems like a helpful element for creating semantic HTML, but even Google doesn’t seem to use it in [search results](https://www.google.com/search?q=%22Patrick+Weaver%22+%22HTML%22). I’ve updated the dates on my blog posts to use it.

`<u>` has probably my favorite quote from the MDN docs, <q>Most of the time, you actually don’t want to use <code>&lt;u&gt;</code>.</q> Their strongest recommendation seems to be indicating <u class="u-sp">spellling</u> errors.

`<var>` is a way to indicate semantically that a string is a variable for either math or programming. For example, rendering the pythagorean theorem uses both `<var>` and `<sup>`: <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup>.

`<wbr>` was also a new element until now, but it solves a problem I have hit many times before, breaking long “words” at certain points, specifically URLs. If I put a `<wbr>` element at clear break points in this URL: [https://www.patrickweaver.net<wbr />/pages<wbr />/a<wbr />very<wbr />long<wbr />url<wbr />without<wbr />any<wbr />punctuation<wbr />but<wbr />still<wbr />made<wbr />up<wbr />of<wbr />words/](https://www.patrickweaver.net/pages/averylongurlwithoutanypunctuationbutstillmadeupofwords/) then it will break at clear points at different screen widths, which is is more readable compared to the same link without the `<wbr>` elements:

<p class="very-long-url-wrapper"><a href="https://www.patrickweaver.net/pages/averylongurlwithoutanypunctuationbutstillmadeupofwords/">https://www.patrickweaver.net/pages/averylongurlwithoutanypunctuationbutstillmadeupofwords/</a></p>

Though including hyphen characters in the URL also creates clear breakpoints in modern browsers. I did have to wrap the URL above in a special scrollable `<p>` to prevent it from breaking the layout of the rest of the page.

</section>

<section id="image-and-multimedia">

### Image and Multimedia

- [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
- [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
- [`<track>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

`<area>` and `<map>` are elements that I hadn’t been familiar with previously, even though I had made a few image map type websites in the days before CSS 3. It seems like an indication of how seldom they are used these days that the tools for debugging the boundaries of `<area>` elements are hard to use. One `<area>` border at a time will display while using tab focus, but styling the elements does not work (unless there is a `display` hack I couldn’t figure out). It’s also somewhat strange that `<area>` is essentially an `<a>` with a shape.

Here’s a `<map>` (with `<area>`s on each tag linking to MDN) of a handwritten HTML document I made for June 3rd’s [HTML Day Freewrite](https://html.energy/events.html) in SF.

<figure>
<map name="park-html-map">
    <area shape="rect" coords="38 20 150 55" alt="HTML tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html">
    <area shape="rect" coords="32 62 143 98" alt="head tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head">
    <area shape="rect" coords="32 107 170 140" alt="title tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">
    <area shape="rect" coords="28 195 195 230" alt="title closing tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">
    <area shape="rect" coords="25 240 178 275" alt="head closing tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head">
    <area shape="rect" coords="22 287 130 325" alt="body tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body">
    <area shape="rect" coords="201 285 297 320" alt="body closing tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body">
    <area shape="rect" coords="30 334 160 374" alt="html tag" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html">
</map>
<img usemap="#park-html-map" src="/images/blog/html/park-html.jpg" alt="A processed photograph of handwritten HTML in a notebook" style="width: 300px;">
</figure>

`<audio>` is one of the classic multimedia HTML 5 tags so I’ve used it before, but thinking about it now, it’s surprising I don’t see them more often in the 2020s. I would guess that there are more in use than I thought, for example, the [Bandcamp](https://bandcamp.com) player uses a hidden `<audio>` element even though the UI is a custom mix of `<a>` and `<div>`s inside a `<table>` oddly enough.

<figure>

<audio controls src="/images/blog/html/audio-element.m4a"></audio>

<figcaption>A recording of me reading the paragraph above. (Excuse my scratchy late night voice)</figcaption>
</figure>

`<img>` is of course one of the first elements I used, but I was curious what properties could be used with it that I might not have heard of. `srcset`, used for specifying multiple sizes of the same image to load at different screen resolutions, was one of those. I’ve created a demo below, which goes against the spirit of `srcset`.

The image below has 3 images provided to its `srcset` property:

1. A yellow background and a monospace font that is 300 pixels wide and should render when the page is less than 520 pixels wide
2. A blue background and a serifed font that should render when the page is between 520 and 800 pixels wide
3. A green background and a script font that should render when the page is greater than 800 pixels wide.

<img
    src="/images/blog/html/srcset-700.png"
    srcset="/images/blog/html/srcset-300.png 300w, /images/blog/html/srcset-500.png 500w, /images/blog/html/srcset-700.png 700w"
    sizes="(max-width: 520px) 300px, (max-width: 800px) 500px, 700px"
    style="max-width: 700px; width: 100%;"
    alt="A demo of the srcset property of the HTML <img> tag that loads different images at different sizes"
    id="image-with-srcset"
 />

I have tested it, and it does work, but it takes a lot of forethought to make sure that you will be able to load the correct image. Things like the browser’s cache, and scaled displays will change the behavior. If you want to see the effect you will probably need to load the page in a private window on a non scaled or “retina” display.

It’s interesting that while both `<audio>` and `<video>` are less widely used than `<img>` even after their introduction in HTML 5, the distribution of videos online seems to be centralized, mostly on YouTube, while audio is more decentralized, with people serving individual files when distributing things like podcasts, even though the audio player that is often used is not on the web.

<figure>
<video
    controls
    height="300"
    muted
    poster="/images/blog/html/audio-and-video-tags-poster.jpg"
    preload="metadata"
    width="495"
    id="audio-and-video-tags-video"
>
    <source src="/images/blog/html/audio-and-video-tags.mp4" type="video/mp4" />
    <track default kind="captions" srclang="en" src="/images/blog/html/audio-and-video-tags.vtt" />
    <a href="/images/blog/html/audio-and-video-tags.mp4"> Download the video</a>
</video>
<embed
    type="video/mp4"
    src="/images/blog/html/audio-and-video-tags.mp4"
    width="495"
    height="300"
    title="A screen recording of my dev setup while writing the paragraph above."
    style="display: none"
    id="audio-and-video-tags-embed"
/>
<object
type="video/mp4"
data="/images/blog/html/audio-and-video-tags.mp4"
width="495"
height="300"
style="display: none;"
id="audio-and-video-tags-object">
<img src="/images/blog/html/audio-and-video-tags-poster.jpg" alt="a still of a screen recording" />
</object>
<figcaption>A screen recording of my dev setup while writing the paragraph above. </figcaption>
<fieldset>
    <legend>Select below to control if the video above is shown in a <code>&lt;video&gt;</code>, <code>&lt;embed&gt;</code>, or <code>&lt;object&gt;</code> element:</legend>
    <div>
        <input type="radio" id="audio-and-video-tags-video-option" name="audio-and-video-tags" value="video" checked />
        <label for="audio-and-video-tags-video-option"><code class="code-regular">&lt;video&gt;</code></label>
    </div>
    <div>
        <input type="radio" id="audio-and-video-tags-embed-option" name="audio-and-video-tags" value="embed" />
        <label for="audio-and-video-tags-embed-option"><code class="code-regular">&lt;embed&gt;</code></label>
    </div>
    <div>
        <input type="radio" id="audio-and-video-tags-object-option" name="audio-and-video-tags" value="object" />
        <label for="audio-and-video-tags-object-option"><code class="code-regular">&lt;object&gt;</code></label>
    </div>
</fieldset>
<script type="text/javascript">
    const viEl = document.getElementById('audio-and-video-tags-video');
    const emEl = document.getElementById('audio-and-video-tags-embed');
    const obEl = document.getElementById('audio-and-video-tags-object');
    document.querySelectorAll("input[name='audio-and-video-tags']").forEach((input) => {
        input.addEventListener('change', (event) => {
            const shouldDisplay = event.target.value;
            if (shouldDisplay === 'video') {
                viEl.style.display = 'block';
                emEl.style.display = 'none';
                obEl.style.display = 'none';
            } else if (shouldDisplay === 'embed') {
                viEl.style.display = 'none';
                emEl.style.display = 'block';
                obEl.style.display = 'none';
            } else if (shouldDisplay === 'object') {
                viEl.style.display = 'none';
                emEl.style.display = 'none';
                obEl.style.display = 'block';
            }
        });
    });
</script>
<noscript>
    <p>The embedded video elements will only be toggleable when JavaScript is enabled.</p>
</noscript>
</figure>

One reason for this may be that there are still some quirks with `<video>` elements. For example, there is a `<figcaption>` accompanying the video above, but when I initially tried creating the element with a self closing tag it did not render. Also, as I’m writing this, Safari does not support the video at all, likely because of the development server I am using not supporting the “Range” request header. I am curious to find out whether the hosted version of the site (on GitHub pages) will support playing the video in Safari. I thought that I might have a similar issue with `<track>`, but that just turned out to be me not setting up my [Eleventy](https://www.11ty.dev/) build correctly for `.vtt` files.

</section>

<section id="embedded-content">

### Embedded Content

- [`<embed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
- [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
- [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
- [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [`<portal>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal)
- [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)

It is somewhat surprising that `<embed>` and `<object>` have not been deprecated since most of their uses have been superseded by specific tags like `<video>` and `<iframe>`. Maybe eventually they will be, or they will just live on in the name of backwards compatibility.

Speaking of `<iframe>` it’s also interesting that the very 90s name “iframe” (“inline frame”, not “iPod Frame” or something, and I was surprised to learn does render `display: inline`) has survived while `<frame>` was deprecated in HTML 5. I thought that `<iframe>` might be a way to force the `<img>` `srcset` example above to render the smaller images on a high DPI display, but even at 150px wide on my device the large image still renders:

<figure>
<iframe width="150" height="200" src="/pages/srcset"></iframe>
<figcaption>An embed of a page with just the srcset example  from above at 150px wide.
</figure>

`<picture>` is a tag that is, with `<source>` actually intended for layout tricks like the `srcset` experiment I tried above, rendering different versions of an image in different situations. The image below should show an icon of a computer when used with a mouse/trackpad, or an icon of a phone when used with a touch screen (using the `pointer` media query to determine), and should fall back to an image of a red circle with a line through it when neither media query is appropriate. The responsive design developer tools in your browser should trick it, though interestingly, not when inspecting an element.

<picture>
    <source
        srcset="/images/blog/html/no.png"
        media="(pointer:none)"
        type="image/png"
    />
    <source
        srcset="/images/blog/html/phone.png"
        media="(pointer:coarse)"
        type="image/png"
    />
    <source
        srcset="/images/blog/html/computer.png"
        media="(pointer:fine)"
        type="image/png"
    />
    <img src="/images/blog/html/no.png" alt="an icon of a computer when used with a mouse/trackpad, an icon of a phone when used with a touch screen, or an image of a red circle with a line through otherwise">
</picture>

`<portal>` is one of the more mysterious sounding elements, and seems intended for the iPad-style link previews that I’ve seen implemented on some websites on hover, [but also come with SPA-like performance benefits](https://web.dev/hands-on-portals/). It unfortunately is still an experimental feature and isn’t (as of 2023) enabled by default in any browsers. It seems that it [used to be an available experimental flag in Chrome](https://medium.com/swlh/portals-in-chrome-going-on-a-test-drive-66b16971fb19), but today in 2023 it is not available at [chrome://flags](chrome://flags). I’ll include one below in case it works for future readers! I did try it in an very old Chromium version I still had installed. `<portal>` doesn’t seem to be part of the [HTML 5 Spec](https://www.w3.org/TR/2011/WD-html5-20110405/), I’m not sure why it’s included in the MDN documentation.

<figure>
<portal id="pw-links-portal" src="https://www.patrickweaver.net/links/#links"></portal>
<figcaption>
A <code>&lt;portal&gt;</code> element that should display the <a href="https://www.patrickweaver.net/links/#links">“Links”</a> page on patrickweaver.net, if the feature is ever implemented in browsers.
</figcaption>
</figure>

</section>

<section id="svg-and-mathml">

### SVG and MathML

- [`<svg>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg)
- [`<math>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/math)

This is an interesting section of the documentation because it pairs one of the most ubiquitous elements with one of the most obscure. `<svg>` elements are everywhere, especially that tools like Figma and Sketch have made them easy to prototype and export. Pairing them with `<math>` in the documentation evokes a more artisanal, hand-crafted `<svg>` that is relatively uncommon these days. I’ve gone hand-crafted here and drawn some `<svg>` circles.

<figure>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="white" fill="white" width="200"><circle cx="50" cy="50" r="49" fill="red" /><circle cx="47" cy="50" r="42" fill="orange" /><circle cx="50" cy="53" r="35" fill="yellow" /><circle cx="55" cy="52" r="28" fill="green" /><circle cx="52" cy="48" r="21" fill="indigo" /><circle cx="54" cy="50" r="14" fill="blue" /><circle cx="52" cy="55" r="7" fill="violet" /></svg>
<figcaption>An svg that shows overlapping circles each with a different color of the rainbow.</figcaption>
</figure>

<p><code>&lt;math&gt;</code> is really a wrapper element for other non HTML elements from the <a href="https://www.w3.org/TR/MathML3/" target="_blank">MathML</a> namespace, so I guess I don’t have to include every possible child element here. I’ll stick to something simple: <math xmlns='http://www.w3.org/1998/Math/MathML' display="inline"><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>5</mn></mrow></math>
</p>

</section>

<section id="scripting">

### Scripting

- [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
- [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
- [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

I did a deep dive into `<canvas>`, specifically [drawing crisp lines](https://doodles.patrickweaver.net/canvas-lines/) in 2020 while I was at [Recurse Center](https://www.recurse.com/). One thing I wasn’t familiar with before reading the MDN docs though, was that there is a maximum size for a `<canvas>` element in each browser (though all modern browsers it is about 32 thousand pixels in each dimension). Below is a re-implementation of `<marquee>` with `<canvas>` and `<script>` (and `<noscript>`).

<canvas id="marquee-canvas" width="600" height="100"
style="width: 300px; height: 50px;"></canvas>

<label for="toggleMarqueeButton">Start or Stop the fake `<marquee>`:</label>
<button onClick="toggleMarquee()" id="toggleMarqueeButton">Stop</button>

<script type="text/javascript">
    const canvasWidth = 300;
    const canvasHeight = 50;
    var dpr = window.devicePixelRatio || 1;
    var canvas = document.getElementById("marquee-canvas");
    var context = canvas.getContext("2d");
    canvas.width = canvasWidth*dpr;
    canvas.height = canvasHeight*dpr;
    context.scale(dpr, dpr);
    context.fillStyle = "black";
    context.font = "bold 40px Arial";

    const defaultTimer = 16.6;
    let timer = defaultTimer;
    let xVal = canvasWidth;
    const text = "<marquee>";

    const toggleMarqueeButton = document.getElementById("toggleMarqueeButton");
    let marqueeStatus = true;
    function toggleMarquee() {
        toggleMarqueeButton.innerHTML = marqueeStatus ? "Start" : "Stop";
        timer = marqueeStatus ? 0 : defaultTimer;
        marqueeStatus = !marqueeStatus;
        if (marqueeStatus) draw();
    }

    function drawText(text, x, y) {
        context.fillText(text, x, y);
    }

    function draw() {
        setTimeout(() => {
            if (xVal < 0) {
                xVal = canvasWidth;
            }
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            drawText(text, xVal, 42);
            drawText(text, xVal - canvasWidth, 42);
            xVal--;
            if (timer > 0) draw();
        }, timer);
    }
    draw();
</script>

<noscript><p>The <code>&lt;marquee&gt;</code> like animation above will only be render when JavaScript is enabled.</p></noscript>

There were a lot of tags that I expected to feel a little out of date when I started this post, but `<script>` wasn’t one of them, but now that I have written most of the post, and have created a few `<script>` tags, I’m realizing how little I use them now. For most of the code that I write, even though most of it is JavaScript, all of the “scripting” gets put into on `<script>` tag by build tools and it ends up feeling more like boilerplate than a “markup” tag.

On the other hand, for most of the interactive websites I’ve made, I’ve rarely included a `<noscript>` tag with the exception of those minified and compiled single page apps where the user would likely get a blank page if it weren’t for the `<noscript>` tag (and even then, probably less often than I should have, though I’ve made sure to include one with every `<script>` tag here).

</section>

<section id="demarcating-edits">

### Demarcating Edits

- [`<del>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
- [`<ins>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)

Another set of <ins>new to me</ins> elements <del>I had never come across before</del> <ins>on</ins> reading the MDN documentation, `<del>` and `<ins>` seem to be intended for <del>creating</del> <ins>use in</ins> a word processor. Reading about them led to yet another round of, “<del>I wonder if these are used in rendering Google Docs?</del> <ins>Oh wait, it’s all `<canvas>`</ins>.”

</section>

<section id="table-content">

### Table Content

- [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
- [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)
- [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)
- [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
- [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
- [`<tfoot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
- [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
- [`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
- [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)

It’s not a new insight that `<table>` elements were overused for layout purposes on the early web, but an irony that I’m only realizing now is that recently, as the web has gotten more and more populated by data, that `<table>` elements have become rarely used, probably mostly due to their clunky default design, but probably also because one main goal of creating a web UI for the data that is otherwise probably stored in database tables, is to create a <i>different</i> view of the same data.

I don’t have any tabular data as this is an exclusively <em>document</em> based blog post, but below I’ve added a table with some custom CSS and “data” on emoji that is likely only accurate for the Apple emoji set in 2023. I wasn’t familiar with `<col>` and `<colgroup>` before, but I don’t know that there are many cases where I would use them rather than a more custom, non `<table>` design.

<div class="table-wrapper">
<table id="weird-table">
    <caption>
        A table with a custom CSS
    </caption>
    <colgroup>
        <col>
        <col span="2" class="low-numbers">
        <col span="2">
        <col span="2" class="high-numbers">
    </colgroup>
    <thead>
        <tr>
            <th scope="row">Number</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Emoji</th>
            <td>1️⃣</td>
            <td>2️⃣</td>
            <td>3️⃣</td>
            <td>4️⃣</td>
            <td>5️⃣</td>
            <td>6️⃣</td>
        </tr>
        <tr>
            <th scope="row">Emoji with leaves</th>
            <td rowspan="2">🥭</td>
            <td>🌱</td>
            <td>🍂</td>
            <td>🍀</td>
            <td>🪴</td>
            <td></td>
        </tr>
        <tr>
            <th scope="row">Emoji with fruit</th>
            <td>🍒</td>
            <td>🫐</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th scope="row">Emoji with slices</th>
            <td>🍰</td>
            <td>🥪</td>
            <td></td>
            <td>🥒</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Totals</th>
            <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
        </tr>
    </tfoot>
</table>
</div>
</section>

<section id="forms">

### Forms

- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
- [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
- [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
- [`<meter>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
- [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
- [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
- [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
- [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
- [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

I have usually used `<form>` and it’s associated elements when submitting the form would redirect to a new page, not for in-page user interaction, but either is valid. I would guess the form elements are probably the most important for accessibility so I will likely refer to the documentation whenever implementing one in the future.

<label for="everything-form">Fill out this form and scroll down to get an emoji surprise below!</label>

<form id="everything-form">
<div id="eform-type">
<label for="type-choice">Choose an emoji type:</label>
<input list="emoji-types" id="type-choice" name="type-choice">
<datalist id="emoji-types">
<option value="Fruit" />
<option value="Dessert" />
<option value="Drinks" />
<option value="Animals" />
</datalist>
</div>
<div id="eform-size">
<fieldset id="size-choice">
<legend>Select a size:</legend>
<input type="radio" name="size-choice" id="small-size-choice" value="small" />
<label for="small-size-choice">Small</label>
<input type="radio" name="size-choice" id="large-size-choice" value="large" />
<label for="large-size-choice">Large</label>
</fieldset>
<label for="eform-size-meter">Size Meter:</label>
<meter id="eform-size-meter"
       min="0" max="2"
       low="1" high="2" optimum="2"
>
</meter>
</div>
<div id="eform-color">
<label for="color-choice">Color:</label>
<select id="color-choice">
    <option value="" disabled selected>--Please choose an option--</option>
    <optgroup label="Hot">
        <option>Orange</option>
        <option>Red</option>
        <option>Yellow</option>
    </optgroup>
    <optgroup label="Cool">
        <option>Blue</option>
        <option>Green</option>
    </optgroup>
</select>
</div>
<div id="eform-dream">
<label for="dream-input">Share a dream <span id="dream-secret">(secret!)</span></label>
<textarea id="dream-input" cols="1" rows="10" wrap="hard" name="dream-input" placeholder="😶‍🌫️"></textarea>
</div>
<br/>
<label for="form-completion" id="form-completion-label">Form completion:</label>
<progress id="form-completion"
       max="4"
       value="0">
       0/4
</progress>
<br/>
<button id="eform-submit-button" type="submit" disabled>submit</button>
</form>
<h4>Your emoji:</h4>
<output
id="everything-output"
form="everything-form"
for="type-choice small-size-choice large-size-choice color-choice"
name="everything-output"
> </output>

<noscript>Without JavaScript enabled the form above will not be interactive.</noscript>

<script>
    const eform = document.getElementById("everything-form");
    const eOutput = document.getElementById("everything-output");
    const typeChoice = document.getElementById("type-choice");
    const sizeChoice = document.getElementById("size-choice");
    const sizeMeter = document.getElementById("eform-size-meter")
    const colorChoice = document.getElementById("color-choice");
    const dreamInput = document.getElementById("dream-input");
    const formCompletion = document.getElementById("form-completion");
    const eformSubmit = document.getElementById("eform-submit-button");
    let selectedEmoji = "❌";
    let selectedEmojiName = "Form Incomplete";
    eform.addEventListener("submit", (event) => {
        event.preventDefault();
        const el = event?.target?.elements;
        const type = el?.["type-choice"]?.value;
        const size = el?.["size-choice"]?.value;
        const color = el?.["color-choice"]?.value;
        const selected = selectEmoji(type, size, color);
        selectedEmoji = selected.emoji;
        selectedEmojiName = selected.name;
        eOutput.value = `${selectedEmoji}: ${selectedEmojiName}`;
    })
    const fields = {
        "type-choice": 0,
        "small-size-choice": 1,
        "large-size-choice": 1,
        "color-choice": 2,
        "dream-input": 3,
    }
    const complete = [0, 0, 0, 0];
    eformSubmit.disabled = false;
    function fillForm(event) {
        const value = event?.target?.value
        const idShort = event?.target?.id?.slice(0, 3) ?? null;
        complete[fields[event?.target?.id]] = event?.target?.value ? 1 : 0;
        const newCompletion = complete.reduce((a,c) => a + c, 0);
        formCompletion.value = newCompletion
        formCompletion.innerHTML = `${newCompletion}/4`
    }
    typeChoice.addEventListener("input", fillForm);
    sizeChoice.addEventListener("input", fillForm);
    colorChoice.addEventListener("input", fillForm);
    dreamInput.addEventListener("input", fillForm);
    sizeChoice.addEventListener("input", (event) => {
        const idShort = event.target.id.slice(0, 3);
        const v = { sma: 1, lar: 2 }
        sizeMeter.value = v?.[idShort] ?? 0;
    })
    function selectEmoji(type, size, color) {
        if (type === "Fruit") {
            if (color === "Orange") {
                if (size === "small") {
                    return { emoji: "🍊", name: "tangerine" }
                } else if (size === "large") {
                    return { emoji: "🍑", name: "peach" }
                }
            } else if (color === "Red") {
                if (size === "small") {
                    return { emoji: "🍓", name: "Strawberry" }
                } else if (size === "large") {
                    return { emoji: "🍎", name: "Apple" }
                }
            } else if (color === "Yellow") {
                if (size === "small") {
                    return { emoji: "🍋", name: "Lemon" }
                } else if (size === "large") {
                    return { emoji: "🍌", name: "Banana" }
                }
            } else if (color === "Blue") {
                if (size === "small") {
                    return { emoji: "🫐", name: "Blueberry" }
                } else if (size === "large") {
                    return { emoji: "🥥", name: "Coconut" }
                }
            } else if (color === "Green") {
                if (size === "small") {
                    return { emoji: "🥝", name: "Kiwi" }
                } else if (size === "large") {
                    return { emoji: "🍐", name: "Pear" }
                }
            }
        } else if (type === "Dessert") {
            if (color === "Orange") {
                if (size === "small") {
                    return { emoji: "🥮", name: "Mooncake" }
                } else if (size === "large") {
                    return { emoji: "🥧", name: "Pie" }
                }
            } else if (color === "Red") {
                if (size === "small") {
                    return { emoji: "🍫", name: "Chocolate" }
                } else if (size === "large") {
                    return { emoji: "🍧", name: "Shaved Ice" }
                }
            } else if (color === "Yellow") {
                if (size === "small") {
                    return { emoji: "🍨", name: "Ice Cream" }
                } else if (size === "large") {
                    return { emoji: "🍰", name: "Cake" }
                }
            } else if (color === "Blue") {
                if (size === "small") {
                    return { emoji: "🍬", name: "Candy" }
                } else if (size === "large") {
                    return { emoji: "🍭", name: "Lollipop" }
                }
            } else if (color === "Green") {
                if (size === "small") {
                    return { emoji: "🍡", name: "Dango" }
                } else if (size === "large") {
                    return { emoji: "🥗", name: "Dessert Salad" }
                }
            }
        } else if (type === "Drinks") {
            if (color === "Orange") {
                if (size === "small") {
                    return { emoji: "🍺", name: "Beer" }
                } else if (size === "large") {
                    return { emoji: "🍻", name: "Two Beers" }
                }
            } else if (color === "Red") {
                if (size === "small") {
                    return { emoji: "🍷", name: "Wine" }
                } else if (size === "large") {
                    return { emoji: "🥤", name: "Big Soda Cup" }
                }
            } else if (color === "Yellow") {
                if (size === "small") {
                    return { emoji: "🥂", name: "Champagne Flute" }
                } else if (size === "large") {
                    return { emoji: "🍹", name: "Cocktail" }
                }
            } else if (color === "Blue") {
                if (size === "small") {
                    return { emoji: "🍶", name: "Sake" }
                } else if (size === "large") {
                    return { emoji: "🍶", name: "Sake" }
                }
            } else if (color === "Green") {
                if (size === "small") {
                    return { emoji: "🧃", name: "Juice Box" }
                } else if (size === "large") {
                    return { emoji: "🍾", name: "Champagne Bottle" }
                }
            }
        } else if (type === "Animals") {
            if (color === "Orange") {
                if (size === "small") {
                    return { emoji: "🦊", name: "Fox" }
                } else if (size === "large") {
                    return { emoji: "🐅", name: "Tiger" }
                }
            } else if (color === "Red") {
                if (size === "small") {
                    return { emoji: "🦀", name: "Crab" }
                } else if (size === "large") {
                    return { emoji: "🦑", name: "Squid" }
                }
            } else if (color === "Yellow") {
                if (size === "small") {
                    return { emoji: "🐝", name: "Bee" }
                } else if (size === "large") {
                    return { emoji: "🐱", name: "Cat" }
                }
            } else if (color === "Blue") {
                if (size === "small") {
                    return { emoji: "🦋", name: "Butterfly" }
                } else if (size === "large") {
                    return { emoji: "🐋", name: "Whale" }
                }
            } else if (color === "Green") {
                if (size === "small") {
                    return { emoji: "🐸", name: "Frog" }
                } else if (size === "large") {
                    return { emoji: "🐊", name: "Crocodile" }
                }
            }
        }
        return { emoji:"❌", name: "Invalid Submission" };
    }
</script>

</section>

<section id="interactive-elements">

### Interactive Elements

- [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)

The `<details>` and `<summary>` combination is probably the most common, “You don’t need JavaScript to…” element (another <a href="https://catskull.net/html.html" target="_blank">popular blog</a> post making this point prompted me to finally finish this one). Making this kind of expand/collapse interactive view was one of the first things I used JavaScript for (it was probably jQuery). I remember it being somewhat confusing at the time (2006?), so it’s funny to me to see it so easy with just a couple HTML tags.

<details>
  <summary>Speculation about <code>&lt;details&gt;</code></summary>
  <div>I do wonder if <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> were being considered for the HTML spec today, if they would be withdrawn in favor of a similar effect using CSS.</div>
</details>

I wasn’t aware of the HTML only `<dialog>` before using it here. It requires JavaScript to be useful beyond just its stylistic impact, but it’s an interesting way to create interactions that are more custom than `alert()`, but still simple, because while `alert()` is styled by the browser `<dialog>` can be styled with CSS.

<dialog open>
  <p>Guess who?!</p>
  <form method="dialog">
    <button>Reveal!</button>
  </form>
</dialog>

<pre id="palm-sheriff" role="img" aria-label="A sheriff whose body is made of palm trees.">
       🤠
     🌴🌴🌴
   🌴  🌴  🌴
   👇 🌴 🌴 👇
　 　 🌴 🌴
　 　 🌴 🌴
　 　 👢 👢
  the palm sheriff
</pre>

</section>

<section id="web-components">

### Web Components

- [`<slot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
- [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

Web components had been on a (long) list of “things I should learn more about” for a while, so I was glad to get to this section of the MDN documentation. I was surprised that JavaScript (and `Class` syntax at that) was necessary to get web components to render, but after reading more about the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">Shadow DOM</a>, it makes sense, because HTML has no built in way to encapsulate styles, though it does seem to be somewhat similar conceptually to `<iframe>` elements.

I’ve used web components below to create a table of contents for this post below, though I’m not making the best use of them. One thing I couldn’t quickly figure out how to do, when compared to components from frontend frameworks, is pass in properties that are themselves used as properties of elements in the child template, so in the list below I have to pass a full `<a>` element into each child (which renders the `<li>`), to be able to set the correct `href` property. Someday after finishing this post I will read more about web components and maybe figure out something I’m missing now.

<template id="table-of-contents-item">
    <li><slot name="emoji">✅</slot> <slot name="table-of-contents-link">End of List</slot>
</template>

<template id="table-of-contents">
    <style>
        .table-of-contents {
            border: 2px solid var(--text-2);
            border-radius: 5px;
            padding: 5px 10px;
            background: rgb(255,252,234);
            background: linear-gradient(324deg, rgba(255,252,234,1) 0%, rgba(249,239,255,1) 21%, rgba(255,239,231,1) 100%);
            display: inline-block;
            min-width: 300px;
            width: 80%;
            margin: 0 10%;
        }
        .table-of-contents h4 {
            margin: 0.5rem 0;
            font-size: 1.6rem;
            line-height: 1.8rem;
        }
    </style>
    <div class="table-of-contents">
        <h4>Table of Contents</h4>
        <ul>
            <table-of-contents-item>
                <span slot="emoji">📜</span>
                <a slot="table-of-contents-link" href="#main-root">Main Root</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">📑</span>
                <a slot="table-of-contents-link"  href="#document-metadata">Document Metadata</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">📂</span>
                <a slot="table-of-contents-link"  href="#sectioning-root">Sectioning Root</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🗂</span>
                <a slot="table-of-contents-link"  href="#content-sectioning">Content Sectioning</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🔡</span>
                <a slot="table-of-contents-link"  href="#text-content">Text Content</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">📝</span>
                <a slot="table-of-contents-link"  href="#inline-text-semantics">Inline Text Semantics</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🖼</span>
                <a slot="table-of-contents-link"  href="#image-and-multimedia">Image and Multimedia</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🪟</span>
                <a slot="table-of-contents-link"  href="#embedded-content">Embedded Content</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🧮</span>
                <a slot="table-of-contents-link"  href="#svg-and-mathml">SVG and MathML</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🪄</span>
                <a slot="table-of-contents-link"  href="#scripting">Scripting</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🛠</span>
                <a slot="table-of-contents-link"  href="#demarcating-edits">Demarcating Edits</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">📦</span>
                <a slot="table-of-contents-link"  href="#table-content">Table Content</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">📋</span>
                <a slot="table-of-contents-link"  href="#forms">Forms</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🛝</span>
                <a slot="table-of-contents-link"  href="#interactive-elements">Interactive Elements</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">🕸</span>
                <a slot="table-of-contents-link"  href="#web-components">Web Components</a>
            </table-of-contents-item>
            <table-of-contents-item>
                <span slot="emoji">📠</span>
                <a slot="table-of-contents-link"  href="#"></a>
            </table-of-contents-item>
            <table-of-contents-item>
            </table-of-contents-item>
        </ul>
    </div>

</template>

<script>
    customElements.define("table-of-contents-item", class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById("table-of-contents-item");
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    });
    customElements.define("table-of-contents", class extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById("table-of-contents");
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(templateContent.cloneNode(true));
        }
    });
</script>

<table-of-contents></table-of-contents>

<noscript>Without JavaScript enabled components above will not render.</noscript>

</section>

<section id="obsolete-and-deprecated-elements">

### Obsolete and Deprecated Elements

- [`<acronym>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym)
- [`<big>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big)
- [`<center>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center)
- `<content>`
- [`<dir>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir)
- [`<font>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)
- [`<frame>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame)
- [`<frameset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset)
- [`<image>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image)
- [`<marquee>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee)
- [`<menuitem>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)
- [`<nobr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr)
- [`<noembed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed)
- [`<noframes>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes)
- [`<param>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)
- [`<plaintext>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext)
- [`<rb>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb)
- [`<rtc>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc)
- `<shadow>`
- [`<strike>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike)
- [`<tt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt)
- [`<xmp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp)

There are of course a few <big>deprecated</big> <acronym title="Hyper Text Markup Language">HTML</acronym> elements, so why not <font color="#2FCF6F" face="times" size="5">include</font> them here at the end.

Everyone’s favorite is of course,

<center><code>&lt;marquee&gt;</code></center>

<marquee>Hello!</marquee>

Many of the elements, like `<big>`, `<acronym>`, `<font>` (used above), `<nobr>` and `<strike>` are examples of layout related functionality that has been moved to CSS rather than <strike>have HTML handle it</strike>. The narrow box below has an example of `<nobr>`:

<div id="nobr-box">
    <nobr>This sentence is wrapped in a <code>&lt;nobr&gt;</code>.</nobr>
    <p>This sentence is wrapped in a <code>&lt;p&gt;</code>.</p>
    <p style="white-space: nowrap;">This sentence is wrapped in a <code>&lt;p&gt;</code> with <code>style="white-space: nowrap;"</code>.</p>
</div>

There are some other strange ones as well though. I couldn’t implement `<content>` and `<shadow>` here because they were never fully implemented part of the web components spec. I’ll add some below anyway though.

<figure>
<shadow></shadow>
<content></content>
<figcaption><code>&lt;shadow&gt;</code> and <code>&lt;content&gt;</code> elements (that won’t render).</figcaption>
</figure>

And `<dir>` is a very <i>webserver</i> version of `<ul>` for listing directories. Since my Eleventy static site generator does use directories here’s a list:

<dir>
    <li><a href="/blog">/blog</a></li>
    <li><a href="/css">/css</a></li>
    <li><a href="/images">/images</a></li>
    <li><a href="/notes">/notes</a></li>
    <li><a href="/pages">/pages</a></li>
    <li><a href="/portfolio">/portfolio</a></li>
</dir>

Some of deprecated elements won’t render without some extra work, for example `<frame>` and `<frameset>` are designed to be used instead of a `<body>`, for I guess some kind of collage web page made up of other pages. I’ve ironically only been able to use them inside of an `<iframe>` below.

<figure>
<iframe width="300" height="300" src="/pages/frameset"></iframe>
<figcaption>An embed of a <a href="/pages/frameset" target="_blank">page</a> with <code>&lt;frameset&gt;</code> and <code>&lt;frame&gt;</code> elements that itself embeds the Links page of this site.
</figure>

I expected that `<image>` wouldn’t work since the MDN documentation says:

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image">
    This does not appear to have been part of any formal specification. It was mentioned in HTML+ Discussion Document - Dave Raggett, November 8, 1993 (Section 5.9 - Images), but was not part of the first revision of HyperText Markup Language Specification - 2.0 in 1994.
</blockquote>

But it does seem to work in some browsers in 2023, though this might be just a fallback for potential confusion with `<img>`.

<image src="/images/blog/html/fax.png" width="100">An icon of a fax machine</image>

One of the more interesting browser compatibility stories of the deprecated elements is `<menuitem>`, which supposedly was [partially supported in Firefox versions 8 - 84](https://caniuse.com/?search=menuitem), but I couldn’t get [an example](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_menuitem) to work in any of the older versions I installed locally (even with editing `about:config`). The examples imply that the `<menu>` (of `type=context`) and child `<menuitem>` elements shouldn’t render until the element whose `contextmenu` property is right clicked, but as you can see below, the items always render:

<div id="menu-button" contextmenu="menuitem-example">Open Menu</div>
<menu type="context" id="menuitem-example">
    <menuitem type="radio" radiogroup="group1">Radio Button 1</menuitem>
    <menuitem type="radio" radiogroup="group1">Radio Button 2</menuitem>
</menu>

It’s surprising that `<noembed>`, essentially a `<noscript>` style fallback, was deprecated while `<embed>` was kept in the spec. Here’s my `<embed>` from above, but this time with a `<noembed>` child. There is also `<noframes>` which I included above with the `<frame>` element.

<figure>
<embed
    type="video/mp4"
    src="/images/blog/html/audio-and-video-tags.mp4"
    width="165"
    height="100"
    title="A screen recording of my dev setup while writing the paragraph above."
    id="audio-and-video-tags-embed-dep"
><noembed>An embed of a screen recording of my dev setup while writing the paragraph above.</noembed></embed>
<figcaption>An <code>&lt;embed&gt;</code> with a <code>&lt;noembed&gt;</code> tag child.</figcaption>
</figure>

It’s unclear why `<param>` ever existed instead of just using attributes on the `<object>` element. When I started this blog post [it was listed in the “Embedding Content” section](https://web.archive.org/web/20220330125752/https://developer.mozilla.org/en-US/docs/Web/HTML/Element), but by the time I finished it was deprecated. Here is one below:

<figure>
<object
type="video/mp4"
data="/images/blog/html/audio-and-video-tags.mp4"
width="165"
height="100"
id="audio-and-video-tags-object-dep">
<img src="/images/blog/html/audio-and-video-tags-poster.jpg" alt="a still of a screen recording" />
<param name="cool-param">
</object>
<figcaption>An <code>&lt;object&gt;</code> with a <code>&lt;param&gt;</code> tag child.</figcaption>
</figure>

`<plaintext>` is another weird one, and notable among the deprecated elements in that it works. It is another one I am going to have to wrap in an `<iframe>` because otherwise the rest of the page would be rendered as the source code:

<figure>
<iframe width="350" height="400" src="/pages/plaintext-element"></iframe>
<figcaption>An embed of a <a href="/pages/plaintext-element/" target="_blank">page</a> with a <code>&lt;plaintext&gt;</code> element.
</figure>

However, `<xmp>` and `<tt>`, used in a similar way, have closing tags <xmp style="max-width: 100%; overflow: scroll; padding: 0.5rem 0; border: 1px solid #aaa; background-color: #eee;">
so they can be used here for displaying source code
</xmp> or text in a monospace font<tt>
<span id="tt-element">as it would be shown on a teletype</span>
</tt> without an `<iframe>`.

A few of the deprecated elements have just been replaced by newer additions to the spec. `<rb>` and `<rtc>` were used for displaying pronunciation of East Asian characters, but it seems like the spec was simplified. Here is the example from MDN:

<ruby xml:lang="zh-Hant" style="ruby-position: under;"><rbc><rb>馬</rb><rp>(</rp><rt>mǎ</rt><rp>)</rp><rb>來</rb><rp>(</rp><rt>lái</rt><rp>)</rp><rb>西</rb><rp>(</rp><rt>xī</rt><rp>)</rp><rb>亞</rb><rp>(</rp><rt>yà</rt><rp>)</rp></rbc><rtc xml:lang="en" style="ruby-position: over;"><rp>(</rp><rt>Malaysia</rt><rp>)</rp></rtc></ruby>

</section>

<section id="other-elements">

### Other Elements

I consulted a few other lists of HTML tags after realizing that the <code>&lt;!-- comment --&gt;</code> tag wasn’t in my list from MDN (there’s one below this paragraph)

<!-- The only reference to HTML comments on MDN seems to be in the web APIs section: https://developer.mozilla.org/en-US/docs/Web/API/Comment -->

An <a href="https://web.archive.org/web/20130520111045/https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">older list from MDN in 2013</a> has elements like <code>&lt;blink&gt;</code>, and for accessibility reasons, <q cite="https://web.archive.org/web/20130520111045/https://developer.mozilla.org/en-US/docs/Web/HTML/Element">almost all browsers currently ignore this element.</q> I’ll add one hidden below if you can find a very old browser that supports it:

<div style="display: none" id="hidden-blink">
    <blink>I am in a <code>&lt;blink&gt;</code> tag (but probably not blinking).</blink>
</div>
<div id="show-blink-button-container">
    <button onclick="(() => document.getElementById('hidden-blink').style.display = 'block')();">Show <code class="code-regular">&lt;blink&gt;</code></button>
</div>

Also on the list is `<spacer>`, which doesn’t work in modern browsers and,

<spacer type="horizontal" size="30"></spacer>

would now be done

<div style="height: 30px;"></div>

with CSS.

Then there’s others like `<bgsound>` (<a href="https://web.archive.org/web/20131004002320/https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bgsound" target="_blank">2013 docs</a>) that seems to have never been implemented (except maybe in Netscape?), but alludes to a vision for a much more <em>multimedia</em> enabled web documents, and `<isindex>` (<a href="https://web.archive.org/web/20130916195848/https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex" target="_blank">2013 docs</a>) which seems like it is from a world where JavaScript doesn’t exist.

Another attempt at `<xmp>`, `<tt>`, `<code>` was

<listing><span id="listing-child">listing</span></listing>

I’m surprised it seems to still work!

And of course `<applet>`, but I’m not even going to try with that one.

</section>

<h4>Footnotes</h4>
<ol class="footnotes">
    <li id="footnote-1"><aside>Which I am just now discovering there is no native HTML implementation for!</aside> <a href="#footnote-1-link">↑ Return to post</a></li>
</ol>

<footer role="contentinfo">
    Written between <time datetime="2022-02">February 2022</time> and <time datetime="2023-08">August 2023</time>.
</footer>

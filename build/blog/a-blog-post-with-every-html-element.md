---
layout: layouts/blogPost.hbs
title: A Blog Post With Every HTML Element
date: 2023-02-20
# cover_image_url: 
# cover_image_alt: 
tags:
---

<section>

After learning a little bit more about web accessibility this year I have been exploring some of the less common <abbr title="Hyper Text Markup Language">HTML</abbr> elements, and making changes to this website like wrapping the text of the posts on this blog in `<article>` tags and adding a `<main>` tag in the website’s layout templates (this website is built using [11ty](https://www.11ty.dev/)).


I had previously done some work to make sure that `<figure>` and `<figcaption>` elements were layed out nicely for images with associated captions, and I had been impressed with various [Recurser’s](https://www.recurse.com/) implementation of footnotes or sidenotes<sup id="footnote-1-link">[1](./#footnote-1)</sup>, and have been thinking it would be interesting to see what other interesting layouts were possible with just HTML.

I could, element by element, continue to add support (mostly by making <abbr title="Cascading Style Sheets">CSS</abbr> updates for each element to fit in with the rest of my style choices) as I came across specific needs for them, but not one to shy away from an exhaustive exploration, I decided to write this post and attempt to use every element. A goal was to avoid delaying future posts while I update the site to support a new element it uses, but in reality it took more than a year to make all the updates for just this post! I am using the [MDN Web Docs list of HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) as a reference which has more than 100 tags divided into a few categories, which I will also use in this post. Many of the tags like `<html>` don’t make sense to include in the text of a blog post, but I’ll be updating the website’s layout as I go, so if you’re viewing this post on [patrickweaver.net](https://www.patrickweaver.net), then every one of the elements is used somewhere on this page.

</section>

<hr />

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

I had previously used `<blockquote>` for embedding tweets into blog posts, but for this post I decided to add styles for standalone quotes also, though I didn’t know about the `cite` property or `<cite>` element until reading the docs more closely:

<figure>
    <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#attributes">
        <h4><code>cite</code></h4>
        <p>A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.</p
    </blockquote>
    <figcaption><cite>MDN</cite> on <code>&lt;blockquote&gt;</code></figcaption>
</figure>

`<dd>`, `<dl>`, and `<dt>` are elements that, after finding out about them when first looking into more obscure HTML elements, I was very surprised to have not known about sooner. Although, it’s unclear from the documentation whether lists like the links on the current version of my [portfolio page](https://web.archive.org/web/20220628123804/https://www.patrickweaver.net/portfolio/) (currently using `<ul>`). I am curious how `<ol>` and `<ul>` became part of almost every “Intro to HTML” class, but `<dl>` is relatively obscure. It's also strange that `<ol>` and `<ul>` have default margins, but `<dl>` doesn’t.

#### HTML list elements:

<dl>
    <dt><code>dl</code></dt><dd>Description list</dd>
    <dt><code>ol</code></dt><dd>Ordered list</dd>
    <dt><code>ul</code></dt><dd>Unordered list</dd>
</dl>

`<div>` has acquired a bad reputation on the modern web due to overuse, so I was surprised to see that even only halfway through writing this (and making some updates to layouts as I go), that there is only one `<div>` element on this page (and even that is just a wrapper around the `<article>` element, and could probably be removed with some CSS changes). It shows how unnecessary most `<div>`s probably are, though this site has minimal generic “sections”.

Some of the first more obscure elements that I added to this site were `<figcaption>` and `<figure>` because I was adding some blog posts that had originally been published on Medium, and wanted to add captions below images in a web-semantically correct way. Though after reading the documentation which says `<figure>` can be used for, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure#usage_notes">image, illustration, diagram, code snippet, etc.</q>, I realized that there are a lot of places where I currently have code blocks that I could be using them.

I have always liked `<hr>` elements a lot, but I’m never sure when to use them. The documentation says, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr#try_it">While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS</q> which made me revisit the `<hr>` styles on this site and I decided to include an emoji in an `hr:after` rule, though I should check how that works on a screen reader.

The items in the lists of elements on this page are of course `<li>` elements, though I had never looked at the documentation until now. It’s interesting that the same `<li>` element is used in both `<ol>` and `<ul>` lists, with quirks like <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attributes">The value attribute has no meaning for unordered lists</q>, but is not used to wrap the `<dt>` and `<dd>` elements in a `<dl>`.

I had not encountered `<menu>` before writing this post, and I was initially surprised that it survived to HTML 5, while [`<menuitem>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem) didn’t, but researching further [on Wikipedia](https://en.wikipedia.org/wiki/HTML_element#Basic_text) I read <q cite="https://en.wikipedia.org/wiki/HTML_element#Basic_text">MENU existed in HTML Tags, and was standardized in HTML 2.0; deprecated in HTML 4.0 Transitional; invalid in HTML 4.0 Strict; then redefined in HTML5, but removed in HTML 5.2.</q>, and now I don’t know what to think, but here’s a `<menu>`:

<menu id="interactive-menu">
    <script>
        const b = '🎈';
        const s = '🧽';
        const m = document.getElementById('interactive-menu');
        function balloons() { m.insertAdjacentHTML('beforeend', b) };
        function sponges() { m.insertAdjacentHTML('beforeend', s) };
    </script>
    <li><button onclick="balloons()">Balloons</button></li>
    <li><button onclick="sponges()">Sponges</button></li>
</menu>

`<ol>` and `<ul>` are some of the first HTML elements I used, and more recently I try to use `<ol>` with CSS in places that are semantically lists, but might not be styled like a traditional list.

I was surprised not to find more guidance on using `<p>` tags on [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p), something I wonder often when adding non long form text to a website is, “is this really a paragraph?” But, it seems like as far as HTML is concerned, if it’s not a heading, then probably!

Before reading the documentation I had really only considered using `<pre>` tags along with `<code>` tags for code blocks, but the example used on MDN is used to show how `<pre>` can display meaningful whitespace for things like:

<figure>
    <pre role="img" aria-label="An ASCII picture of a house with the label, 'in this house we write semantic HTML'">
┏┓
┃┃╱╲ in
┃╱╱╲╲ this
╱╱╭╮╲╲house
▔▏┗┛▕▔ we
╱▔▔▔▔▔▔▔▔▔▔╲
write semantic HTML
╱╱┏┳┓╭╮┏┳┓ ╲╲
▔▏┗┻┛┃┃┗┻┛▕▔
  </pre>

<figure>

</section>

<section>

### Inline text semantics

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
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)


As with other very common tags I was curious to get to the documentation for `<a>` to see if there was anything I was unaware of, or had been using incorrectly. I was surprised to discover that `<a href="#">link</a>` links to the top of the page after years as just using it as a placeholder when I didn’t know the URL yet.

`<abbr>` seems likely to be the least used tag, especially because the MDN documentation doesn’t make a great case for it <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr#default_styling">the purpose of this element is purely for the convenience of the author.</q>

The distinction between `<b>` and `<strong>`, as the docs would have you believe, is not what I had thought it was (that `<strong>` was the HTML5 replacement for `<b>`), and I think is a more nuanced and overlapping than the technical nature of the documentation is really able to convey. The way I will probably explain it to other people in the future is that, for the most part, you should use `<b>` for <b>single words</b> (or compound words), <strong>and `<strong>` for whole sentences or phrases</strong>. This is more a rule of thumb and bypasses the actual distinction. The documentation reads:

<figure>
    <blockquote>
        The <code>&lt;strong&gt;</code> element is for content that is of greater importance, while the <code>&lt;b&gt;</code> element is used to draw attention to text without indicating that it’s more important.
    </blockquote>
    <figcaption>
        <cite><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong#b_vs._strong">MDN on “<code class="code-regular">&lt;b&gt;</code> vs. <code class="code-regular">&lt;strong&gt;</code>”</a></cite>
    </figcaption>
</figure>

But I can’t think of many instances where I would want to draw attention to word that is not more important than other words, a recommendation that seems to want to live in a world where for the most part all words are of equal importance, which, um, yeah, no.

I’ll probably think of `<b>` from now on as the HTML tag for the quotation marks you might see on signage that can cause intergenerational confusion: Fresh “Semantic” HTML.

`<bdi>` is a tag for a concept that I hadn’t considered until now, text whose direction might (or might not) differ from the direction of the surrounding text. The examples on the documentation are all names, but could stand in for any user inputted text. In the future I will probably try to wrap any tags, like the ones controlled by the input below, that might contain arbitrary user inputted unicode characters in a `<bdi>` tag just to be safe.

<form>
    <label for="bdi-name-input">What is your name?</input>
    <input type="text" id="bdi-name-input">
</form>
<p>Hello, <bdi id="bdi-name-display">&nbsp;&nbsp;&nbsp;&nbsp;</bdi>, thanks for reading!</p>
<script>
    const i = document.getElementById("bdi-name-input");
    const o = document.getElementById("bdi-name-display");
    i.addEventListener("input", function(event) {
        o.innerHTML = event.target?.value || "&nbsp;&nbsp;&nbsp;&nbsp;";
    })
</script>

`<bdo>` I will probably use less often because I don’t work with RTL languages often, but it is still good to know how to handle small amounts of RTL text, like this link to the page for HTML on the Farsi Wikipedia: <a href="https://fa.wikipedia.org/wiki/%D8%A7%DA%86%E2%80%8C%D8%AA%DB%8C%E2%80%8C%D8%A7%D9%85%E2%80%8C%D8%A7%D9%84" target="_blank"><bdo dir="rtl">اچ‌تی‌ام‌ال</bdo></a>.

`<br>` is interesting to me, because for a time it seemed to be as misused as `<div>`, but, as CSS has gotten less essential that is probably less often the case, though I wonder if it is still taught early in HTML classes. It’s interesting that the example use case in the docs is poetry because it makes me wonder how the grey area between a paragraph and a standalone line was considered in creating the HTML spec. It also seems like a `<pre>` tag might be a better fit in some cases.

`<cite>` and `<q>` are interesting because they try to add HTML semantic elements for meaning that is also conveyed by visible punctuation in most languages. It’s the kind of redundancy that underscores repetitiousness of working with computers.

I’ve clearly used many `<code>` elements in this post so far, but reading the documentation made me wonder whether the recently released Markdown support in Google Docs uses `<code>` for text, but then I remembered that Google docs uses `<canvas>` to render the document now.

Occasionally the MDN documentation examples are difficult to mentally translate to real-world use cases. `<data>` is one of these, where the ony examples show a `<data>` element with a `value` property with product IDs wrapped around product names, but in that case the IDs seem either user facing, in which case it would probably be better to display them to the user, or non user facing, in which case I’m not sure who the “data” is for. Interestingly, `<data>` doesn’t seem to appear in the [W3C HTML5 specification](https://www.w3.org/TR/2011/WD-html5-20110405/).

`<dfn>` is another strange element because it seems like it is misnamed, as it goes around, not the definition of a term, but around that term within the definition. It does [only seem to have been part of the never officially adopted HTML 2.0 proposal](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html), and it exemplifies the academic nature of the early web. The [HTML Tags: Past, Present, Proposed](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html) page on martinrinehart.com defines <dfn title="Hyper Text Markup Language 2.0">HTML 2.0</dfn> as <q cite="http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html">There never was an HTML 2.0 standard, but these all shaped browser development in the late 20th century</q> with references to several RFC documents.

`<em>` and `<i>` bring up similar usage questions as `<b>` and `<strong>`, but in my opinion with even more nuance, especially, as the documentation notes, with other more specific tags like `<cite>` that also by default italicize text in most browsers. The rule of thumb from above also for the most part fits here, `<em>` for single words, and `<i>` for sentences or phrases, though the examples in the documentation seem to mostly use `<i>` for drawing attention to potential confusion, as in, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#i_vs._em">The word <i>the</i> is an article</q>.

`<kbd>` is another tag that makes me wonder about the conceptual boundaries of the usage of the tag. It is intended for specifying keys on a computer keyboard, for example: to type th e <code>&lt;</code> character used for (the non escaped) version of the tags in this post, I press <kbd>Shift</kbd> + <kbd>,</kbd> (the styles are applied through CSS). But I’m curious if it would also be appropriate to put a `<kbd>` around something like <i>Right click</i> (in this case I used `<i>` instead).


</section>

<section>

### Section

- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)

Description of section

</section>


<ol>
    <li id="footnote-1"><aside>Which I am just now discovering there is no native HTML implementation for!</aside> <a href="#footnote-1-link">↑ Return to post</a></li>
</ol>

<footer role="contentinfo">
    Written between February 2022 and March 2023.
</footer>
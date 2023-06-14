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

I had previously done some work to make sure that `<figure>` and `<figcaption>` elements were layed out nicely for images with associated captions, and I had been impressed with various [Recurser’s](https://www.recurse.com/) implementation of footnotes or sidenotes<sub id="footnote-1-link">[1](./#footnote-1)</sub>, and have been thinking it would be interesting to see what other interesting layouts were possible with just HTML.

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

`<br>` is interesting to me, because for a time (a long time ago) it seemed to be as misused as `<div>` has been recently, but, as CSS has gotten more robust that is probably less often the case; though I wonder if it is still taught early in HTML classes. It’s interesting that the example use case in the docs is poetry because it makes me wonder how the grey area between a paragraph and a standalone line was considered in creating the HTML spec. It also seems like a `<pre>` tag might be a better fit in some cases.

`<cite>` and `<q>` are interesting because they try to add HTML semantic elements for meaning that is also conveyed by visible punctuation in most languages. It’s the kind of redundancy that underscores repetitiousness of working with computers.

I’ve clearly used many `<code>` elements in this post so far, but reading the documentation made me wonder whether the recently released Markdown support in Google Docs uses `<code>` for text, but on inspecting the HTML of a Doc, I remembered that `<canvas>` is used to render the document now.

Occasionally the MDN documentation examples are difficult to mentally translate to real-world use cases. `<data>` is one of these, where the ony examples show a `<data>` element with a `value` property with product IDs wrapped around product names, but in that case the IDs seem either user facing, in which case it would probably be better to display them to the user, or non user facing, in which case I’m not sure who the “data” is for. Interestingly, `<data>` doesn’t seem to appear in the [W3C HTML5 specification](https://www.w3.org/TR/2011/WD-html5-20110405/).

`<dfn>` is another strange element because it seems like it is misnamed, as it goes around, not the definition of a term, but around that term within the definition. It does [only seem to have been part of the never officially adopted HTML 2.0 proposal](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html), and it exemplifies the academic nature of the early web. The [HTML Tags: Past, Present, Proposed](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html) page on martinrinehart.com defines <dfn title="Hyper Text Markup Language 2.0">HTML 2.0</dfn> as <q cite="http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html">There never was an HTML 2.0 standard, but these all shaped browser development in the late 20th century</q> with references to several RFC documents.

`<em>` and `<i>` bring up similar usage questions as `<b>` and `<strong>`, but in my opinion with even more nuance, especially, as the documentation notes, with other more specific tags like `<cite>` that also by default italicize text in most browsers. The rule of thumb from above also for the most part fits here, `<em>` for single words, and `<i>` for sentences or phrases, though the examples in the documentation seem to mostly use `<i>` for drawing attention to potential confusion, as in, <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#i_vs._em">The word <i>the</i> is an article</q>.

`<kbd>` is another tag that makes me wonder about the conceptual boundaries of the usage of the tag. It is intended for specifying keys on a computer keyboard, for example: to type the <code>&lt;</code> character used for (the non escaped) version of the tags in this post, I press <kbd>Shift</kbd> + <kbd>,</kbd> (the styles here on <code>&lt;kbd&gt;</code> are applied through CSS). But I’m curious if it would also be appropriate to put a `<kbd>` around something like <i>Right click</i> (in this case I used `<i>` instead).

`<mark>` is interesting because it suggests a 2-way authoring web that was originally envisioned, but failed to come to fruition with usage notes like, <q>Think of this like using a <mark>highlighter pen</mark> in a book to mark passages that you find of interest.</q> The yellow here is the default style in all major browsers.

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

`<sub>` and `<sup>` are more elements I probably have used the CSS implementations of previously (though it is appropriate for presentation only super or subscript.)

`<time>` seems like a helpful element for creating semantic HTML, but even Google doesn’t seem to use it in [search results](https://www.google.com/search?q=%22Patrick+Weaver%22+%22HTML%22). I’ve updated the dates on my blog posts to use it.

`<u>` has probably my favorite quote from the MDN docs, <q>Most of the time, you actually don't want to use <code>&lt;u&gt;</code>.</q> Their strongest recommendation seems to be indicating <u class="u-sp">spellling</u> errors.

`<var>` is a way to indicate semantically that a string is a variable for either math or programming. For example, rendering the pythagorean theorem uses both `<var>` and `<sup>`: <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup>.

`<wbr>` was also a new element until now, but it solves a problem I have hit many times before, breaking long “words” at certain points, specifically URLs. If I put a `<wbr>` element at clear break points in this URL: [https://www.patrickweaver.net<wbr />/pages<wbr />/a<wbr />very<wbr />long<wbr />url<wbr />without<wbr />any<wbr />punctuation<wbr />but<wbr />still<wbr />made<wbr />up<wbr />of<wbr />words/](https://www.patrickweaver.net/pages/averylongurlwithoutanypunctuationbutstillmadeupofwords/) then it will break at clear points at different screen widths, which is is more readable compared to the same link without the `<wbr>` elements: [https://www.patrickweaver.net/pages/averylongurlwithoutanypunctuationbutstillmadeupofwords/](https://www.patrickweaver.net/pages/averylongurlwithoutanypunctuationbutstillmadeupofwords/), though including hyphen characters in the URL also creates clear breakpoints in modern browsers.

</section>

<section>

### Image and multimedia

- [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
- [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)

`<area>` and `<map>` are elements that I hadn’t been familiar with previously, even though I had made a few image map type websites in the days before CSS 3. It seems like an indication of how seldom they are used these days that the tools for debugging the boundries of `<area>` elements are hard to use. One `<area>` border at a time will display while using tab focus, but styling the elements does not work (unless there is a `display` hack I couldn’t figure out). It’s also somewhat strange that `<area>` is essentially an `<a>` with a shape.

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

`<audio>` is one of the classic HTML 5 tags so I’ve used it before, but thinking about it now it’s surprising I don’t see them more often in the 2020s. I would guess that there are more in use than I thought though, for example, the [Bandcamp](https://bandcamp.com) player uses an `<audio>` element even though the UI is a custom mix of `<a>` and `<div>`s inside a `<table>` oddly enough.

`<img>` is of course one of the first elements I used, but I was curious what properties could be used with it that I might not have heard of. `srcset`, used for specifying multiple sizes of the same image to load at different screen resolutions, was one of those. I’ve created a demo below, which goes against the spirit of `srcset`. The image below has 3 images provided to its `srcset` property, one with a yellow background and a monospace font that is 300 pixels wide and should render when the page is less than 520 pixels wide, one with a blue background and a serifed font that should render when the page is between 520 and 800 pixels wide, and one with a green background and a script font that should render when the page is greater than 800 pixels wide.

<img
    src="/images/blog/html/srcset-700.png"
    srcset="/images/blog/html/srcset-300.png 300w, /images/blog/html/srcset-500.png 500w, /images/blog/html/srcset-700.png 700w"
    sizes="(max-width: 520px) 300px, (max-width: 800px) 500px, 700px"
    style="max-width: 700px; width: 100%;"
    alt="A demo of the srcset property of the HTML <img> tag that loads different images at different sizes"
 />

 I have tested it, and it does work, but it takes a lot of forethought to make sure that you will be able to load the correct image. Things like the browser’s cache, and scaled displays will change the behavior. If you want to see the effect you will probably need to load the page in a private window on a non scaled or “retina” display.

Description of section

</section>

### Section

- [`<>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)

Description of section

</section>

<ol>
    <li id="footnote-1"><aside>Which I am just now discovering there is no native HTML implementation for!</aside> <a href="#footnote-1-link">↑ Return to post</a></li>
</ol>

<footer role="contentinfo">
    Written between <time datetime="2022-02">February 2022</time> and <time datetime="2023-05">May 2023</time>.
</footer>

---
layout: layouts/blogPost.hbs
title: How to Download an Image from a Google Doc
date: 2020-07-16
cover_image_url: /images/blog/gdoc-image-dl-cover.png
cover_image_alt: A screenshot of the bookmarklet buttons
tags:
---

#### 2022 Update

_This no longer works, and will not be maintained, but might be still be interesting to read about._

For some reason Google hasn’t built in a way for you to download images in Google docs! There are workarounds to get those image files like [using Google Keep](https://twitter.com/corduroy/status/1184758335934849025), or [downloading your whole doc as a .zip file](https://twitter.com/tonyvincent/status/1021726699178708993), but these have always felt like too many steps.

And this is something that people really want!

{% twitter '1190182191520788480' %}

{% twitter '1277776054380265478' %}

{% twitter '710516705303384068' %}

{% twitter '1227582581350240257' %}

{% twitter '1225516004375179265' %}

{% twitter '1249761603559378945' %}

{% twitter '990395429383622656' %}

As Steve Krouse points out here, it is possible to get the real URL of the image in your doc (but confusingly, as soon as you click on the image to select it the URL becomes obfuscated!).

{% twitter '1190358282877186050' %}

I also noticed the URLs in the source, and decided to make an easy way to access it. The one trick ended up being, because clicking on the image made it disappear, finding a way to tell the code which image you wanted!

I looked through some JavaScript documentation and realized I could use the [mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) event to detect when someone was hovering over the image. Unfortunately this means that it won’t work on a touchscreen device, but I’m guessing that most people who want to download an image are on a traditional computer.

#### How does it work?

I needed a way to run my code on any Google Doc, there’s probably a way to make Google Doc or Chrome extension to do this, but since I was asking people to run code in their potentially private docs I wanted to make the code as short and open source as possible.

I decided that the best way to do this was a [bookmarklet](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks). If you’re unfamiliar with bookmarklets, they’re bookmarks (usually placed in your bookmarks toolbar (Cmd-Shift-B to toggle this on and off on a Mac), that instead of navigating to a webpage, run JavaScript when you click them.

#### Great! Tell me how to do it!

To get started you’ll have to "install" the bookmarklet. This is easy to do, and just means dragging a button into your bookmarks toolbar. [I’ve hosted it on Glitch here](https://gdoc-image-dl.glitch.me/). You can even drag it straight from one of the buttons on the embed below:

{% glitch 'gdoc-image-dl' 'app' %}

The instructions are simple!

1. Drag one of the bookmarklets below =(see the embed above) to your bookmarks toolbar. The text displayed is what will be show on the toolbar:

2. Then, when you’re on a Google Doc, click the bookmarklet, then hover over an image embeded in the doc. Depending on your browser settings it will either download immediately, or open the actual image in a new tab.

#### Great my problems are solved forever!

No guarantees that this will work long term, a quick look at the source code for any Google Doc will show that they’re very complex! I wouldn’t be surprised if Google changes the way these URLs work in the future, but this tool has worked for 6 months so maybe not!

Long term I hope that they build in a way for people to download their images, but for now I hope this is helpful!

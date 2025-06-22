---
layout: layouts/blogPost.hbs
title: "IRL HTML Is the Place For Your Most Hand-Written Websites"
date: 2024-07-10
cover_image_url: /images/blog/irl-html/irl-html-screenshot.png
cover_image_alt: A screenshot of the IRL HTML website
tags:
---

Last year before [HTML Energy](https://html.energy)'s <abbr title="HyperText Markup Language">HTML</abbr> Day in [San Francisco](https://www.are.na/bay-area-95sssqibasq/w-s-www-gathering) I had the idea to iterate on some of my previous projects like [Whiteboard Email](https://www.patrickweaver.net/portfolio/whiteboard-email/), and make both an app that would do <abbr title="Optical character recognition">OCR</abbr> on HTML, and a website to host truly “hand-written” HTML. That became [IRL HTML](https://doodles.patrickweaver.net/irl-html/) and it was good enough to make some [very simple](https://doodles.patrickweaver.net/irl-html/pages/acc8/) websites!

<figure>

<div style="display: flex; max-width: 100%; align-items: center;">
  <img src="/images/blog/irl-html/simple-website.png" alt="A screenshot of a website made with IRL HTML. It says Park, With Grass" style="max-width: 50%; margin-right: 2.5px;" />
  <img src="/images/blog/irl-html/notebook-park.jpg" alt="A photograph of the hand-written code for the website above in a notebook laying in grass." style="max-width: 50%; margin-left: 2.5px;" />
</div>

<figcaption>The published website and the hand written source code, we realized that some letters were more recognizable as upper case, some as lower case.</figcaption>

</figure>

The first prototype of IRL HTML used [Tesseract.js](https://tesseract.projectnaptha.com/) which is only reliable for typewritten text. Given my success with [album covers](https://www.patrickweaver.net/portfolio/record-player/) I tried the Google Vision API, which worked well enough for _some_ (carefully) hand-written HTML, but still made a lot of errors, which might prevent the page from rendering at all.

A lot of the projects I’ve done over the years have used computer vision in creative ways, and I’ve always been searching for more reliable ways to have computers read hand-written text. At a [Recurse Center](https://www.recurse.com/) meetup in SF in January 2024 someone suggested that the ChatGPT API might be capable of it. We made a [simple website on IRL HTML](https://doodles.patrickweaver.net/irl-html/pages/0e98/) to commemorate the occasion.

To get ready for the [2024 HTML Day](https://html.energy/events.html) I decided to update IRL HTML using both the ChatGPT and Anthropic Claude APIs. Both were able to read my hand-written HTML code surprisingly well! They do sometimes output text that isn’t really there (notice the `<ul>` tags were turned into `<p>` tags in the example below), and sometimes it adds some description of the output, which for this case isn’t useful. One benefit of the multi-modal nature of the LLMs is that I can inform the model that the output is supposed to be HTML, I can add instructions to fix any minor syntax errors. I could probably improve the accuracy even more by combining OCR methods, or making multiple requests to the LLMs.

The prompt I’m using for both LLM APIs is:

> _This is an image of a piece of paper with HTML code on it. If there are any syntax errors, fix them with the most likely valid HTML. Respond with just the HTML code property formatted, not wrapped in markdown or any description of what is in the response._

There is probably some room to iterate on the prompt for better output, but the cycle of testing (especially with different hand-written code) is long and not free, so I may stick with what is working reasonably well.

<figure>

<div style="display: flex; max-width: 100%; align-items: center;">
  <img src="/images/blog/irl-html/about-irl-html-notebook.jpg" alt="A photograph of a notebook with hand-written HTML code for an “About IRL HTML” website"  style="max-width: 50%; margin-right: 2.5px;" />
  <img src="/images/blog/irl-html/about-irl-html-website.png" alt="A screenshot of the website generated from the hand-written code above" style="max-width: 50%; margin-left: 2.5px;" />
</div>

<figcaption>More complex hand-written source code, and the webiste (with a picture of itself)</figcaption>

</figure>

Overall, though I’m skeptical of the utility of LLMs more generally, it’s exciting to more easily and reliably make the kinds of quirky computer vision projects I’ve been dreaming of for a long time. I’d be interested in smaller handwriting OCR specific models that I might be able to run locally someday!

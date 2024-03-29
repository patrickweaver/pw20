---
layout: layouts/blogPost.hbs
title: "Unravelling an iMessage URL Parsing Mystery"
date: 2024-02-05
cover_image_url: /images/blog/imessage/cover.png
cover_image_alt: A screenshot of the example app
tags:
---

I have long been a fan of frontend-only websites, usually single-page apps, that are able to persist state in sharable URLs despite not having a database or a backend. One of the more complex projects I used this technique for was my [Crossword Puzzle Editor](https://doodles.patrickweaver.net/crossword/editor), which stores an entire puzzle, both clues and correct answers in the URL hash.

However, when I composed a small puzzle and shared it with a friend via iMessage I was greeted with a link to the app with empty state above a long string of random characters in a blue bubble:

<figure>

<div style="text-align: center;">
  <img src="/images/blog/imessage/broken-link.png" alt="A screenshot of an iMessage conversation with a broken link in it" style="max-width: 300px; margin: 0 auto;" />
</div>

</figure>

I tried again with a smaller puzzle and got the same kind of broken link, but it couldn’t just be the length of the URL because surely all of the tracking URLs used in every marketing email wouldn’t break like this. I tried one of a similar length, it sent flawlessly and rendered as a clean link preview, not the jumble of query string params it really was. I looked closer and noticed that the tracking URL had one visible difference from my crossword URL: it had “-” characters every so often.

I wrote a quick function to insert intermittent “-”s in the URLs, and remove them on parsing the state from the URL, then tried sending the original crossword. It worked!

<figure>

<div style="text-align: center;">
  <img src="/images/blog/imessage/fixed-link.png" alt="A screenshot of an iMessage conversation with a not broken link in it" style="max-width: 300px; margin: 0 auto;" />
</div>

</figure>

At the time I couldn’t find anyone else discussing the issue online, but my guess is that this quirk of iMessage URL parsing is due to security concerns with parsing text. A significant proportion of the zero day vulnerabilities in iOS are exploited through iMessage, and I would guess that a lot of the techniques used to create them are encoding malicious code in Base64 strings, just like I am with non malicious data.

I would guess that because “-” is not a valid Base64 character, the parser used by iMessage can review each section separately. I finished up my crossword app adding “-” as the 64th character in every URL hash (I didn’t think about the length being serendipitous with the Base64 encoding until now). In the back of my mind I was curious about how long the sections of Base64 encoded text could be but didn’t look any further into it.

A few years passed and I saw the following post on Mastodon:

<blockquote class="social-post">i built a little webapp that saves state as an unruly URI fragment hash but it looks like some clients (like Signal and Apple Messages) don’t want to recognize the whole things as a complete URL. is there anything I can do about that?</blockquote>

It was time for my weird Base64 URL tidbit to come to the rescue! I replied with the tip about breaking up with “-”s and the original poster replied that it had worked for them as well!

After being reminded about the technique I was curious to figure out some of the details like, how long exactly could the sections be, and what other characters would work as separators. Using the technique I built <a target="_blank" href="https://doodles.patrickweaver.net/imessage-url-state-example/#eyIxIjp7InIiOiIyMjMiLCJnIjoiMjIiLCJiIjoi-MTU3In0sIjIiOnsiciI6MjEwLCJnIjoiMzEiLCJi-IjoiODcifSwiMyI6eyJyIjoiMjA1IiwiZyI6NzMs-ImIiOiIzNiJ9LCI0Ijp7InIiOiIyNTUiLCJnIjoi-MTk3IiwiYiI6MzZ9LCI1Ijp7InIiOiIyNTIiLCJn-IjoiMjQwIiwiYiI6IjExOSJ9LCI2Ijp7InIiOiI2-OSIsImciOiIxNzkiLCJiIjowfSwiNyI6eyJyIjoi-NjEiLCJnIjoiMjAzIiwiYiI6MjMyfSwiOCI6eyJy-IjoiNjEiLCJnIjoiMTA5IiwiYiI6IjI0MiJ9LCI5-Ijp7InIiOiIxOTAiLCJnIjoiMTQ4IiwiYiI6IjIy-OCJ9LCIxMCI6eyJyIjoiMjE0IiwiZyI6IjgxIiwi-YiI6IjE5NCJ9fQ==">a small app that would store 10 RGB values in the URL</a> (this example has a rainbow), but would also let the user control how frequent the “-” characters were, or replace them with other characters not used in Base64.

<figure>

<div style="text-align: center;">
  <a target="_blank" href="https://doodles.patrickweaver.net/imessage-url-state-example/#eyIxIjp7InIiOiIyMjMiLCJnIjoiMjIiLCJiIjoi-MTU3In0sIjIiOnsiciI6MjEwLCJnIjoiMzEiLCJi-IjoiODcifSwiMyI6eyJyIjoiMjA1IiwiZyI6NzMs-ImIiOiIzNiJ9LCI0Ijp7InIiOiIyNTUiLCJnIjoi-MTk3IiwiYiI6MzZ9LCI1Ijp7InIiOiIyNTIiLCJn-IjoiMjQwIiwiYiI6IjExOSJ9LCI2Ijp7InIiOiI2-OSIsImciOiIxNzkiLCJiIjowfSwiNyI6eyJyIjoi-NjEiLCJnIjoiMjAzIiwiYiI6MjMyfSwiOCI6eyJy-IjoiNjEiLCJnIjoiMTA5IiwiYiI6IjI0MiJ9LCI5-Ijp7InIiOiIxOTAiLCJnIjoiMTQ4IiwiYiI6IjIy-OCJ9LCIxMCI6eyJyIjoiMjE0IiwiZyI6IjgxIiwi-YiI6IjE5NCJ9fQ=="><img src="/images/blog/imessage/colors-app.png" alt="A screenshot of the web app to test long URLs" style="max-width: 500px; margin: 0 auto;" /></a>
</div>

</figure>

Here is an example with the same 10 colors as the link above, but with a “+” every 10th character:

<blockquote class="long-link"><a target="_blank" href="https://doodles.patrickweaver.net/imessage-url-state-example/#eyIxIjp7I+nIiOiIyMj+MiLCJnIjo+iMjIiLCJi+IjoiMTU3I+n0sIjIiOn+siciI6MjE+wLCJnIjoi+MzEiLCJiI+joiODcifS+wiMyI6eyJ+yIjoiMjA1+IiwiZyI6N+zMsImIiOi+IzNiJ9LCI+0Ijp7InIi+OiIyNTUiL+CJnIjoiMT+k3IiwiYiI+6MzZ9LCI1+Ijp7InIiO+iIyNTIiLC+JnIjoiMjQ+wIiwiYiI6+IjExOSJ9L+CI2Ijp7In+IiOiI2OSI+sImciOiIx+NzkiLCJiI+jowfSwiNy+I6eyJyIjo+iNjEiLCJn+IjoiMTA0I+iwiYiI6Mj+MyfSwiOCI+6eyJyIjoi+MTI3IiwiZ+yI6IjkwIi+wiYiI6IjI+0MiJ9LCI5+Ijp7InIiO+iIxOTAiLC+JnIjoiMTQ+4IiwiYiI6+IjIyOCJ9L+CIxMCI6ey+JyIjoiMjE+0IiwiZyI6+IjgxIiwiY+iI6IjE5NC+J9fQ==">https://doodles.patrickweaver.net/imessage-url-state-example/#eyIxIjp7I+nIiOiIyMj+MiLCJnIjo+iMjIiLCJi+IjoiMTU3I+n0sIjIiOn+siciI6MjE+wLCJnIjoi+MzEiLCJiI+joiODcifS+wiMyI6eyJ+yIjoiMjA1+IiwiZyI6N+zMsImIiOi+IzNiJ9LCI+0Ijp7InIi+OiIyNTUiL+CJnIjoiMT+k3IiwiYiI+6MzZ9LCI1+Ijp7InIiO+iIyNTIiLC+JnIjoiMjQ+wIiwiYiI6+IjExOSJ9L+CI2Ijp7In+IiOiI2OSI+sImciOiIx+NzkiLCJiI+jowfSwiNy+I6eyJyIjo+iNjEiLCJn+IjoiMTA0I+iwiYiI6Mj+MyfSwiOCI+6eyJyIjoi+MTI3IiwiZ+yI6IjkwIi+wiYiI6IjI+0MiJ9LCI5+Ijp7InIiO+iIxOTAiLC+JnIjoiMTQ+4IiwiYiI6+IjIyOCJ9L+CIxMCI6ey+JyIjoiMjE+0IiwiZyI6+IjgxIiwiY+iI6IjE5NC+J9fQ==</a></blockquote>

Or one with a “\*” every 300th character (there is only one):

<blockquote class="long-link"><a target="_blank" href="https://doodles.patrickweaver.net/imessage-url-state-example/#eyIxIjp7InIiOiIyMjMiLCJnIjoiMjIiLCJiIjoiMTU3In0sIjIiOnsiciI6MjEwLCJnIjoiMzEiLCJiIjoiODcifSwiMyI6eyJyIjoiMjA1IiwiZyI6NzMsImIiOiIzNiJ9LCI0Ijp7InIiOiIyNTUiLCJnIjoiMTk3IiwiYiI6MzZ9LCI1Ijp7InIiOiIyNTIiLCJnIjoiMjQwIiwiYiI6IjExOSJ9LCI2Ijp7InIiOiI2OSIsImciOiIxNzkiLCJiIjowfSwiNyI6eyJyIjoiNjEiLCJnIjoiMTA0Iiw*iYiI6MjMyfSwiOCI6eyJyIjoiMTI3IiwiZyI6IjkwIiwiYiI6IjI0MiJ9LCI5Ijp7InIiOiIxOTAiLCJnIjoiMTQ4IiwiYiI6IjIyOCJ9LCIxMCI6eyJyIjoiMjE0IiwiZyI6IjgxIiwiYiI6IjE5NCJ9fQ==">https://doodles.patrickweaver.net/imessage-url-state-example/#eyIxIjp7InIiOiIyMjMiLCJnIjoiMjIiLCJiIjoiMTU3In0sIjIiOnsiciI6MjEwLCJnIjoiMzEiLCJiIjoiODcifSwiMyI6eyJyIjoiMjA1IiwiZyI6NzMsImIiOiIzNiJ9LCI0Ijp7InIiOiIyNTUiLCJnIjoiMTk3IiwiYiI6MzZ9LCI1Ijp7InIiOiIyNTIiLCJnIjoiMjQwIiwiYiI6IjExOSJ9LCI2Ijp7InIiOiI2OSIsImciOiIxNzkiLCJiIjowfSwiNyI6eyJyIjoiNjEiLCJnIjoiMTA0Iiw*iYiI6MjMyfSwiOCI6eyJyIjoiMTI3IiwiZyI6IjkwIiwiYiI6IjI0MiJ9LCI5Ijp7InIiOiIxOTAiLCJnIjoiMTQ4IiwiYiI6IjIyOCJ9LCIxMCI6eyJyIjoiMjE0IiwiZyI6IjgxIiwiYiI6IjE5NCJ9fQ==</a></blockquote>

300 character long sections of Base64 was longer that I expected would work, but as soon as I increased the “distance” between the separator characters to 302, which is a “-” (or “+”...) every 303rd character the links started to break.

<figure>
  <div style="text-align: center;">
    <img src="/images/blog/imessage/broken-link-colors.png" alt="A screenshot of an iMessage conversation with a broken link because the separator is the 303rd character" style="max-width: 500px; margin: 0 auto;" />
  </div>
</figure>

Interestingly, the limit was 301 character long sections of Base64 on both iMessage and Signal!

<figure>

<div style="text-align: center;">
  <img src="/images/blog/imessage/signal.jpg" alt="A screenshot of a signal conversation with a workign link and a broken link" style="max-width: 300px; margin: 0 auto;" />
</div>
<figcaption>A working link (301 distance) above a broken link (302 distance) in Signal</figcaption>

</figure>

Now that I know the exact cut off of 301 characters I’ve been able to find [one other blog post](https://blog.jonschneider.com/2023/06/the-mystery-of-broken-jwt-magic-link.html), but I’m still surprised that this isn’t more widely known.

Try out the app yourself or experiment with other platforms, I would love to learn more about the details behind this! This link without a hash will randomly generate 10 colors (and then store them in the URL hash): <a target="_blank" href="https://doodles.patrickweaver.net/imessage-url-state-example">doodles.patrickweaver.net/imessage-url-state-example</a>.

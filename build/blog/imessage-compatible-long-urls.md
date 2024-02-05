---
layout: layouts/blogPost.hbs
title: "Unravelling a longstanding iMessage long URL parsing mystery"
date: 2024-02-05
cover_image_url: /images/blog/imessage/cover.png
cover_image_alt: A screenshot of the example app
tags:
---

I have long been a fan of frontend-only websites, usually single-page apps, that are able to persist state in sharable URLs despite not having a database or a backend. One of the more complex projects I used this technique for was my [Crossword Puzzle Editor](https://doodles.patrickweaver.net/crossword/editor), which stores an entire puzzle, both clues and correct answers in the URL hash.

However, when I composed a small puzzle and shared it with a friend via iMessage I was greeted with a link to the app with epmtpy state above a long string of random characters in a blue bubble:

<figure>

<div style="text-align: center;">
  <img src="/images/imessage/cover.png" alt="A screenshot of an iMessage conversation with a broken link in it" style="max-width: 500px; margin: 0 auto;" />
</div>

</figure>

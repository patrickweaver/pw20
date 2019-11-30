---
title: Building a futuristic Record Player with Glitch and Raspberry Pi
preview: Earlier this year I wanted to explore the new [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function) functionality in Javascript so I started playing around with [a project](https://async-await-machine.glitch.me/) on Glitch ([glitch.com](https://glitch.com/)) that would call one API after another, then generate new API call options from each cycle. I compiled a long list of potential
date: 2018-10-23
cover_image: https://pwapi.s3.amazonaws.com/uploads/6fa2e0b0-9602-4d14-b500-d5b615a133f2
cover_image_alt: A screenshot of the app
tags:
layout: layouts/blogPost.hbs
---

![A screenshot of the record-player app](https://pwapi.s3.amazonaws.com/uploads/6fa2e0b0-9602-4d14-b500-d5b615a133f2)

Earlier this year I wanted to explore the new [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function) functionality in Javascript so I started playing around with [a project](https://async-await-machine.glitch.me/) on Glitch ([glitch.com](https://glitch.com/)) that would call one API after another, then generate new API call options from each cycle. I compiled a long list of potential APIs to use, but didn’t get past chaining together an [API that will respond with a picture of a specific breed of dog](https://dog.ceo/dog-api/), and the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) which could respond with the pages that came up in a search for the name of the breed.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/async-await-machine?path=README.md&previewSize=100"
    alt="async-await-machine on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

###### A Glitch embed of my Dog → Wikipedia API prototype: click on the name of a dog and you will get a picture of that dog, and a list of pages linked from that dog’s Wikipedia page.

I started exploring what other APIs I could connect and realized that most of them seemed to enforce a relatively strict internal type system. Even from the many connections Wikipedia could provide it was hard to think of a potential next link that would always match up with the mishmash Wikipedia returned. While it might be easy to match up the Google Maps API to a weather API, connecting more abstract concepts was much more difficult.

## The ‘Record Player’ app

While thinking through this an idea jumped out at me. I could connect the Google Vision API to Spotify to find albums based on pictures of a record cover. The idea seemed so obvious that I figured someone else had already done it (with more thorough research later I found a few similar projects but none that were fully implemented).

I decided that this spark of an idea was already a lot more interesting than my infinite API art project, but it still had the Rube Goldberg-esque quality I was going for. Even so, I still might have abandoned it without a tool like Glitch, which to me says, “your wacky idea is worth making (and it won’t take very long).” Using the skeleton of my previous project, I was able to put together (in about an hour) an app that bounced an image off of the Google Vision API then brought up search results from Spotify. I sent it to a friend who works at Spotify, and when she confirmed that it didn’t already exist I decided to spend a few hours putting together a more polished version (the hardest part turned out to be drag and drop file upload).

Thanks to Glitch’s embed feature you can take a look at the app (and the code!) below:

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/record-player?path=README.md&previewSize=100"
    alt="record-player on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

###### A Glitch embed of the Record Player app

The ‘final’ version of the project, “[Record Player](http://record-player.glitch.me/)” was surprisingly simple. When given a reasonably well lit image of an even somewhat popular album the Google Vision API is able to identify the name of the album (occasionally just the artist). There were a few words I hard coded to ignore (things like “vinyl”, “cd”, or “import”), but other than that I was able to send Google Vision’s “best guess” to Spotify, and play the first result. I designed a goofy front end (with every music related emoji) and shared it on Twitter thinking that a few people would try it.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/record-player?path=censoredWords.js&previewSize=0"
    alt="record-player on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

###### A Glitch embed with my surprisingly short list of censored words

[Anil Dash](https://twitter.com/anildash/) unexpectedly shared, and quickly it it started showing up [in](https://pitchfork.com/news/new-app-is-basically-shazam-for-album-covers/) [a](https://www.pastemagazine.com/articles/2018/05/new-app-automatically-recognizes-album-covers.html) [lot](https://www.nme.com/news/music/app-album-cover-shazam-2306795) [of](https://www.engadget.com/2018/05/04/record-player-app-image-based-spotify-search/) [strange](https://www.altpress.com/news/app_matches_album_covers_spotify/) [corners](https://www.androidauthority.com/record-player-spotify-google-861977/) [of](https://www.rollingstone.it/musica/news-musica/ora-esiste-uno-shazam-per-le-copertine-degli-album/410773/) [the](https://lifehacker.com/stream-a-vinyl-album-by-snapping-a-pic-of-its-cover-art-1825800020) [internet](https://www.thecurrent.org/feature/2018/05/02/app-album-covers). I was flattered by the coverage, but a few people were pointing out, “why would you take a picture instead of just typing in the name of the album?” First of all, it’s fun, which should be reason enough. But beyond that, there’s really no reason to right now, there are too many barriers and restrictions in place in the tools we use every day like Spotify and Google, that making a mashup like this will usually require an engineer instead of just an imagination.

## Getting Record Player working on a Raspberry Pi

From the beginning I wanted to create a physical version of Record Player (inspired by the amazing things they seem to be doing at [Dynamicland](https://dynamicland.org/) without “traditional” input and output devices). It would be a machine that could detect when you put a record cover in front of it, and automatically start playing the first song. No screens, no searching, no curated playlist to distract from the physical thing in my hands.

For the second time I was pleasantly surprised that by finding the right tools, a proof of concept was much easier than I expected. Using a Raspberry Pi with a camera module attached made a simple way to capture images. This left only the challenge of identifying when to start playing music. At first I thought that this might be easy to do by taking advantage of Google’s advanced image processing again, but I realized that the cost of the Google Vision API queries (you only get a certain amount free per month) would be prohibitive if I wanted the device to respond automatically.

I decided to see if a simple algorithm running on the Raspberry Pi could identify when something new was placed in front of the camera, which seemed to work well enough. Connecting this to a slightly modified version of the Node.js server that runs the original Record Player Glitch app created exactly the machine I had imagined. The video below shows my “Record Player” automatically starting playback when it sees a record cover. This prototype has screens, but they’re only used to start the app and troubleshoot.

<iframe src="https://player.vimeo.com/video/288443309" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

A video of the Record Player machine running on a Raspberry Pi

Anil’s suggestion for using “Record Player” when he shared the Glitch app, was to see what song came up when you take a selfie, or “Shazam for your face” as he put it. Of course this was hilarious, and this is the kind of play and dynamic interactions that can happen when we start to break down the strict parameters and physical barriers that currently constrain our interactions with technology.

Browsing Spotify is infinitely less interesting than browsing a friend’s record collection, but the convenience of any song ever recorded will usually win over the joy of discovering something unexpected. If we want this kind of ‘magic’ to bring technology like Google Vision out of prepackaged apps in our phones and laptops we need to allow for new ways of communicating with computers, and each other, that allow for experimentation, weirdness and imagination.

When we start to join the interesting parts of the real world (for example: everything created before 1997) with the conveniences that smartphones have brought we can start to imagine dynamic digital experiences like the analog ones we have thought up for hundreds of years. Vinyl records themselves were designed as a static medium, but creative musicians saw a way to interact and started sampling and scratching them to create hip-hop.

The idea for “Record Player” only seemed obvious to me after a few hours of sifting through documentation for dozens of APIs. As users we can’t see the “shape” of the internet, but these shapes determine what we can and can’t do, what we can and can’t imagine is possible. Surely every search on a weather or maps app is a city or address, almost all searches on Google Images are for nouns, and every search on Spotify or Genius is for an artist or song. But try connecting these services and APIs along unusual angles and you will start running into walls.

Throw a song at Google Maps to see where it was recorded? Pass a Yelp page to the New York Times API to find any news about the neighborhood? These queries might be possible, but they almost always require diving into the nitty gritty of several APIs, and massaging the data to make the connection. In today’s world ideas like “Record Player” have to be a million dollar business to be worth doing. Many articles written about the Record Player app implied that Spotify had made it. The way that we experience modern technology tells us that only huge corporations are able to create new ways of experiencing the world.

Products like [Glitch](https://glitch.com/), [Raspberry Pi](https://www.raspberrypi.org/), [IFTTT](https://ifttt.com/), [Shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios), and the inspiration for the Raspberry Pi Record Player, [Dynamicland](https://dynamicland.org/) make a more interesting and open future seem possible, now we just need to build the rest of it.

Start now by remixing Record Player on Glitch:
[https://glitch.com/~record-player](https://glitch.com/~record-player)

Or make your own Raspberry Pi powered version:
[https://github.com/patrickweaver/record-player-rpi](https://github.com/patrickweaver/record-player-rpi)
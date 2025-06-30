---
layout: layouts/portfolioProject.hbs
name: Record Player
cover_image_url: /images/portfolio/record-player/app-screenshot.jpg
cover_image_alt: A screenshot of the app
short_description: Play your old records by taking a picture with this computer vision enabled record player that streams from Spotify.
start_date: 2018-04-28
end_date: 2018-05-03
source_url: https://github.com/PatrickWeaver/record-player
status: Archived
tags:
  - Complete
  - javascript
  - node
  - python
  - raspberry pi
images:
  - /images/portfolio/record-player/app-screenshot.jpg
---

Record Player is a Rube Goldberg Machine of the Google Cloud Vision API and the Spotify API. After logging into Spotify, upload an image. The image will be sent to the Google Vision API, which will guess what it is. The app will then search Spotify for an album using Google’s guess, and give you the first result to play.

#### Press:

- [Anil Dash: 'It’s like Shazam — for your face!'](http://anildash.com/2018/05/02/its-like-shazam-for-your-face/)

- [Pitchfork: 'New App Is Basically Shazam for Album Covers'](https://pitchfork.com/news/new-app-is-basically-shazam-for-album-covers/)

- [Paste Magazine: 'New App Automatically Recognizes Album Covers'](https://web.archive.org/web/20190701181704/https://www.pastemagazine.com/articles/2018/05/new-app-automatically-recognizes-album-covers.html)

<figure>
<video controls width=540>
<source src="/images/portfolio/record-player/record-player-rpi-540p.mp4" type="video/mp4"></video>
<figcaption>A video demoing the project on a Raspberry Pi</figcaption>
</figure>

<script>
  const hash = location.hash;
  if (hash === '#glitch-redirect') {
    setTimeout(() => document.getElementById('alert').style.display = 'block', 500);
  } else {
    console.log('no', hash);
  }
</script>

<div id="alert" style="border: 4px solid red; background-color: #feb; padding: 2rem; margin: 2rem; border-radius: 10px; max-width: 800px; position: absolute; top: 2rem; left: 0; display: none;">
  <h2>Record Player is now closed</h2>
  <p>Record Player was designed and hosted on Glitch.com from its first day in 2018, until July 2025. Glitch.com closed web hosting in 2025, and I decided not to move the project to a new host. The old url <a href="https://record-player.glitch.me">record-player.glitch.me</a> now redirects to my portfolio (this page).</p>
  <p>Thanks for using Record Player, if you have any questions, thoughts, or comments, feel free to email me: <a href="mailto:hello.patrickw@gmail.com" target="_blank">hello.patrickw@gmail.com</a>, or contact me through one of the websites listed on the <a href="/links">Links</a> page.</p>
  <p> - Patrick</p>
  <button onclick="(() => document.getElementById('alert').style.display = 'none')()">Close</button>
</div>

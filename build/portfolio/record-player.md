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

<script>
  const hash = location.hash;
  if (hash === '#glitch-redirect') {
    setTimeout(() => document.getElementById('alert').style.display = 'flex', 500);
  } else {
    console.log('no', hash);
  }
</script>

<div id="alert" style="display: none; position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(120, 120, 128, 0.4); justify-content: center; padding: 1rem;">
<div style="border: 4px solid #222; background: url(/images/portfolio/record-player/music-background.png); margin: 3rem auto; border-radius: 10px; max-width: 700px; display: inline-block; position: relative; overflow: scroll;">
  <button id="close-x" style="position: absolute; top: 20px; right: 20px; font-size: 20px; border: none; background-color: rgba(255, 255, 255, 0.95); padding: 5px; border-radius: 3px; min-width: 30px; cursor: pointer;" onclick="(() => document.getElementById('alert').style.display = 'none')()">X</button>
  <div style="margin: 4rem 2rem 2rem; padding: 2rem; background-color: rgba(255, 255, 255, 0.95);">

  <h2 style="line-height: 2rem;">Record Player is now closed</h2>
  
  <p>Record Player was designed and hosted on Glitch.com from its first day in 2018, until July 2025. Glitch.com closed web hosting in 2025, and I decided not to move the project to a new host. The old url <a href="https://record-player.glitch.me">record-player.glitch.me</a> now redirects to my portfolio (this page).</p>
  <p>Thanks for using Record Player, if you have any questions, thoughts, or comments, feel free to email me: <a href="mailto:hello.patrickw@gmail.com" target="_blank">hello.patrickw@gmail.com</a>, or contact me through one of the websites listed on the <a href="/links">Links</a> page.</p>
  <p> - Patrick</p>
  <button style="cursor: pointer;" onclick="(() => document.getElementById('alert').style.display = 'none')()">Close Alert</button>
  </div>
</div>
</div>

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

---
layout: layouts/portfolioProject.hbs
name: Record Player
cover_image_url: /images/portfolio/record-player/app-screenshot.jpg
cover_image_alt: A screenshot of the app
short_description: Play your old records by taking a picture with this computer vision enabled record player that streams from Spotify.
start_date: 2018-04-28
end_date: 2018-05-03
project_url: https://record-player.glitch.me
source_url: https://github.com/PatrickWeaver/record-player
status: Complete
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
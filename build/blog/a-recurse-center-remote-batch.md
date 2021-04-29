---
layout: layouts/blogPost.hbs
title: ! "Participating in a Remote Batch at the Recurse Center"
description: "Refelctions on my Fall 1 '20 remote batch at RC"
date: "2021-01-25T16:33:26.655Z"
cover_image_url: "/images/blog/rc2/parallel-lines-curve.png"
cover_image_alt: "A screenshot of a prototype of my real-time subway map"
do_not_show_cover_at_top: true
tags:

---

Participating in a batch at the [Recurse Center](https://www.recurse.com/) is something that I’ve thought on-and-off about doing since I found out about it (then called Hacker School) sometime between 2013 and 2015, but it just never seemed like the right time to leave my job and its subsidized health insurance until I was laid off (what turned out to be) early on in the pandemic. I had as recently as January 2020 been thinking, “maybe now is the right time to finally quit and do it,” and though I’m relieved I was able to get a few more months of savings and health insurance into 2020, participating in RC was the perfect change of pace and a motivating bridge between employment and the job search.

<figure>

<div style="text-align: center;">
  <img src="/images/blog/rc2/rc-website.png" alt="A screenshot from the Recurse Center website with a notice about operating remotely" style="max-width: 500px; margin: 0 auto;" />
</div>

<figcaption>Screenshot from recurse.com</figcaption>

</figure>

I had been working from home at my old job from mid March to when I left in mid July, but I didn’t realize until my first day at RC, that even though I had frequently seen friends and coworkers on video calls and in outdoor settings for the past 6 months, it was rare that I had the chance to speak to anyone I hadn’t previously met since March 2020.

There are a few different pieces to the experience of a remote batch at RC. [Virtual RC](https://www.recurse.com/virtual-rc) is a fun game-like experience where each participant (and visiting alumni) has an avatar on the map. One corner of the map is more organized, and designed with a layout intended to mimic the physical RC space in Brooklyn, but the rest of the map is open for creative world building or experiments (there is even a Virual RC API now!). Each of the “rooms” in the structured corner of the map has a persistant video call link in it, and you can see which other participants are in the room on a call. Since I’ve started my new job I’ve missed being able to see who is already in a zoom call before deciding to join an optional meeting! Participants are encouaged to create a desk, where you can set an emoji status and leave a short note describing what you are up to that day. There are also audio rooms, which are great for more informal, or group conversations, and I’m only realizing now how much easier it is to start a call when you don’t have to open a new link and wait for a video call service to connect. A lot of the day-to-day conversation at remote RC happens via text on [Zulip](https://zulip.com/) (though this was the case for in-person RC also). It’s easy to reach out for help or to look for a pairing buddy on Zuip, and one of the most active streams (like channels in other chat apps) is Checkins where in-batch Recursers regularly post about what they’re working on.

<figure>

<div style="text-align: center;">
  <img src="/images/blog/rc2/virtual-rc.png" alt="A screenshot from Virtual RC with my avatar on top of the RC logo drawn with wall blocks" style="max-width: 500px; margin: 0 auto;" />
</div>

<figcaption>Hanging out on top of the RC logo in Virutal RC</figcaption>

</figure>

I came into RC with [a few goals](/blog/recurse-center-week-1/#rc-goals) ranging form ambitious (real-time NYC subway map or self-hosted social network prototype), to the kinds of things I often made when I had a few hours to spare (SwiftUI proof of concept checklist app). I had spent the weeks leading up to my batch doing what I wanted to think of as a mini RC-like experience re-learning Swift and using SwiftUI for the first time. I had hoped to finish the [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) tutorials in time for day 1 at RC but ended up being about a week too slow.

I was surprised at the 9-5ness of the events and chatter in remote RC, though one of the most exciting things about doing a remote batch was being able to meet and collaborate with people from around the world (I counted at least 8 timezones in my batch), most events occurred bewteen 9am and 5pm Eastern Time. I would guess that this means that the average RC participant is spending less time in RC, than when in an in-person batch, which depending on your goals and ability to focus when something potentially more fun is going on, could be a benefit or a drawback to the remote RC experience.

After speeding through the SwiftUI tutorials in my first week (and getting kind of tired of working in an unfamiliar language), I decided to spend most of my time working on my [real-time NYC subway map project](/blog/making-a-real-time-nyc-subway-map-with-real-weird-nyc-subway-data/) that I had first prototyped in early 2020. I eventually was able to get a mostly working prototype of the full system, coincidentally on almost the exact day that the MTA [released](https://www.curbed.com/2020/10/first-look-new-yorks-digital-subway-map-comes-alive-today.html) their own version. I thought that the subway map would be one of a few medium sized projects that I would be able to spend 2 to 3 weeks on during my RC time, but I had already spent more than half of my 12 week batch on it. I had done a few other one-off projects like an [abstract “video game”](https://10-print-video-game.glitch.me/) based on the 10 Print pattern and a few explorations into techincal topics like [the browser JavaScript canvas API](https://doodles.patrickweaver.net/canvas-lines/), but I decided that I should try to find a real medium-sized project for my last few weeks at RC.

<figure>

<div style="text-align: center;">
  <img src="/images/blog/rc2/canvas-lines.png" alt="A screenshot from my slides on drawing pixel perfect lines on the JS canvas" style="max-width: 500px; margin: 0 auto;" />
</div>

<figcaption>It's hard to draw crisp lines on the JS canvas!</figcaption>

</figure>

I felt like I had mostly been working though a big challenge with technologies that were pretty familiar so far (JavaScript and the [Leaflet.js mapping library](https://leafletjs.com/)), so I wanted to find a project that I could use to learn something new, but not spend all my time on implementation details like I had been doing learning SwiftUI. I had created a static website on the [doodles subdomain](https://doodles.patrickweaver.net/) of my website that I wanted to keep filling out, so a useful constraint was to make something on the web that wouldn’t need a backend (the doodles website is static and built with [Eleventy](https://www.11ty.dev/) , as are this website, and most of the doodles)). In the last year at my job, and through collaborating with other RC participants during my batch I had gotten pretty quick with prototyping things with React, but I hadn’t used either [React Hooks](https://reactjs.org/docs/hooks-intro.html), or [TypeScript](https://www.typescriptlang.org/) for anything. I decided to try learning both and created a [web-based Crossword Puzzle composer](https://doodles.patrickweaver.net/crossword/editor).

<figure>

<div style="text-align: center;">
  <img src="/images/blog/rc2/crossword.png" alt="A screenshot of the crossword puzzle app with symmetrical squares blacked out" style="max-width: 500px; margin: 0 auto;" />
</div>

<figcaption>A crossword puzzle with multiple kids of symmetries</figcaption>

</figure>

The crossword puzzle app was a fun mix of small challenges and interesting design decisions. One of the first things that stood out to me was that I had never really thought about the algorithm that is used to number crossword puzzle answers on the board, the kind of thing that is immediately understandable, but more complex that you would expect it to be when represented with a programming language. React Hooks were immediately very useful since most of the components for the app needed a sprinkling of state, but not too much, and TypeScript was helpful, especially in the context of RC because I paired with a few people on certain self-contained parts of the app like the symmetry for square toggling, and the defined types help people quickly pick up what the code we were writing would do. My favorite part of the crossword puzzle app is that to store a composed puzzle without a backend, I encode the whole puzzle state into the URL (here is a [small RC themed puzzle](https://doodles.patrickweaver.net/crossword/play/#eyJzdGF0ZSI6W1tbWyJmIiwiIiwiZmYiLG51bGwsbnVsbCwwXSxbImYiLCIiLCJ-mZiIsbnVsbCxudWxsLDFdLFsidCIsIlIiLCJ0dCIsMSwxLDJdLFsidCIsIkMiLC-JmdCIsMSwyLDNdXSxbWyJ0IiwiRiIsInR0IiwzLDMsNF0sWyJ0IiwiSSIsImZ0I-iwzLDQsNV0sWyJ0IiwiRiIsImZmIiwzLDEsNl0sWyJ0IiwiTyIsImZmIiwzLDIs-N11dLFtbInQiLCJBIiwidGYiLDUsMyw4XSxbInQiLCJNIiwiZmYiLDUsNCw5XSx-bInQiLCJJIiwiZmYiLDUsMSwxMF0sWyJ0IiwiRCIsImZmIiw1LDIsMTFdXSxbWy-J0IiwiTiIsInRmIiw2LDMsMTJdLFsidCIsIk8iLCJmZiIsNiw0LDEzXSxbInQiL-CJEIiwiZmYiLDYsMSwxNF0sWyJ0IiwiRSIsImZmIiw2LDIsMTVdXV0sW1tbImEi-LDEsIkZLQSBIYWNrZXIgU2NoLiIsIlJDIiwyXSxbImEiLDMsIk9yZGVyIGluIGE-gcXVldWUiLCJGSUZPIiw0XSxbImEiLDUsIkluIHRoZSBtaWRkbGUgb2YiLCJBTU-lEIiw4XSxbImEiLDYsIkphdmFTY3JpcHQgcnVudGltZSIsIk5PREUiLDEyXV0sW-1siZCIsMSwiV2lyZWxlc3MgdGVjaCB3aXRoIHRhZ3MiLCJSRklEIiwyXSxbImQi-LDIsIldoYXQgYSBwcm9ncmFtbWVyIHdyaXRlcyIsIkNPREUiLDNdLFsiZCIsMyw-iQ29tcHV0ZXIgYWlyIG1vdmVyIiwiRkFOIiw0XSxbImQiLDQsIlNob3J0aGFuZC-Bmb3Igb25lJ3MgcHJlZmVyZW5jZSIsIklNTyIsNV1dXV19)). I even discovered seemingly documented nowhere else bug in iMessage when prototyping this feature. When I first sent a friend a link to a puzzle as a test, iMessage wouldn’t parse it as a link, so they just got a wall of what looked like random characters. I looked around at other long tracking links I’d received in my emails and noticed they frequently had hyphen characters every so often. I added hyphens to my urls and all of a sudden iMessage could parse them as links!

<figure>

<div style="text-align: center;">
  <img src="/images/blog/rc2/imessage.png" alt="A screenshot of a message in iMessage with a long stiring of seemingly random characters" style="max-width: 500px; margin: 0 auto;" />
</div>

<figcaption>A failed attempt to send a crossword</figcaption>

</figure>

During the second half of my RC batch I also interviewed with a lot of companies. To help with this I attended a daily group for pairing on software job interview style questions. Coming back to these types of problems a few times a week was really helpful in being able to think through them quickly and I noticed a lot of progress in my ability to complete these kinds of challenges the more I practiced and interviewed.

When I first applied to RC I had been feeling nervous about committing such a long period of time to not working before (hopefully!) starting a new job, I considered just doing a 1 week mini batch, or a 6 week half-batch, but the 12 weeks went by way more quikly than I had anticipated, and I was fortunately able to hit my idealistic goal of starting a new job in the new calendar year! The 12 weeks helped me feel free to dive into weird corners of the problems I wanted to work on like [drawing parallel lines on a map](https://doodles.patrickweaver.net/drawing-parallel-lines-on-a-map/) (lines were a big theme in my projects), without worrying that it would keep me from “finishing” my projects (author’s note: I still didn’t “finish” most of them). In the spirit of “never graduate” I hope to someday participate in another batch at the physical RC space, but in the meantime, anyone who like me has been sitting on the fence on applying to RC for years should take the opportunity to participate remotely and start the programming project you’ve always been meaning to get to!

<figure>

<div style="text-align: center;">
  <img src="/images/blog/rc2/parallel-lines-curve.png" alt="A screenshot of a prototype of my real-time subway map" style="max-width: 500px; margin: 0 auto;" />
</div>

<figcaption>An early attempt to draw MTA track geography data as parallel tracks on a map</figcaption>

</figure>

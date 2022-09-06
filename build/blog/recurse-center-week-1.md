---
layout: layouts/blogPost.hbs
title: ! "Week 1 at Recurse Center: Two Approaches to Learning"
description: "My plan for Fall 1 '20 at RC"
date: "2020-08-16T22:22:13.781Z"
cover_image_url: /images/blog/rc/virtual-rc.png
cover_image_alt: A screenshot of my avatar in Virtual RC
do_not_show_cover_at_top: true
tags:

---

I just finished my first week as part of the Fall 1 '20 batch at [Recurse Center](https://www.recurse.com). I tried to split my time between being social and building skills that I want to use for future projects. The social aspect of RC is interesting because this batch is being conducted remotely.

My batch at RC started exactly 5 months after my last day in an office, and something I had been thinking about over the last few months, is that I haven’t met anyone new since early March when NYC shut down because of the pandemic. It’s been very refreshing to meet people again, even if it’s via video calls and chat. RC has created an online representation of their physical space we call "Virtual RC". Each of us have avatars we can move around the space, and there are permanent links to video call rooms that we can pop into for events or impromptu conversations. The Virtual RC experience pairs well with group chat organized into streams on different topics.

<figure>

![A screenshot of Virtual RC](/images/blog/rc/virtual-rc.png)
<figcaption>My avatar hanging out in the "Shannon" room at Virtual RC</figcaption>

</figure>

Other than social events I spent my first week at RC focused on two projects. The first was going through the [100 Days of SwiftUI tutorials](https://www.hackingwithswift.com/100/swiftui) (at many more than one a day), which I had started before the batch. The second was reviewing the [real time NYC Subway map](https://github.com/patrickweaver/nyc-subway) project I first started in January.

I wish I had been able to finish the SwiftUI tutorials before the batch (my original goal), because it didn’t feel as useful to share what I was working on with other RC participants as I was re-building apps that someone else had designed, but I finished the last app on Friday and I’m excited to be able to use SwiftUI to quickly prototype projects for my phone.

When I first started the subway map project in early 2020 I was excited about finishing it quickly, but in March when I also stopped taking the subway I lost enthusiasm for the project. Starting at RC has helped rekindle the excitement I had for it, I think partly because even though the batch is remote and there are participants from around the world, there is also a strong NYC contingent.

An interesting aspect of building a map from MTA data is that the data structures that the MTA publishes are designed for building countdown clock style apps. I would imagine that the MTA calculates this per-station data from the location of each train, but in order to build an app that is more focused on location than time, I need to reverse engineer the location data from the distance in time each train from the next station. There are also other weird quirks, like train trip start times being provided in "HH:MM:SS" format, but station arrival times being provided in Unix time format.

<figure>

```
{ "id": "000001G",
  "tripUpdate": {
    "trip": {
      "tripId": "126481_G..N",
      "startTime": "21:04:49",
      "startDate": "20200815",
      "routeId": "G"
    },
    "stopTimeUpdate": [
      { "arrival": { "time": "1597541836" },
        "departure": { "time": "1597541836" },
        "stopId": "G28N" },
      { "arrival": { "time": "1597541904" },
        "departure": { "time": "1597541904" },
        "stopId": "G26N" }
        
      /* More stations below in real data */
    ]
  }
}
```

<figcaption>Example MTA Data</figcaption>

</figure>

Splitting my programming time between learning SwiftUI and trying to wrap my head around the subway map again has felt like two different approaches to learning. In the past I have often jumped into building my own projects with a new tool or technology as soon as I feel like I had learned enough to do so, but I’ve often realized later that I spent a lot of time figuring out answers that I might have gotten to more quickly by completing a more thorough overview before starting.

The subway map is one example of that type of project, but for good reason. It’s a project that when I started, I wasn’t sure was possible. It was inspired by a similar (but much simpler) map in the underground MUNI stations in San Francisco. The MUNI maps I remember from 15 years ago only showed trains in "the tunnel," which although many lines run through, has a single trunk, that lines branch out from after going above ground (newer maps as seen below seem to show the whole system). Since these MUNI maps had existed since at least the early 00s I figured if one hadn’t been made (I’ve since found [NYC maps that have been made](https://tracker.geops.ch/?z=13&s=1&x=-8232001.0970&y=4969606.7622&l=transport)) for NY there must be a technical reason (it may just be that because until relatively recently [per station data wasn’t available](https://www.theatlantic.com/technology/archive/2015/11/why-dont-we-know-where-all-the-trains-are/415152/) in NYC).

<figure>

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr"><a href="https://twitter.com/MBTA?ref_src=twsrc%5Etfw">@MBTA</a> <a href="https://twitter.com/sfmta_muni?ref_src=twsrc%5Etfw">@sfmta_muni</a> <a href="https://twitter.com/d_tribe?ref_src=twsrc%5Etfw">@d_tribe</a> <a href="https://twitter.com/universalhub?ref_src=twsrc%5Etfw">@universalhub</a> closer zoom. Incredibly useful. <a href="https://t.co/jqHuGyZrJR">pic.twitter.com/jqHuGyZrJR</a></p>&mdash; Ari Ofsevit (@ofsevit) <a href="https://twitter.com/ofsevit/status/720301082899918850?ref_src=twsrc%5Etfw">April 13, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<figcaption>

A photo of the real time MUNI map in a tweet by [@ofsevit](https://twitter.com/ofsevit/status/720301082899918850)

</figcaption>

</figure>

In order to gauge the feasibility of the project I wanted to get started quickly, throwing a map together and adding some markers for stations and individual trains at fixed times. Because I had limited experience working with transit data (which is provided in a [very complex format](https://developers.google.com/transit/gtfs)), or maps, this left me with both the sense that the project is possible, and a big spaghetti code mess.

<figure>

![A screenshot of the first prototype of my subway map app](/images/blog/rc/nyc-subway-v1.png)

<figcaption>The first prototype of the subway map app</figcaption>

</figure>

I started looking into SwiftUI because I’m interested in making my own home screen widgets once I update my phone to iOS 14, and these widgets are built using the framework. Knowing I would have time to experiment during my batch at RC, and wanting to avoid my usual new tool mess phenomenon, I prioritized giving myself a good understanding of how SwiftUI works, what it can and can’t do, and a general review of Swift. Once my batch started I found it more and more difficult to keep going through the tutorials instead of jumping into an original idea, but throughout the week, spending time figuring out what I was even thinking reviewing the code for the subway map project re-motivated me to get through it.

In the first week at RC the return to a daily routine has also put me back in the frame of mind I spent a lot of my last job in, where I would come up with ideas for about 3 apps a day that would solve tiny problems. One example is, after a particular session of an RC event for pair programming on software job interview style questions where we selected a problem that ended up being very difficult in the language we chose to work in, I thought that maybe I should create a mini app for the group where we could rate problems for each other. A lot of these ideas that are generated through trying to solve small problems in my routine end up being apps that organize data into text boxes, which are often not very interesting, so I’m conflicted on whether or not to spend time following these threads that will likely continue to appear.

<span id="rc-goals">A few other things that are slightly more interesting, or at least broadly useful that I want to get done during my time at RC are:</span>

- The real time subway map
- A simple checklist app with a home screen widget made with SwiftUI
- A tool to convert an export from a Blogger blog to a static site generator
- A prototype of a self-hosted social network profile that can interface with other people’s self-hosted profiles
- A second iteration of my [handwritten email sending project](https://github.com/patrickweaver/ocr-email)
- Something that takes ideas similar to Dynamicland (or the [Living Room](https://www.recurse.com/blog/132-living-room-making-rc-programmable) project at RC) into the remote world we’re living in.

Overall I’m very excited to be spending time at RC, and I hope that it gives me time to explore ideas with weird corners and not settle for solving small simple problems quickly.
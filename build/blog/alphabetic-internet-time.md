---
layout: layouts/blogPost.hbs
title: Alphabetic Internet Time: A Great Idea That Will Never Work
date: 2022-08-13
#cover_image_url: /images/blog/gdoc-image-dl-cover.png
#cover_image_alt: A screenshot of the bookmarklet buttons
tags:

---

## Communicating accross time zones

In the Fall of 2020 I [participated in a 12 week batch](https://www.patrickweaver.net/blog/a-recurse-center-remote-batch/) at the [Recurse Center](https://recurse.com). A few months earlier RC had transitioned to hosting Recursers remotely because of the pandemic, which is how they continue to operate now in Summer 2022. While I had a lot of experience working remotely, both before and during the pandemic, RC was the first time where I was working with people in more than 1 or 2 other time zones. I now work at a fully remote company, mostly spread over the 4(ish) U.S. time zones, but with a few people permanantly or temporarily in other places.

RC when I was there, mostly I would guess because their software was designed and configured for in person retreats in NYC, operated for the most part in Eastern Time, although I see from my limited participation in the community as an alum that this may have shifted, especially thanks to [Zulip's time zone-relative timestamp support](https://zulip.com/help/format-your-message-using-markdown#global-times). At my current job we often default to either Eastern Time or Pacific Time, but some people will also just use thier local time and let others figure it out.

Out of politeness and miscalculation-anxiety reducing redundency I often will use multiple time zones, for example when proposing a meeting I might say, “Let’s meet at 🗽 12:30 PM ET / 🏔 10:30 AM MT / 🌁 9:30 AM PT,” (I’m still searching for a good Central Time emoji, 🛣 🌽 🌪 are the best I've got), but time zone based confusion often takes more time than it should. Side note, it bewilders me that Slack still doesn’t have something similar to Zulip’s *“you write in your time zone, they read in their time zone”* timestamp support in 2022.

## Time zones are pretty confusing, DST makes them worse

Something that probably doesn’t cause very much confusion for most other people, but I can’t help but consistently notice is that most people exclusively use ”EST/CST/MST/PST” throughout the whole year, even during the Spring, Summer, and Fall, when most of the U.S. is observing Daylight Saving Time, which makes me especially curious what the commonly used abbreviations will be if the U.S. [switches to permanent DST](https://web.archive.org/web/20220315222718/https://www.nytimes.com/2022/03/15/us/politics/daylight-saving-time-senate.html), and how people in Arizona, [which mostly does not observe DST](https://en.wikipedia.org/wiki/Time_in_Arizona) understand someone in Denver saying, “Let’s meet at 10:30 MST on August 14.” I would imagine something like, ”😵‍💫.” Even Google search seems to get this wrong as searching [“current time MST”](https://google.com/search?q=current%20time%20MST) at 8:39 PM EDT in NYC in August shows ”6:39 Mountain Time (MT)”, though I'm curious what the same search would show in Arizona.

## A time zone for the internet

All of this leads to my “Great Idea That Will Never Work,” Alphabetic Internet Time (AIT). AIT is essentially UTC, but with the letters A through X of the (English) alphabet replacing the hour digits. Midnight UTC is A:00, Noon UTC is M:00, 1:34 PM UTC is N:34. Just like UTC, these times are not local, S:00 is the same moment everywhere (18:00 UTC), for someone in New York in August 2022 observing EDT, it is 2:00 PM, for the same person in January 2023 S:00 is 1:00 PM. For someone in San Francisco in August S:00 is 11:00 AM.

This may all sound confusing, but it’s mostly because AIT is not really useful at all for knowing what time it is somewhere else. The main goal of AIT is reducing the amount of time you spend thinking about what time it is somewhere else (though it is likely still polite to make sure you’re not trying to schedule something in the middle of someone else’s night). AIT starts to make sense when you think about people in different time zones communicating about something that will happen online. As someone who works normal business hours in NYC, my work day goes from N:00 (9 AM EDT) to V:00 (5 PM EDT), with lunch usually at Q:30 (though during the Winter it would be O:00 to W:00). If I’m planning with someone in San Francisco who also works normal business hours (Q:00 - A:00) and we want at least an hour, we could easily see that any time between R:00 and V:00 would work, and we would both know what time that was for us.

## Why not just use UTC?

People who are already used to using UTC might look at AIT and think that it’s just a confusing extra layer on top of a system that works pretty well, but in my opinion, moving whole communities of people to UTC would likely be very difficult because doing so asks them to do the same mental math as coordianting between time zones, but often with larger numbers. Even after changing my phone to use a 24 hour clock for weeks while spending time in countries where that is common I still found myself translating 16:00 to “16 - 2 - 10 = 4 PM” in my head. My guess is that for most people it would be easier to convert between two separate concepts, their local time with numbers, and AIT with letters, but I may be wrong. The other advantage is clarity, even if the known best practice is to use UTC, a message like “Let’s meet at 15:30” can still be unclear, potentially UTC, the sender’s local time, or your own!

## Reasons why AIT will never work

As good an idea as I think this is, I have no hopes of AIT catching on mostly because I think that most people wouldn’t be able to get over the ridiculousness of saying “M:45” (and not being worried people would think they’re talking about a bus). But beyond the sillyness, it’s still Daylight Saving Time that makes communicating accross time zones unlikely to be improved on. If your own time zone stayed the same relative to AIT year round I think there would be a chance that, with tools like an AIT display next to your local time, or calendar integrations, that it would work for a lot of people who frequently communicate with people in other time zones, but having to switch recurring times back and forth by one letter twice a year seems like friction that would dampen most people’s enthusiasm. Bringing dates into the picture also seems like it would complicate things. Even though A:15 is 5:15 PM PDT in San Francisco, if we put a date on it, it would have to be “tomorrow” for the person in SF to match UTC. I don’t think that this would add any additional confusion to communicating with people whose time zone is in the next day relative to your own, but a new system like AIT would likely get blamed for the inherent confusion of time zones.

But who knows! Weirder ideas have caught on in the past, like Daylight Saving Time!

Aug 16, 2022 B:09, Brooklyn, NY
---
layout: layouts/blogPost.hbs
title: "Alphabetic Internet Time: A Time Zone for the Internet"
date: 2022-08-18
cover_image_url: /images/blog/ait/ait-clock-screenshot.jpg
cover_image_alt: A screenshot of an AIT clock
tags:
---

In the Fall of 2020 I [participated in a 12 week batch](https://www.patrickweaver.net/blog/a-recurse-center-remote-batch/) at the [Recurse Center](https://recurse.com). While I had a lot of previous experience _working_ remotely, both before and during the pandemic, RC was the first time where I was communicating with people in more than 1 or 2 other time zones. I now work at a fully remote company, mostly spread over the 4(ish) U.S. time zones, but with a few people permanently or temporarily in other places.

#### Communicating across time zones

RC when I was there (mostly I would guess because their software was designed and configured for in person retreats in NYC) operated for the most part in Eastern Time, although I see from my limited participation in the community as an alum that this may have shifted, especially thanks to [Zulip’s time-zone-relative timestamp support](https://zulip.com/help/format-your-message-using-markdown#global-times). RC had transitioned to hosting Recursers remotely a few months before my batch, which is how they continue to operate now in Summer 2022. At my current job we often default to either Eastern Time or Pacific Time, but some people will also just use their local time and let others figure it out.

Out of politeness and miscalculation-anxiety reducing redundancy I often will use multiple time zones, for example when proposing a meeting I might say, _“Let’s meet at 🗽 12:30 PM ET / 🏔 10:30 AM MT / 🌁 9:30 AM PT,”_ (I’m still searching for a good Central Time emoji, 🛣 🌽 🌪 are the best I’ve got), but time zone based confusion often takes more thinking than it should.

(Side note, it bewilders me that Slack still doesn’t have something similar to Zulip’s _“you write in your time zone, they read in their time zone”_ timestamp support in 2022. 🙃)

#### Time zones are pretty confusing, DST makes them worse

Something that probably doesn’t cause very much confusion for most other people, but I can’t help but consistently notice is that most people exclusively use ”EST/CST/MST/PST” throughout the year, even during the Spring, Summer, and Fall, when most of the U.S. is observing Daylight Saving Time. This linguistic pattern (which I assume is somewhat caused by “EST” seeming like an abbreviation for “Eastern”) makes me especially curious what the commonly used abbreviations will be if the U.S. [switches to permanent DST](https://web.archive.org/web/20220315222718/https://www.nytimes.com/2022/03/15/us/politics/daylight-saving-time-senate.html), and how people in Arizona, [which mostly does not observe DST](https://en.wikipedia.org/wiki/Time_in_Arizona) understand someone in Denver saying, “Let’s meet at 10:30 MST on August 14.” I would imagine them thinking something like, ”😫.”

Even Google search seems to get this wrong as searching [“current time MST”](https://google.com/search?q=current%20time%20MST) at 8:39 PM EDT in NYC in August shows ”6:39 Mountain Time (MT)”, though I also wonder what the same search would show in Arizona.

#### A time zone for the internet

All of this leads to my Alphabetic Internet Time (AIT), which I consider _“A Great Idea That Will Never Work.”_ AIT is essentially UTC, but with the letters A through X of the (English) alphabet replacing the hour digits. Midnight UTC is A:00, Noon UTC is M:00, 1:34 PM UTC is N:34. Just like UTC, these times are not local, S:00 is the same moment everywhere (18:00 UTC). For someone in New York in August 2022 observing EDT, it is 2:00 PM, for the same person in January 2023 S:00 is 1:00 PM. For someone in San Francisco in August, S:00 is 11:00 AM.

This may all sound confusing, but it’s mostly because AIT is not really useful at all for knowing what time it is somewhere else. The main goal of AIT is reducing the amount of time you spend thinking about what time it is somewhere else (though it is likely still polite to make sure you’re not trying to schedule something in the middle of someone else’s night). AIT starts to make sense when you think about people in different time zones communicating about something that will happen online. As someone who works normal business hours in NYC, my work day goes from N:00 (9 AM EDT) to V:00 (5 PM EDT), with lunch usually at Q:30 (though during the Winter it would be O:00 to W:00). If I’m planning with someone in San Francisco who also works normal business hours (Q:00 - A:00) and we want at least an hour, we could easily see that any time between R:00 and V:00 would work, and we would both know what time that was for us.

If AIT were to work it wouldn’t rely on people manually calculating the current time, they would need clocks that display AIT like this reference implementation I made: <a href="https://doodles.patrickweaver.net/ait/" target="_blank">doodles.patrickweaver.net/ait/</a>

<figure style="text-align: center; width: 100%;">
  <iframe
      id="ait-clock"
      style="border: 1px solid black; margin: 1rem auto;"
      title="Alphabetic Internet Time Clock"
      width="400"
      height="400"
      src="https://doodles.patrickweaver.net/ait/">
  </iframe>
  <figcaption>A reference implementation of an AIT clock at: <a href="https://doodles.patrickweaver.net/ait/" target="_blank">doodles.patrickweaver.net/ait/</a> </figcaption>
</figure>

#### Why not just use UTC?

People who are already used to using UTC might look at AIT and think that it’s just a confusing extra layer on top of a system that works pretty well, but in my opinion, moving whole communities of people to UTC would likely be very difficult because doing so asks them to do the same mental math as coordinating between time zones, but often with larger numbers.

Even after changing my phone to use a 24 hour clock for weeks while spending time in countries where that is common I still found myself translating 16:00 to _“16 - 2 - 10 = 4 PM”_ in my head. My guess is that for most people it would be easier to convert between two separate concepts, their local time with numbers, and AIT with letters, but I may be wrong. The other advantage is clarity, even if the known best practice is to use UTC, a message like “Let’s meet at 15:30” can still be unclear, potentially UTC, the sender’s local time, or your own!

#### Does anything like this exist?

The closest thing to AIT that currently exists is the [Military Time Zones](https://en.wikipedia.org/wiki/List_of_military_time_zones) which also use the alphabet to refer to time zones, but in a way that doesn’t make much sense. Like AIT the time zones move East from UTC with UTC+1 being “Alfa”, UTC+2 “Bravo”, and continuing through the NATO phonetic alphabet (though skipping “Juliett”) to UTC+12, “Mike”. However, rather than continue through the alphabet at UTC-11, “November” is back near where we started as UTC-1 (and continues moving West from there).

The military time zone names do seem useful, and are possibly too similar to AIT for my idea to catch on, but out of sequence order make the concept seem too confusing for anyone using it for much beyond just “time zone names.”

One interesting (and further confusing thing) about the military time zone names is that “Mike”, UTC+12 and “Yankee”, UTC-12 are the same time, but on different dates because the border straddles the international date line. It’s quirks like this that make me think that any improvement on time zone related communication is likely to fail.

![A map of military time zones from the ACP 121(I) standard](/images/blog/ait/military-time-zones.jpg)

#### Reasons why AIT will never work

As good an idea as I think this is, I have no hopes of AIT catching on mostly because I think that most people wouldn’t be able to get over the ridiculousness of saying “M:45” (and not being worried people would think they’re talking about a bus). But beyond the silliness, it’s still Daylight Saving Time that makes communicating across time zones unlikely to be improved on.

If your own time zone stayed the same relative to AIT year round I think there would be a chance that, with tools like an AIT display next to your local time, or calendar integrations, that it would work for a lot of people who frequently communicate with people in other time zones, but having to switch recurring times back and forth by one letter twice a year seems like friction that would dampen most people’s enthusiasm.

Bringing dates into the picture also seems like it would complicate things. Even though A:15 is 5:15 PM PDT in San Francisco, if we put a date on it, it would have to be “tomorrow” for the person in SF to match UTC. I don’t think that this would add any additional confusion to communicating with people whose time zone is in the next day relative to your own, but a new system like AIT would likely get blamed for the inherent awkwardness of time zones.

![Photographs of the sunset in San Francisco, CA, and New York, NY](/images/blog/ait/sf-ny-sunset.jpg)

But who knows! Weirder ideas have caught on in the past, like Daylight Saving Time! Or, maybe we can all just join the UTC+8 “Hotel” time zone since almost 25% of the world population already lives in it!

Aug 18, 2022 B:14, Brooklyn, NY

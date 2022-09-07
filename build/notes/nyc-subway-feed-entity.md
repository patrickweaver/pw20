---
layout: layouts/blob.hbs
title: Patrick Weaver | NYC Subway Feed Entity Example
pageHeader: NYC Subway Feed Entity Example
---

<pre>
{
  id: "000001G",
  tripUpdate: {
    trip: {
      tripId: "125500_G..S",
      startTime: "20:55:00",
      startDate: "20200821",
      routeId: "G",
    },
    stopTimeUpdate: [
      {
        arrival: { time: "1598059426" },
        departure: { time: "1598059426" },
        stopId: "F24S",
      },
      {
        arrival: { time: "1598059500" },
        departure: { time: "1598059500" },
        stopId: "F25S",
      },
      {
        arrival: { time: "1598059650" },
        departure: { time: "1598059650" },
        stopId: "F26S",
      },
      {
        arrival: { time: "1598059740" },
        departure: { time: "1598059740" },
        stopId: "F27S",
      },
    ],
  },
  timestamp: 1598059449,
},
{
  id: "000002G",
  vehicle: {
    trip: {
      tripId: "125500_G..S",
      startTime: "20:55:00",
      startDate: "20200821",
      routeId: "G",
    },
    currentStopSequence: 17,
    timestamp: "1598059426",
    stopId: "F24",
  },
  timestamp: 1598059449,
},
</pre>

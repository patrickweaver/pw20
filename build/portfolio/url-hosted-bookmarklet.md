---
layout: layouts/portfolioProject.hbs
name: URL Hosted Bookmarklet
cover_image_url: /images/portfolio/bookmarklet/bookmarklet-website-screenshot.jpg
cover_image_alt: A screenshot of the app
short_description: A website that encodes bookmarklet code into a URL hash so that it can be easily shared.
start_date: 2022-03-17
end_date: 2022-03-17
project_url: https://doodles.patrickweaver.net/url-hosted-bookmarklet
source_url: https://github.com/patrickweaver/url-hosted-bookmarklet
status: Complete
tags:
  - Complete
  - javascript
images:
  - /images/portfolio/bookmarklet/bookmarklet-website-screenshot.jpg
---

This website can host a bookmarklet in the URL, which is handy for situations when you want to share a small code snippet to run locally.

The links are long, but they store the entire source code for the bookmarklet. For example, this link stores a bookmarklet, which after clicking it will wait a randomly generated period of time between 30 seconds and 5 minutes, then clear the screen of the website and replace it with a randomly generated background color:

<!-- markdownlint-disable no-inline-html -->
<blockquote class="project-note">
  <p>
    <a target="_blank" style="overflow-wrap: break-word;" href="https://doodles.patrickweaver.net/url-hosted-bookmarklet/#name=%E2%8F%B0&code=js_%7BsetTimeout(()%20%3D%3E%20%7Bdocument.body.innerHTML%20%3D%20%60%3Cdiv%20id%3D%22empty%22%3E%3Cspan%20id%3D%22text%22%3EGoodbye%3C%2Fspan%3E%3C%2Fdiv%3E%60%3Bconst%20d%20%3D%20%600123456789ABCDEF%60%3Bconst%20color%20%3D%20()%20%3D%3E%5B%22R%22%2C%20%22G%22%2C%20%22B%22%5D.reduce((p%2C%20c)%20%3D%3E%20p%20%2B%20d.split(%22%22)%5BMath.floor(Math.random()%20*%2016)%5D%2C%22%23%22)%3Bdocument.body.style.backgroundColor%20%3D%20color()%3Bconst%20e%20%3D%20document.getElementById(%60empty%60)%3Be.style.height%20%3D%20%60100vh%60%3Be.style.width%20%3D%20%60100vw%60%3Be.style.paddingTop%20%3D%20%60200px%60%3Be.style.textAlign%20%3D%20%60center%60%3Bconst%20t%20%3D%20document.getElementById(%60text%60)%3Bt.style.fontSize%20%3D%20%6080px%60%3Bt.style.fontWeight%20%3D%20%60bold%60%3Bt.style.color%20%3D%20%60orange%60%3B%7D%2C%20((Math.random()%20*%20(4.5%20*%2060))%20%2B%2030)%20*%201000)%7D&description=A%20bookmarklet%20that%20clears%20the%20page%20with%20the%20message,%20%22Goodbye%22%20at%20a%20randomly%20generated%20time%20between%2030%20seconds%20and%205%20minutes%20in%20the%20future.">
      hhttps://doodles.patrickweaver.net/url-hosted-bookmarklet/#name=%E2%8F%B0&code=js_%7BsetTimeout(()%20%3D%3E%20%7Bdocument.body.innerHTML%20%3D%20%60%3Cdiv%20id%3D%22empty%22%3E%3Cspan%20id%3D%22text%22%3EGoodbye%3C%2Fspan%3E%3C%2Fdiv%3E%60%3Bconst%20d%20%3D%20%600123456789ABCDEF%60%3Bconst%20color%20%3D%20()%20%3D%3E%5B%22R%22%2C%20%22G%22%2C%20%22B%22%5D.reduce((p%2C%20c)%20%3D%3E%20p%20%2B%20d.split(%22%22)%5BMath.floor(Math.random()%20*%2016)%5D%2C%22%23%22)%3Bdocument.body.style.backgroundColor%20%3D%20color()%3Bconst%20e%20%3D%20document.getElementById(%60empty%60)%3Be.style.height%20%3D%20%60100vh%60%3Be.style.width%20%3D%20%60100vw%60%3Be.style.paddingTop%20%3D%20%60200px%60%3Be.style.textAlign%20%3D%20%60center%60%3Bconst%20t%20%3D%20document.getElementById(%60text%60)%3Bt.style.fontSize%20%3D%20%6080px%60%3Bt.style.fontWeight%20%3D%20%60bold%60%3Bt.style.color%20%3D%20%60orange%60%3B%7D%2C%20((Math.random()%20*%20(4.5%20*%2060))%20%2B%2030)%20*%201000)%7D&description=A%20bookmarklet%20that%20clears%20the%20page%20with%20the%20message,%20%22Goodbye%22%20at%20a%20randomly%20generated%20time%20between%2030%20seconds%20and%205%20minutes%20in%20the%20future.
    </a>
  </p>
</blockquote>

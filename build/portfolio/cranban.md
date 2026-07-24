---
layout: layouts/portfolioProject.hbs
name: Cranban
cover_image_url: /images/portfolio/cranban/cranban.png
cover_image_alt: A screenshot of the Cranban app
short_description: A local-first kanban board for collaborating with robots
start_date: 2026-07-07
end_date: 2026-07-23
project_url: https://doodles.patrickweaver.net/cranban/
source_url: https://github.com/patrickweaver/cranban
status: Complete
tags:
  - ai
  - tools
  - react
images:
  - /images/portfolio/cranban/cranban.png
  - /images/portfolio/cranban/first-design.png
  - /images/portfolio/cranban/kanban-txt.png
  - /images/portfolio/cranban/demo-board.png
  - /images/portfolio/cranban/start-page.png
  - /images/portfolio/cranban/boring.png
  - /images/portfolio/cranban/dark-boring.png
---

Cranban is a local-first kanban board that stores data in a markdown file. It syncs updates in real time to the local file, and syncs changes from the local file to the UI. The markdown file is human readable, and the UI is rendered in a browser, but works offline.

Cranban was used to build itself using Claude code, and the history can be seen in the `cranban.md` file in the [GitHub repo](https://github.com/patrickweaver/cranban/blob/main/cranban.md). It is a great tool for collaborating with robots because the UI is designed for humans to use, and the markdown file is designed to be read and updated by coding agents.

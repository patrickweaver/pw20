---
layout: layouts/blogPost.hbs
title: Cranban is a tool for collaborating with robots
date: 2026-07-24
cover_image_url: /images/portfolio/cranban/cranban.png
cover_image_alt: A screenshot of the Cranban app
social_image_url: https://www.patrickweaver.net/images/portfolio/cranban/cranban.png
social_image_alt: A screenshot of the Cranban app
tags:
---

I recently created [Cranban](https://doodles.patrickweaver.net/cranban/), a local-first kanban board that stores the board’s data in a markdown file on your computer. Its got the drag and drop simplicity of your favorite project management tools, but a very simple backend (just text!) that is easy to keep in source control, and update by hand when you want to. Because all of the data is on your computer in a simple format, it’s a great tool to use with coding agents. A coding robot can see the current state of the project in a format that works well for a coding robot, and you can see and move around lists and cards, a format that works well for humans.

Over the years I’ve tried using various project management tools for personal projects. For smaller projects that was often a `todo.txt` file saved with the codebase, and for bigger projects I usually set up a simple kanban board, usually Trello until the Free plan became more limited. Recently when working with coding agents, a web-based kanban board seemed counterproductive, it would be just another layer I would have to translate to the robot. Of course there are tools like MCP, but for personal projects it seemed like unnecessary complexity.

There was always my reliable `todo.txt` files, but I wondered if there could be a better tool that would give me the high-level project view of a kanban board, while keeping the simplicity and robot-accessibility of a `.txt` file, and decided to build one, and use it to iterate on itself.

<figure>

<div style="text-align: center;">
  <img src="/images/portfolio/cranban/kanban-txt.png" alt="A screenshot of Text Edit with the following text visible: # txt.kanban  ## To Do  1. Load file in web app 2. Write to file from web app 3. Allow editing .txt file directly  ## In Progress   ## Done" style="max-width: min(700px, 100%); margin: 0 auto;" />
</div>

<figcaption>The first `.txt` file I created</figcaption>

</figure>

I created a file called `kanban.txt` and added some markdown headings like “To Do”, “In Progress”, and “Done”. Then I added a list under “To Do” with a few simple boilerplate setup tasks, and prompted Claude to create a kanban style UI from the items in the file. It quickly put together a kanban style React UI of the lists I had written in `kanban.txt`. With a working prototype, I got busy writing cards in the UI, and simplified my prompt to, “Do the next item in @kanban.txt, ask me for any clarifying information you need.”

It figured out moving cards to “Done” as it completed them, and it continued to work on features as I moved them into the “To Do” column (this almost feels not worth including in this post, because of course it did). You can see the completed cards now in [`cranban.md` on GitHub](https://github.com/patrickweaver/cranban/blob/main/cranban.md) (I decided a `.md` file would be better than `.txt` so that it was viewable in Markdown preview utilities).

<figure>

<div style="text-align: center;">
  <img src="/images/portfolio/cranban/first-design.png" alt="A prototype of Cranban with a white background and minimal styles. There is one card in To Do and 4 in Done." style="max-width: min(700px, 100%); margin: 0 auto;" />
</div>

<figcaption>An early prototype of Cranban, before it was renamed</figcaption>

</figure>

My mind tends to pick up on similar sounding syllables and the name “Cranban” popped into my head midway through iterating on features. I added cards for adding visual themes, with the default being a reddish-pinkish-cranberry, and renaming the project.

Along the way I looked into if anyone else had had the same idea, but didn’t find anything with the same mix of human-centered UI, robot-centered plaintext files, and local-first setup that would gracefully become something useful, even with just the datastore itself. The most similar seem to be Colin Devroe’s [Signboard](https://github.com/cdevroe/signboard), and Alex Gavrilescu’s [Backlog.md](https://github.com/MrLesk/Backlog.md) but they store each card in a separate markdown file, and have other features like MCP connections or a TUI. These seem much less approachable in a human-editing-a-file way, but probably more scalable for larger projects. There is Cline’s [Kanban](https://github.com/cline/kanban) that is designed to replace your IDE or agent to be your control panel for the project, which, given how fast tools change these days, seems like it could become outdated quickly.

<figure>

<div style="text-align: center;">
  <img src="/images/portfolio/cranban/start-page.png" alt="A screenshot of the Cranban app's start page with 4 recent files listed." style="max-width: min(700px, 100%); margin: 0 auto;" />
</div>

<figcaption>The Cranban start page showing recently opened boards.</figcaption>

</figure>

The more I worked with Cranban the more I liked the simplicity. Other similar projects run a local webserver for the web UI, but because with Cranban the web UI is designed only for the human to use, while an agent uses the markdown file directly it doesn’t require anything fancy to make updates (I did add a explanation prompt to the default boilerplate starter file, but I think that most agents in 2026 could figure it out without one).

Because the datastore is local, the UI can run anywhere, try it out now on my [Doodles website](https://doodles.patrickweaver.net/cranban/), or clone the [project on GitHub](https://github.com/patrickweaver/cranban) and run it locally, or deploy it anywhere.

<figure>

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: center; gap: 1rem;">
  <img src="/images/portfolio/cranban/demo-board.png" alt="The Cranban demo board with one card in To Do, one card in In Progress, and one card in Done." style="max-width: 300px; min-width: 0;" />
  <img src="/images/portfolio/cranban/demo-board-md.png" alt="The Cranban demo board as Markdown." style="max-width: 300px; min-width: 0;" />
</div>

<figcaption>The Cranban demo board shown in the UI and a Markdown file</figcaption>

</figure>

Cranban will of course never compete with something like Jira or Trello that can sync in real time to other human collaborators, but for a project that lives on one computer it’s a great way to plan ideas, and get the productivity magic of moving little cards around. Because personally, I always feel more accomplished when I’m moving little cards around!

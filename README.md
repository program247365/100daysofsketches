# [100 Days of Sketches](https://100daysofsketches.com/)

> Let's see if I can sketch for 100 days...

## Current Workflow to Post New Sketch

1. Draw in Linea Sketch on iPad, with the pencil tool ANYTHING. Export to dropbox folder \_Sketches.
2. Copy that file to new folder e.g. `src/pages/02`, and put it and name it for day e.g. `02.jpg`
3. Create new index.md in that folder with the following template

```
---
title: Day 1
date: '2018-10-31T02:59:03.408Z'
---

![Day 1](./01.jpg)
```

4. Insert the right date using `new Date().toUTCString()` and putting it in the `date`
5. Look at it with `npm run dev`
6. Post it with `npm run deploy`

## TODO

- Make posting more seemless!!
- Make it so homepage shows off the images! (make it a gallery for X recent posts, etc, or page right from there?)

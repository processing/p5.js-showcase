# GSOC p5js Showcase 2022 Wrap-up

This is a wrap-up post for GSOC 2022, detailing the work done on the 2022 p5.js showcase! View the WIP showcase [here] (https://processing.github.io/p5.js-showcase/#/).

## What Still Needs to be Finished

- Minor bug fixes (missing images)
- Minor CSS changes
- Adding translations for Spanish, Korean, and Chinese.
- Transferring the showcase to the official URL under the p5.js website
- Officially launching the showcase on the Processing Foundation's social media accounts.

## The Process

Since the showcase has been an annual GSOC project since 2019, the initial codebase was already set up, along with the general layout and structure of the website. So, my job was to create an open call for this year's submissions for the showcase, add those to the website, and revamp the visuals if necessary.

First, I created an open call for submissions and posted it on the Processing Foundation's various social media accounts (Instagram and Twitter), and as well, individually emailed professors and other contacts at universities/coding communities to share it with interested students. You can view the instagram post [here] (https://www.instagram.com/p/CgQAi4IvzH5/). This year's theme was "CONNECT", and encouraged coders, with an emphasis on coders new to the community, to submit p5.js works that interpreted the theme in some way. Some people submitted works that had actual elements of connection embedded into their work while others interpreted the theme in a more abstract, community-based way, such as works that brought together a community.

Then, I wireframed what this year's site would look like. I was mostly focused on improving the layout to be more accessible (better color contrast and more intuitive user interface), as well as making the page more responsive through some CSS changes. I also wanted make the visuals consistent with my open call graphics, so I added some cute little handdrawn graphics around the website. View the wireframes [here] (https://www.figma.com/file/viSTKMTuiufFDfGwRzdcLO/p5.js-showcase?node-id=0%3A1&t=DgyWz7qpLriZ3ecf-1).

Now, into the coding changes. My wonderful mentor Rachel Lim first combined the showcase repos from the past years into one consolidated codebase, which is the one that I coded from. The issue in the past years was that there was no singular repo where all of the showcases existed, instead all of the repos were forked from the 2020 showcase. Rachel fixed this issue with the new repo, and as well, created 2022 files to start coding in. She also added an "Archive" page on the website where users can easily navigate through the past showcases. You can view all of her changes [here] (https://github.com/processing/p5.js-showcase/commit/27ff7876c61cc6a09e45a14f5623609d1fe130cb).

Then, I cloned the repository and began coding. Since the codebase was so large, I often had trouble figuring out which files corresponded with which pages, so Rachel created documentation of each file's purpose, for which you can view the commit [here] (https://github.com/processing/p5.js-showcase/commit/0d28b543b0aaf865a08fdffbc4d6d50c367eb992) and the actual documentation [here] (https://github.com/processing/p5.js-showcase/blob/main/docs/file_location_documentation.md). This was incredibly helpful and will definitely be an important file for future contributors to streamline their coding experience.

I first began with the landing page, named "Foreword" on the website. I decided to change up the appearance of it, adding in my own graphics and updating the text/visualizations to match this year's theme and data collected. This was mostly a lot of CSS. You can view the commit [here] (https://github.com/processing/p5.js-showcase/commit/9251da21408956ab4a8488f70deda216501fd57e).

Then I added all of the information from the open call into the translation_2022.json file to update all the information on the site to the correct 2022 edition. This included filling out their name, details about the project, and details about their process. You can view the commit [here] (https://github.com/processing/p5.js-showcase/commit/6f25aca20b90ca9e5d822583ebb4a332d8797552).

After that, it was time for a lot of CSS changes to make the site more responsive and accessible. I mostly changed a lot of the padding, margins, font sizes, and image sizes to "vh" or "vw" instead of "px." I also changed up some of the text layout and colors for improved user accesibility (color contrast). You can view these commits [here] (https://github.com/processing/p5.js-showcase/commit/0d6a1ffee9cca74e5a20bb988784ba893f5ffaf5), [here] (https://github.com/processing/p5.js-showcase/commit/a6191346ecff45d1a9df396e9ed357b3012481df), and [here] (https://github.com/processing/p5.js-showcase/commit/632271d8ede0a6ee0fcda310ead7eb20575a2606).

Then, I added in all the photos from the open call into the Gallery and Gallery Details pages. View the commit [here] (https://github.com/processing/p5.js-showcase/commit/af24e6dd5337eb0f9591103f688cc506b317975b).

Lastly, because the translations are not yet finished, I added a disclaimer banner asking for contributors! View the commit [here] (https://github.com/processing/p5.js-showcase/commit/69475a690320b327a21051fe976b8cacacec845d).

## Thoughts for Future Contributors

This took far longer than I initially thought for a few reasons:

- I didn't know React.js before this, so I had to learn it.
- The codebase is extremely extensive, so it's hard to navigate.
- There were more CSS bug fixes than I thought, which took up a lot of time.
- Adding all of the contributors' information took the most time because I copied and pasted everything.

Some fixes to consider to streamline future contributors' experiences:

- Moving the CSS to Bootstrap to simplify and streamline it.
- Cleaning up the codebase for easier navigation (mostly renaming files and classes/IDs to be more descriptive).
- Researching into a simpler way of importing all of the contributor data (their images and information from the Google Form).
- Clarifying what we are asking for in terms of alt text and pronouns on the Google Form (for open call). Many people misunderstood the question and didn't provide pronouns, so in this case, I would suggest adding an example of what pronouns are – a simple "ex. she/her" would suffice. As well, many people didn't understand how to write alt text, so again, I would recommend adding a short example on the Google Form.
- Potentially creating an image slideshow in the Gallery Details pages to showcase more images of each work. This was something I was trying to do, but unfortunately ran out of time to finish. It also seems that coding an image slideshow in React is harder than I thought.
- Potentially creating an Artists page to briefly spotlight all of the artists (I had asked for photos of everyone in the Open Call with the intention to create such a page, but I also ran out of time!).
- Potentially implementing a monthly rotating p5 sketch showcase on the Foreword page. So instead of the landing image, we rotate through a different p5 sketch every month after the showcase is launched, to show more people's work!

## Closing Thoughts

Overall, this was a very cool opportunity and I want to thank the Processing Foundation team, my mentor Rachel Lim, the past contributors Connie and Katie, Qianqian Ye, and everyone else who has helped me throughout this journey. I learned a lot of React and the showcase as well, and I really appreciated every second of it. Although it was a much longer than expected process, I'm glad that it's finally almost finished and I'm super excited to share it with everyone! To any future contributors reading this, good luck and I'm excited to see what else you have in store for the showcase in the future!

Annie <3

## Purpose 
The Pulse is a student news platform built for All Saints Catholic College. The purpose of the product is to give students a centralised, easy to use space to read school news, track house competition standings, view the canteen menu, and submit their own stories for publication. The platform replaces fragmented communication channels such as noticeboards and newsletters with a single, always accessible web interface.
## Design Decisions
Single Page Application
Early in development it became clear that traditional multi-page navigation would not meet the no reload requirement. The solution was to manage all page transitions through a central JavaScript state object and a go() function that accepts a page identifier as a parameter. Every section of the site lives in the DOM at all times and is shown or hidden based on the current state. This keeps navigation instant and eliminates any loading between pages.
Storing Data Internally
Rather than relying on a backend database, all content including articles, house points, and the canteen menu is stored directly in JavaScript Arrays and Object Dictionaries inside the file. This was a deliberate choice to keep the product self-contained and deployable on GitHub Pages without any server configuration. It also directly satisfies the data structure requirements of the task.
## Layout and Responsiveness
The header navigation stays fixed at the top on desktop. On mobile it collapses into a hamburger menu. This was important because students access the site on both school computers and their phones. All styling uses CSS custom properties and media queries with no external framework, keeping the codebase clean and within the free .

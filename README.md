"# Mini LMS

A simple learning management system built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build step.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Features

- 6 courses, 20 lessons, each course with a quiz
- Hash-based routing: `#/`, `#/course/<id>`, `#/course/<id>/<lesson>`, `#/course/<id>/quiz`, `#/progress`
- Search and level filtering on the course list
- Lesson completion tracking persisted in `localStorage` (key `mini-lms:progress:v1`)
- Per-course and overall progress bars, plus a progress overview page
- Keyboard accessible, light/dark aware, reduced-motion aware

## Files

| File | Purpose |
| --- | --- |
| `index.html` | App shell: top bar, search, filters, mount point |
| `styles.css` | All styling, CSS custom properties for theming |
| `app.js` | Course data, router, rendering, progress state |
" 

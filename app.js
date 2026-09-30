const COURSES = [
  {
    id: 'html-css',
    title: 'HTML & CSS Foundations',
    level: 'beginner',
    minutes: 180,
    description: 'Build semantic pages and style them with modern CSS layout.',
    lessons: [
      {
        id: 'doc-structure',
        title: 'Document structure',
        time: 12,
        body: [
          'Every HTML page starts with a doctype, a <html> element, a <head> for metadata, and a <body> for visible content.',
          'Use landmarks such as <header>, <nav>, <main>, <section>, and <footer> so assistive technology can navigate your page.',
          'Prefer one <h1> per page and never skip heading levels.'
        ]
      },
      {
        id: 'semantic-html',
        title: 'Semantic HTML',
        time: 15,
        body: [
          'Semantic elements carry meaning: <button> is an action, <a> navigates, and <div> is a generic container.',
          'Add labels to inputs with <label for="id"> and group related controls in a <fieldset>.',
          'Meaningful markup improves accessibility with almost no extra effort.'
        ]
      },
      {
        id: 'box-model',
        title: 'The box model',
        time: 14,
        body: [
          'Every element is a box with content, padding, border and margin.',
          'box-sizing: border-box makes declared widths include padding and border, which keeps layouts predictable.',
          'Margins between siblings collapse; use flex gap to avoid surprises.'
        ]
      },
      {
        id: 'flexbox',
        title: 'Flexbox and Grid',
        time: 22,
        body: [
          'Flexbox distributes space along one axis; Grid lays out rows and columns in two dimensions.',
          'auto-fit with minmax() creates responsive card grids without media queries.',
          'Prefer gap over margin-based spacing so gaps never collapse.'
        ]
      }
    ],
    quiz: [
      {
        question: 'Which element should trigger navigation to another page?',
        options: ['<div>', '<button>', '<a href="...">', '<span>'],
        answer: 2
      },
      {
        question: 'What does box-sizing: border-box change?',
        options: [
          'It makes width include padding and border',
          'It removes the margin',
          'It centers the element',
          'It hides overflow'
        ],
        answer: 0
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    level: 'beginner',
    minutes: 210,
    description: 'Core language features: values, functions, arrays and the DOM.',
    lessons: [
      {
        id: 'values',
        title: 'Values and types',
        time: 14,
        body: [
          'JavaScript has primitive types: string, number, boolean, null and undefined.',
          'typeof reports the runtime type; null needs a special check because of a historical bug.',
          'Prefer const, and use let only when a binding must be reassigned.'
        ]
      },
      {
        id: 'functions',
        title: 'Functions and scope',
        time: 18,
        body: [
          'Function declarations are hoisted; arrow functions are expressions assigned to a variable.',
          'Each function creates its own scope, and closures let inner functions keep access to outer variables.',
          'Return a value explicitly; otherwise the function returns undefined.'
        ]
      },
      {
        id: 'arrays',
        title: 'Arrays and iteration',
        time: 20,
        body: [
          'map transforms, filter selects, and reduce folds a list into a single value.',
          'Array methods return new arrays, so you can chain them safely.',
          'forEach runs a side effect for every element and returns undefined.'
        ]
      },
      {
        id: 'dom',
        title: 'The DOM',
        time: 24,
        body: [
          'querySelector returns the first matching element, querySelectorAll returns a NodeList.',
          'Add behaviour with addEventListener instead of inline handlers.',
          'Render from a data array and keep the DOM in sync with state.'
        ]
      }
    ],
    quiz: [
      {
        question: 'Which array method returns a new array of matching items?',
        options: ['forEach', 'filter', 'push', 'splice'],
        answer: 1
      },
      {
        question: 'What does addEventListener do?',
        options: [
          'Registers a handler for an event',
          'Runs code immediately',
          'Replaces the element',
          'Polls until true'
        ],
        answer: 0
      }
    ]
  },
  {
    id: 'git',
    title: 'Git and GitHub Workflow',
    level: 'intermediate',
    minutes: 150,
    description: 'Commits, branches, merges and pull requests without the fear.',
    lessons: [
      {
        id: 'commits',
        title: 'Commits that explain themselves',
        time: 12,
        body: [
          'A commit is a snapshot plus a message describing why the change happened.',
          'Stage only the files a change needs: git add -p reviews hunks interactively.',
          'Write the subject in the imperative mood, under 72 characters.'
        ]
      },
      {
        id: 'branches',
        title: 'Branching and merging',
        time: 16,
        body: [
          'A branch is a movable pointer to a commit, so creating one is nearly free.',
          'Merge brings a branch back into the target; fast-forward happens when nothing diverged.',
          'Resolve conflicts by editing the file, then git add and git commit.'
        ]
      },
      {
        id: 'remote',
        title: 'Remotes and pull requests',
        time: 18,
        body: [
          'origin is the default name for a remote; fetch downloads refs, pull also merges.',
          'A pull request proposes changes for review and runs CI checks.',
          'Rebase your topic branch onto the base branch before opening a PR.'
        ]
      }
    ],
    quiz: [
      {
        question: 'What does git fetch do?',
        options: [
          'Downloads refs from a remote without merging',
          'Merges the remote branch',
          'Deletes the remote',
          'Commits staged files'
        ],
        answer: 0
      }
    ]
  },
  {
    id: 'accessibility',
    title: 'Accessible Interfaces',
    level: 'intermediate',
    minutes: 120,
    description: 'Keyboard support, focus management, colour and screen reader basics.',
    lessons: [
      {
        id: 'keyboard',
        title: 'Keyboard first',
        time: 15,
        body: [
          'Every interactive element must be reachable and operable with Tab, Enter and Space.',
          'Never remove focus outlines without replacing them with a visible alternative.',
          'Modal dialogs should trap focus and close on Escape.'
        ]
      },
      {
        id: 'aria',
        title: 'ARIA and roles',
        time: 18,
        body: [
          'The first rule of ARIA is not to use ARIA: native elements already carry semantics.',
          'role, aria-label and aria-live add information only when HTML cannot express it.',
          'Live regions announce dynamic content such as status messages.'
        ]
      },
      {
        id: 'contrast',
        title: 'Colour and contrast',
        time: 14,
        body: [
          'Body text should meet a contrast ratio of at least 4.5:1 against its background.',
          'Never use colour as the only signal; pair it with text, icons or shape.',
          'Support user zoom and respect prefers-reduced-motion.'
        ]
      }
    ],
    quiz: [
      {
        question: 'What is the first rule of ARIA?',
        options: [
          'Do not use ARIA when a native element will do',
          'Always add role="button"',
          'Add aria-label to everything',
          'Avoid using HTML'
        ],
        answer: 0
      }
    ]
  },
  {
    id: 'node',
    title: 'Node.js and APIs',
    level: 'advanced',
    minutes: 240,
    description: 'Server-side JavaScript, routing, and consuming REST APIs.',
    lessons: [
      {
        id: 'event-loop',
        title: 'Event loop and async',
        time: 20,
        body: [
          'Node runs JavaScript on a single thread and moves I/O work to a libuv thread pool.',
          'async/await schedules continuation on the microtask queue after the current stack unwinds.',
          'Unhandled promise rejections crash the process by default; handle errors explicitly.'
        ]
      },
      {
        id: 'http',
        title: 'HTTP servers and routes',
        time: 22,
        body: [
          'A request has a method, a path and headers; a response has a status, headers and a body.',
          'Match methods as well as paths, and answer unknown routes with 404 JSON.',
          'Set Content-Type and Cache-Control headers deliberately.'
        ]
      },
      {
        id: 'rest',
        title: 'Consuming REST APIs',
        time: 20,
        body: [
          'fetch returns a promise; check response.ok before parsing JSON.',
          'Add timeouts with AbortController so a hung request cannot block forever.',
          'Retry idempotent requests with exponential backoff and jitter.'
        ]
      }
    ],
    quiz: [
      {
        question: 'Why check response.ok before parsing a fetch result?',
        options: [
          'To confirm a 2xx status before treating the body as data',
          'To cache the response',
          'To set a cookie',
          'To speed up the request'
        ],
        answer: 0
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing JavaScript',
    level: 'advanced',
    minutes: 165,
    description: 'Unit tests, DOM testing and keeping suites fast and trustworthy.',
    lessons: [
      {
        id: 'why',
        title: 'What to test',
        time: 15,
        body: [
          'Test behaviour and contracts, not private implementation details.',
          'Follow the arrange, act, assert shape so failures are easy to read.',
          'Prefer one clear assertion per case over a bundle of incidental checks.'
        ]
      },
      {
        id: 'dom-tests',
        title: 'Testing the DOM',
        time: 20,
        body: [
          'Render into a detached document and query the result to assert structure.',
          'Await user interactions and let the update settle before asserting.',
          'Reset DOM and state between tests to keep them independent.'
        ]
      },
      {
        id: 'coverage',
        title: 'Coverage and flaky tests',
        time: 16,
        body: [
          'Coverage highlights untested paths; it is a signal, not a goal.',
          'Quarantine flaky tests instead of retrying them forever.',
          'Keep the suite green and fast, because a red suite gets ignored.'
        ]
      }
    ],
    quiz: [
      {
        question: 'What is the usual shape of a unit test?',
        options: [
          'Arrange, act, assert',
          'Import, export, run',
          'Given, when, then only for databases',
          'Build, test, deploy'
        ],
        answer: 0
      }
    ]
  }
];

const STORAGE_KEY = 'mini-lms:progress:v1';

const state = {
  route: { name: 'courses', courseId: null, lessonId: null },
  query: '',
  level: 'all',
  completed: {}
};

const els = {
  app: document.getElementById('app'),
  search: document.getElementById('search'),
  levelFilter: document.getElementById('level-filter'),
  reset: document.getElementById('reset-progress'),
  toast: document.getElementById('toast')
};

const esc = (value) =>
  String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    state.completed = raw ? JSON.parse(raw) : {};
  } catch {
    state.completed = {};
  }
  if (typeof state.completed !== 'object' || state.completed === null) state.completed = {};
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.completed));
  } catch {
    /* storage unavailable: progress stays in memory for this session */
  }
}

const isDone = (courseId, lessonId) => Boolean(state.completed[courseId] && state.completed[courseId][lessonId]);

function setDone(courseId, lessonId, done) {
  const course = state.completed[courseId] || (state.completed[courseId] = {});
  if (done) {
    course[lessonId] = true;
  } else {
    delete course[lessonId];
  }
  saveProgress();
}

function courseProgress(course) {
  const done = course.lessons.filter((l) => isDone(course.id, l.id)).length;
  const total = course.lessons.length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function overallStats() {
  const totalLessons = COURSES.reduce((sum, c) => sum + c.lessons.length, 0);
  let done = 0;
  let started = 0;
  let completedCourses = 0;
  for (const course of COURSES) {
    const p = courseProgress(course);
    done += p.done;
    if (p.done > 0) started += 1;
    if (p.done === p.total) completedCourses += 1;
  }
  return {
    totalLessons,
    done,
    started,
    completedCourses,
    pct: totalLessons ? Math.round((done / totalLessons) * 100) : 0
  };
}

let toastTimer;
function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove('show'), 1800);
}

function progressRow(pct) {
  return `<div class="progress-row">
    <div class="bar"><span style="width:${pct}%"></span></div>
    <span class="pct">${pct}%</span>
  </div>`;
}

function matchesFilter(course) {
  const levelOk = state.level === 'all' || course.level === state.level;
  const q = state.query.trim().toLowerCase();
  const textOk =
    !q ||
    course.title.toLowerCase().includes(q) ||
    course.description.toLowerCase().includes(q) ||
    course.lessons.some((l) => l.title.toLowerCase().includes(q));
  return levelOk && textOk;
}

function renderCourses() {
  const stats = overallStats();
  const list = COURSES.filter(matchesFilter);

  els.app.innerHTML = `
    <div class="page-head">
      <h1>Courses</h1>
      <p>Pick up where you left off, or start something new.</p>
    </div>

    <section class="stats">
      <div class="card stat"><div class="value">${stats.completedCourses}/${COURSES.length}</div><div class="label">Courses done</div></div>
      <div class="card stat"><div class="value">${stats.done}/${stats.totalLessons}</div><div class="label">Lessons done</div></div>
      <div class="card stat"><div class="value">${stats.started}</div><div class="label">In progress</div></div>
      <div class="card stat"><div class="value">${stats.pct}%</div><div class="label">Overall</div></div>
    </section>

    ${
      list.length
        ? `<div class="grid">${list.map(courseCard).join('')}</div>`
        : `<div class="card empty">No courses match your search or filter.</div>`
    }
  `;
}

function courseCard(course) {
  const p = courseProgress(course);
  const finished = p.done === p.total;
  return `
    <a class="card course" href="#/course/${course.id}" data-link>
      <div>
        <span class="badge ${course.level}">${esc(course.level)}</span>
        ${finished ? ' <span class="badge done">completed</span>' : ''}
      </div>
      <h3>${esc(course.title)}</h3>
      <p class="desc">${esc(course.description)}</p>
      ${progressRow(p.pct)}
      <div class="meta">
        <span class="badge">${course.lessons.length} lessons</span>
        <span class="badge">${course.minutes} min</span>
      </div>
    </a>
  `;
}

function renderProgress() {
  const stats = overallStats();
  els.app.innerHTML = `
    <div class="page-head">
      <h1>My Progress</h1>
      <p>Progress is stored in this browser only.</p>
    </div>

    <section class="stats">
      <div class="card stat"><div class="value">${stats.pct}%</div><div class="label">Overall</div></div>
      <div class="card stat"><div class="value">${stats.done}</div><div class="label">Lessons done</div></div>
      <div class="card stat"><div class="value">${stats.completedCourses}</div><div class="label">Courses done</div></div>
    </section>

    <div class="card">
      ${
        COURSES.length
          ? COURSES.map((course) => {
              const p = courseProgress(course);
              return `
                <a class="progress-item" href="#/course/${course.id}" data-link>
                  <div class="info">
                    <h3>${esc(course.title)}</h3>
                    ${progressRow(p.pct)}
                  </div>
                  <span class="badge">${p.done}/${p.total}</span>
                </a>
              `;
            }).join('')
          : ''
      }
    </div>
  `;
}

function renderCourse(courseId, lessonId) {
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) {
    renderNotFound();
    return;
  }

  const lesson =
    course.lessons.find((l) => l.id === lessonId) ||
    course.lessons.find((l) => !isDone(course.id, l.id)) ||
    course.lessons[0];

  const p = courseProgress(course);
  const idx = course.lessons.findIndex((l) => l.id === lesson.id);
  const done = isDone(course.id, lesson.id);
  const next = course.lessons[idx + 1];

  els.app.innerHTML = `
    <a class="crumb" href="#/" data-link>&larr; All courses</a>

    <div class="card detail-head">
      <div>
        <span class="badge ${course.level}">${esc(course.level)}</span>
        <span class="badge">${course.minutes} min total</span>
        ${p.done === p.total ? ' <span class="badge done">course complete</span>' : ''}
      </div>
      <h1>${esc(course.title)}</h1>
      <p class="desc">${esc(course.description)}</p>
      ${progressRow(p.pct)}
    </div>

    <div class="layout">
      <div class="card panel">
        <h2>${esc(lesson.title)}</h2>
        <div class="content">
          ${lesson.body.map((para) => `<p>${esc(para)}</p>`).join('')}
        </div>
        <div class="actions">
          <button class="btn primary" type="button" data-action="toggle" data-course="${course.id}" data-lesson="${lesson.id}">
            ${done ? 'Mark as not done' : 'Mark as done'}
          </button>
          ${
            next
              ? `<a class="btn" href="#/course/${course.id}/${next.id}" data-link>Next lesson &rarr;</a>`
              : `<a class="btn" href="#/course/${course.id}/quiz" data-link>Go to quiz &rarr;</a>`
          }
        </div>
        <p class="feedback">Lesson ${idx + 1} of ${course.lessons.length} &middot; about ${lesson.time} min</p>
      </div>

      <aside class="card panel">
        <h2>Lessons</h2>
        <ul class="lesson-list">
          ${course.lessons
            .map(
              (l) => `
            <li>
              <a class="lesson ${l.id === lesson.id ? 'active' : ''} ${isDone(course.id, l.id) ? 'done' : ''}" href="#/course/${course.id}/${l.id}" data-link>
                <span class="tick">&#10003;</span>
                <span class="title">${esc(l.title)}</span>
                <span class="time">${l.time}m</span>
              </a>
            </li>`
            )
            .join('')}
          <li>
            <a class="lesson ${lesson.id === 'quiz' ? 'active' : ''}" href="#/course/${course.id}/quiz" data-link>
              <span class="tick">&#10003;</span>
              <span class="title">Quiz</span>
              <span class="time">${course.quiz.length} q</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  `;
}

function renderQuiz(courseId) {
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) {
    renderNotFound();
    return;
  }
  const p = courseProgress(course);

  els.app.innerHTML = `
    <a class="crumb" href="#/course/${courseId}" data-link>&larr; Back to ${esc(course.title)}</a>

    <div class="card detail-head">
      <h1>${esc(course.title)} &mdash; quiz</h1>
      <p class="desc">${course.quiz.length} questions. Complete all lessons first if you want the full picture.</p>
      ${progressRow(p.pct)}
    </div>

    <div class="card panel" id="quiz">
      ${course.quiz
        .map(
          (q, i) => `
        <div class="quiz-block" data-q="${i}">
          <div class="quiz-question">${i + 1}. ${esc(q.question)}</div>
          ${q.options
            .map(
              (opt, o) => `<button class="option" type="button" data-q="${i}" data-o="${o}">${esc(opt)}</button>`
            )
            .join('')}
          <div class="feedback"></div>
        </div>`
        )
        .join('')}
      <div class="actions">
        <button class="btn" type="button" data-action="check">Check answers</button>
        <button class="btn" type="button" data-action="restart">Try again</button>
      </div>
    </div>
  `;
}

function renderNotFound() {
  els.app.innerHTML = `
    <div class="page-head"><h1>Not found</h1></div>
    <div class="card empty">
      That page does not exist. <a href="#/" data-link>Back to courses</a>
    </div>
  `;
}

function render() {
  const { name, courseId, lessonId } = state.route;
  if (name === 'course') {
    if (lessonId === 'quiz') renderQuiz(courseId);
    else renderCourse(courseId, lessonId);
  } else if (name === 'progress') {
    renderProgress();
  } else {
    renderCourses();
  }
  setActiveNav(name);
}

function setActiveNav(name) {
  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === name);
  });
}

function parseHash() {
  const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
  if (parts[0] === 'course' && parts[1]) {
    return { name: 'course', courseId: parts[1], lessonId: parts[2] || null };
  }
  if (parts[0] === 'progress') return { name: 'progress', courseId: null, lessonId: null };
  return { name: 'courses', courseId: null, lessonId: null };
}

function navigate() {
  state.route = parseHash();
  render();
  els.app.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

document.addEventListener('click', (event) => {
  const actionEl = event.target.closest('[data-action]');
  if (actionEl) {
    const { action, course, lesson } = actionEl.dataset;

    if (action === 'toggle') {
      const nowDone = !isDone(course, lesson);
      setDone(course, lesson, nowDone);
      render();
      toast(nowDone ? 'Lesson completed' : 'Lesson marked as not done');
      return;
    }

    if (action === 'check' || action === 'restart') {
      const quizEl = document.getElementById('quiz');
      const blocks = quizEl.querySelectorAll('.quiz-block');
      if (action === 'restart') {
        blocks.forEach((block) => {
          block.querySelectorAll('.option').forEach((b) => b.classList.remove('correct', 'wrong'));
          block.querySelector('.feedback').textContent = '';
        });
        return;
      }
      let score = 0;
      blocks.forEach((block, i) => {
        const question = state.route.courseId
          ? COURSES.find((c) => c.id === state.route.courseId).quiz[i]
          : null;
        const chosen = block.querySelector('.option.picked');
        block.querySelectorAll('.option').forEach((b) => b.classList.remove('correct', 'wrong'));
        if (!question) return;
        if (chosen && Number(chosen.dataset.o) === question.answer) {
          score += 1;
          block.querySelectorAll('.option')[question.answer].classList.add('correct');
          block.querySelector('.feedback').textContent = 'Correct.';
        } else {
          block.querySelectorAll('.option')[question.answer].classList.add('correct');
          if (chosen) chosen.classList.add('wrong');
          block.querySelector('.feedback').textContent = 'Not quite — the highlighted answer is correct.';
        }
      });
      toast(`Score: ${score} / ${blocks.length}`);
    }
  }

  const option = event.target.closest('.option[data-o]');
  if (option) {
    const block = option.closest('.quiz-block');
    block.querySelectorAll('.option').forEach((b) => b.classList.remove('picked'));
    option.classList.add('picked');
  }
});

els.search.addEventListener('input', (event) => {
  state.query = event.target.value;
  if (state.route.name === 'courses') render();
});

els.levelFilter.addEventListener('change', (event) => {
  state.level = event.target.value;
  if (state.route.name === 'courses') render();
});

els.reset.addEventListener('click', () => {
  state.completed = {};
  saveProgress();
  render();
  toast('Progress reset');
});

window.addEventListener('hashchange', navigate);

loadProgress();
navigate();

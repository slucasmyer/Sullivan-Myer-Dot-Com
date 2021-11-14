var projectList = [
  {
    title: 'digiYo',
    hash: 'digiyo-showcase',
    links: [
      {
        href: 'https://github.com/slucasmyer/digiyo-showcase',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Jul 2021 - Present',
    category: 'ongoing',
    tags: ['Blockchain', 'NodeJS', 'SQL'],
    headline: true,
    img: {
      src: '/static/projects/digiyo.png',
      alt: 'digiYo',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `NFT minting, purchase, and trading platform built on the <a href="https://onflow.org" target="_blank">Flow Blockchain</a> by <a href="https://dapperlabs.com" target="_blank">Dapper Labs</a>.`,
  },
  {
    title: 'This Website Itself',
    hash: 'this-website-itself',
    links: [
      {
        href: 'https://github.com/slucasmyer/My-Website',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Dec 2020 - present',
    category: 'ongoing',
    tags: ['JavaScript', 'HTML', 'CSS', 'Framework Free'],
    headline: true,
    img: {
      src: '/static/projects/amazed.jpg',
      alt: 'You are already here.',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `Take a look around. It'll be way more informative than the source code.`,
  },
  {
    title: 'TSLA from $TSLA',
    hash: 'tsla-from-tsla',
    links: [
      {
        href: 'https://github.com/slucasmyer/TSLA-from-Twitter',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Apr - Jun 2020',
    category: 'completed',
    tags: ['Twitter API','NLP', 'LSTM'],
    headline: true,
    img: {
      src: '/static/projects/tsla.jpg',
      alt: 'TSLA from $TSLA',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `Chasing alpha? Well it turns out you won't find it using the model I generated here. I suspect that's in-part because large financial institutions already include this information in their models and are lightyears ahead of me in terms of volume and processing capacity (not to mention refinement and alternative data sources). Nevertheless, it was a fun and instructive endeavor.`,
  },
  {
    title: 'Sudoku Solver',
    hash: 'sudoku-solver',
    links: [
      {
        href: 'https://github.com/slucasmyer/Sudoku-Solver',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Dec 2020 - Jan 2021',
    category: 'completed',
    tags: ['NP-Complete', 'Exact Cover', 'Algorithm X'],
    img: {
      src: '/static/projects/sudoku.jpg',
      alt: 'Sudoku Solver',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `This is probably the project I'm proudest of to-date. Not because it's difficult to write a brute-force solver (you can find that here too), but because formulating sudoku as an exact cover problem and implementing a modified version of algorithm x (I used a dictionary instead of dancing links) stretched my capacity for abstraction beyond what I'd previously thought myself capable of. Handles nxn, not just 3x3.`,
  },
  {
    title: 'NFL Draft Predictions',
    hash: 'nfl-draft-predictions',
    links: [
      {
        href: 'https://github.com/slucasmyer/NFL-Draft-Predictions',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Mar - Apr 2020',
    category: 'completed',
    tags: ['SKLearn', 'XGBoost', 'Feature Engineering'],
    img: {
      src: '/static/projects/nfl.jpg',
      alt: 'NFL Draft Predictions',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `I completed this project during my time at Flatiron School, and it was really my first fully-autonomous data sceince project. While not my greatest work, the resultant model was more robust and accurate than anticipated. I plan on updating this one in advance of the 2021 NFL Draft, incorporating features beyond just combine performance metrics, such as twitter sentiment and college production. I'm looking forward to seeing what it can do with these additions.`,
  },
  {
    title: 'Gess',
    hash: 'gess',
    links: [
      {
        href: 'https://github.com/slucasmyer/Gess',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Aug - Sep 2020',
    category: 'completed',
    tags: ['OOP', 'Error Handling', 'Game Design'],
    img: {
      src: '/static/projects/gess.jpg',
      alt: 'Gess',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `Pretty self-explanatory, and also pretty crude from a UX/UI standpoint, but it was the first program I wrote that could be properly called 'interactive'. Definitely could be improved by integrating a real GUI, but a milestone for sure.`,
  },
  {
    title: 'COVID-Clustering',
    hash: 'covid-clustering',
    links: [
      {
        href: 'https://github.com/slucasmyer/COVID-Clustering',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Mar - Apr 2020',
    category: 'completed',
    tags: ['LDA', 'WordCloud', 'NLP'],
    headline: true,
    img: {
      src: '/static/projects/covid.jpg',
      alt: 'COVID-Clustering',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `This project, like a few others here, was one I completed as part of my bootcamp experience, but unlike those others, this one was particularly personal, as I and several members of my cohort had just gotten covid ourselves, and the bootcamp was actually forced to transition from in-person to online administration as the world began to shut down. O ya, and it was the first time I'd been exposed to any NLP methods, so that was cool.`,
  },
  {
    title: 'Hash-and-Heap',
    hash: 'hash-and-heap',
    links: [
      {
        href: 'https://github.com/slucasmyer/Hash-and-Heap',
        text: 'GitHub',
        icon: 'github',
      },
    ],
    timeframe: 'Aug - Sep 2020',
    category: 'completed',
    tags: ['Data Structures', 'Min-Heap', 'Hash-Map'],
    img: {
      src: '/static/projects/shrooms.jpg',
      gifSrc: '/static/projects/',
      alt: 'Hash-and-Heap',
    },
    videoSrc: '/static/projects/',
    backupVideoSrc: '/static/projects/',
    body: `This was a surpringly fun project given that it doesn't provide any insight or add any functionality that doesn't already exist in nearly all high-level languages. Having to build commonly used data structures from scratch really gave me an appreciation of what's going on under the hood, and also gave me an understanding of when it's appropriate to use certain data structures. I was also taking a course on computer architecture and assembly language at the time which was quite synergistic.`,
  },
];

const headingEl = document.createElement('li');
headingEl.innerText = 'Sections on this page:';
headingEl.className = 'heading';
const navSectionsEl = document.getElementById('jump-to-sections');
const navCurrSectionName = document.getElementById('current-section');
const navCurrSectionNum = document.querySelector(
  '#jump-to-section-toggle > span'
);
const navCurrSectionToggle = document.getElementById('jump-to-section-toggle');

const observerOptions = {
  root: null,
  rootMargin: '-60% 0px -40% 0px',
  threshold: 0,
};

let observer = null;

const getSectionHeader = (id) => {
  return document.querySelector(`#${id} h2`).innerText
};

const setCurrSection = (sectionIndex, sectionIds) => {
  navCurrSectionNum.innerText = sectionIndex + 1;
  navCurrSectionName.innerText = getSectionHeader(sectionIds[sectionIndex]);
  setSectionColor(sectionIndex);

  const sectionLinks = navSectionsEl.querySelectorAll('a');
  sectionLinks.forEach((link) => {
    if (link.hash === '#' + sectionIds[sectionIndex]) {
      const sectionColor = getComputedStyle(
        document.getElementById(sectionIds[sectionIndex])
      ).getPropertyValue('--section-color');

      link.style.color = sectionColor;
    } else {
      link.style.color = 'var(--body-color)';
    }
  });
};

const setSectionColor = (sectionIndex) => {
  navCurrSectionToggle.style.backgroundPositionY = 50 * sectionIndex + '%';
};

const setNavSections = (sectionIds) => {
  navCurrSectionToggle.removeAttribute('hidden');
  navSectionsEl.appendChild(headingEl);
  sectionIds.forEach((id) => {
    const link = document.createElement('a');
    const listItem = document.createElement('li');
    link.innerText = getSectionHeader(id);
    link.href = '#' + id;
    listItem.appendChild(link);
    navSectionsEl.appendChild(listItem);

    setCurrSection(0, sectionIds);
  });
};

const clearNavSections = () => {
  navSectionsEl.innerHTML = '';
  navCurrSectionName.innerText = '';
  navCurrSectionToggle.setAttribute('hidden', '');
};

const observerCallback = (callback, sectionIds) => (entries) => {
  entries.forEach((change) => {
    const sectionIndex = sectionIds.findIndex((id) => id === change.target.id);
    if (change.isIntersecting) {
      setCurrSection(sectionIndex, sectionIds);
    }
    callback && callback(change.isIntersecting, sectionIndex);
  });
};

const setSectionObserver = (sectionIds, callback) => {
  setNavSections(sectionIds);

  observer = new IntersectionObserver(
    observerCallback(callback, sectionIds),
    observerOptions
  );
  sectionIds.forEach((id) => observer.observe(document.getElementById(id)));
};

var scrollIntoView = (event) => {
  const target = event.target;

  if (
    target.tagName === 'A' &&
    target.origin === location.origin &&
    target.hash
  ) {
    event.preventDefault();
    const el = document.querySelector(target.hash);
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

var index = () => {
  const sectionIds = ['inbrief-section', 'iteach-section', 'icreate-section'];

  setSectionObserver(sectionIds, (isIntersecting, sectionIndex) => {
    const allStripes = document.querySelectorAll('#line-accents > *');
    const selectedStripe = document.querySelector(
      `#line-accents > :nth-child(${sectionIndex + 1})`
    );
    if (isIntersecting) {
      for (let stripe of allStripes) {
        if (stripe === selectedStripe) {
          stripe.classList.add('active');
        } else {
          stripe.classList.remove('active');
        }
      }
    } else if (sectionIndex === 0) {
      selectedStripe.classList.remove('active');
    }
  });

  function VideoEl(elementId) {
    this.el = document.getElementById(elementId);
    this.source = document.querySelector(`#${elementId} > source:first-of-type`);
    this.backupSource = document.querySelector(
      `#${elementId} > source:nth-of-type(2)`
    );
  }

  const manageProjects = () => {
    const firstVid = new VideoEl('projects-1');
    const secondVid = new VideoEl('projects-2');
    const titleEl = document.getElementById('projects-title');
    const bodyEl = document.getElementById('projects-body');
    const diceEl = document.getElementById('dice-container');

    let unusedIndices = [];
    const resetUnusedIndices = () =>
      (unusedIndices = [...Array(projectList.length).keys()]);
    resetUnusedIndices(); // set unused indices to list of indices up to projects.length
    unusedIndices.shift(); // remove index 0, since this is the initial index shown

    const newIndex = () => {
      if (unusedIndices.length === 0) resetUnusedIndices();

      const randIndex = Math.floor(Math.random() * unusedIndices.length);
      return unusedIndices.splice(randIndex, 1)
    };

    const setUpVideoEl = (video, index) => {
      video.source.src = projectList[index].videoSrc;
      video.backupSource.src = projectList[index].backupVideoSrc;
      video.el.poster = projectList[index].img.src;
      video.el.load();
    };

    let index = newIndex();
    setUpVideoEl(secondVid, index);

    const setProjectInfo = (nextVid, currVid) => {
      // wait for dice to hit the computer
      setTimeout(() => {
        titleEl.innerText = projectList[index].title;
        bodyEl.innerHTML = projectList[index].body;

        index = newIndex();
        nextVid.el.classList.add('visible');
        currVid.el.classList.remove('visible');
        setUpVideoEl(currVid, index);
      }, 400);
    };

    const triggerDiceRoll = () => {
      diceEl.classList.remove('animated');
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          diceEl.classList.add('animated');
        });
      });
    };

    let showFirst = false;
    return () => {
      triggerDiceRoll();
      const nextVid = showFirst ? firstVid : secondVid;
      const currVid = showFirst ? secondVid : firstVid;
      setProjectInfo(nextVid, currVid);
      showFirst = !showFirst;
    }
  };

  const nextProject = manageProjects();

  const clickListener = (event) => {
    if (event.target.id === 'generate-random-project') {
      nextProject();
    }
    scrollIntoView(event);
  };
  document.addEventListener('click', clickListener);

  // cleanup
  return () => {
    document.removeEventListener('click', clickListener);
  }
};

var work = () => {
  const slideOutEl = document.getElementById('details-slide-out');
  if (location.hash) {
    slideOutEl.className = '';
  }

  const clickListener = (event) => {
    const { target } = event;
    if (
      target.tagName === 'A' &&
      target.origin === location.origin &&
      target.hash
    ) {
      event.preventDefault();
      slideOutEl.className = '';
      location.replace(target.href);
    }

    if (target.id === 'close-btn') {
      event.preventDefault();
      slideOutEl.className = 'closed';
      history.pushState('', document.title, location.pathname);
    }
  };

  const sectionIds = ['ongoing-section', 'complete-section'];

  setSectionObserver(sectionIds);

  // lazily load videos once tab is visited
  setTimeout(() => {
    const videoEls = document.querySelectorAll('[data-route="work"] video');
    for (let videoEl of videoEls) {
      videoEl.load();
      videoEl.play();
    }
  }, 0);

  document.addEventListener('click', clickListener);

  //cleanup
  return () => {
    slideOutEl.className = 'closed';
    document.removeEventListener('click', clickListener);
  }
};

const routeScripts = {
  '/': index,
  '/work': work,
};
const emptyScript = () => () => {};

let prevPathname = location.pathname;
let prevRouteCleanup = (routeScripts[prevPathname] || emptyScript)();

/*--- handle page transitions ---*/
const animDurationMS = 800;

const pathToRoute = (path) => (path === '/' ? 'index' : path.slice(1));
const setVisiblePage = (pathname) => {
  if (pathname === prevPathname) return

  const currPageEl = document.querySelector(
    `main[data-route="${pathToRoute(pathname)}"]`
  );
  const prevPageEl = document.querySelector(
    `main[data-route="${pathToRoute(prevPathname)}"]`
  );
  if (currPageEl) {
    currPageEl.removeAttribute('hidden');
    currPageEl.classList.add('slideIn');
    prevPageEl.classList.add('slideOut');
    prevPathname = pathname;

    setTimeout(() => {
      prevPageEl.setAttribute('hidden', '');
      prevPageEl.classList.remove('slideOut');
      currPageEl.classList.remove('slideIn');
    }, animDurationMS);
  }
  // TODO: 404 page for invalid links
  clearNavSections();
  prevRouteCleanup();
  prevRouteCleanup = (routeScripts[pathname] || emptyScript)();
};

const navDashedLine = document.getElementById('dashed-line-container');
const moveDashedLine = () => {
  // only trigger animation once the previous animation is done
  if (navDashedLine.classList.contains('move')) return

  navDashedLine.classList.add('move');
  setTimeout(() => {
    navDashedLine.classList.remove('move');
  }, animDurationMS);
};

/*--- handle links and navigation ---*/
const primaryNavEl = document.getElementById('primary-nav');
const jumpToSectionEl = document.getElementById('jump-to-sections');

const setActiveNavLink = (pathname) => {
  const primaryNavLinks = primaryNavEl.querySelectorAll('a');
  primaryNavLinks.forEach((link) => {
    if (link.pathname === pathname) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

const toggleNavEl = (toggleEl, toggleOffEl) => {
  if (toggleEl.classList.contains('toggled')) {
    toggleEl.classList.remove('toggled');
  } else {
    toggleEl.classList.add('toggled');
    toggleOffEl.classList.remove('toggled');
  }
};

document.addEventListener('click', (event) => {
  const { target } = event;
  if (target.id === 'primary-nav-toggle') {
    toggleNavEl(primaryNavEl, jumpToSectionEl);
  }
  if (target.id === 'jump-to-section-toggle') {
    toggleNavEl(jumpToSectionEl, primaryNavEl);
  }
  if (target.tagName === 'A' && target.origin === location.origin) {
    event.preventDefault();

    primaryNavEl.classList.remove('toggled');
    jumpToSectionEl.classList.remove('toggled');

    if (target.pathname !== prevPathname)
      history.pushState({}, null, target.href);
    setVisiblePage(target.pathname);
    setActiveNavLink(target.pathname);
    moveDashedLine();
  }
});

onpopstate = () => {
  setVisiblePage(location.pathname);
};
export type Project = {
  slug: string
  title: string
  category: string
  year: string
  status: string
  headline: string
  summary: string
  details: string[]
  stack: string[]
  highlights: { label: string; value: string }[]
  features: { title: string; body: string }[]
  links: { live: string; repo: string }
  accent: 'neon' | 'plasma'
}

export const profile = {
  name: 'Michael Avwerosuo Okeme',
  firstName: 'Michael',
  lastName: 'Okeme',
  monogram: 'MA',
  roles: [
    'Frontend Developer',
    'React Developer',
    'Fullstack Instructor',
    'UI Engineer',
  ],
  tagline: 'I design and build fast, futuristic web interfaces.',
  location: '',
  availability: 'Open to new work',
  bio: [
    'I am a Computer Science graduate of the Federal University of Petroleum Resources, Effurun, building user-facing web products, My work sits at the front of the stack: responsive layouts, component architecture, and the small interaction details that make an interface feel fast rather than merely work.',
    'I currently teach fullstack development at Starline Tech, where I build JavaScript, TypeScript, HTML, CSS and REST API curricula and mentor learners through to their first deployed applications. Two years of ICT support and systems maintenance before that taught me to diagnose problems quickly and keep things running. I am looking for frontend or fullstack work where craft and clean code are treated as non-negotiable.',
  ],
  stats: [
    { value: '1', label: 'Flagship project' },
    { value: 'React', label: 'Primary stack' },
    { value: '2:1', label: 'B.Sc. Computer Science' },
    { value: 'Open', label: 'To new work' },
  ],
}

export const contactLinks = [
  {
    label: 'Email',
    handle: 'avwerosuokeme@gmail.com',
    href: 'mailto:avwerosuokeme@gmail.com',
    icon: 'mail',
  },
  {
    label: 'GitHub',
    handle: 'github.com/jasinMiles',
    href: 'https://github.com/jasinMiles',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    handle: 'Not linked yet',
    href: 'https://linkedin.com/in/TODO-handle',
    icon: 'linkedin',
  },
  {
    label: 'X',
    handle: 'Not linked yet',
    href: 'https://x.com/TODO-yourhandle',
    icon: 'x',
  },
] as const

export const skillGroups = [
  {
    title: 'Languages',
    code: 'LANG',
    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'PHP', 'Python'],
  },
  {
    title: 'Frontend',
    code: 'FE',
    items: ['React', 'Context API', 'Hooks', 'useMemo / useCallback', 'Component Composition'],
  },
  {
    title: 'Styling',
    code: 'UI',
    items: ['Tailwind CSS', 'Flexbox & Grid', 'Responsive Design', 'Transitions & Animation'],
  },
  {
    title: 'Tooling',
    code: 'OPS',
    items: ['Vite', 'Git & GitHub', 'PostgreSQL', 'REST APIs', 'Chrome DevTools'],
  },
] as const

export const marqueeKeywords = [
  'React',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'Context API',
  'Hooks',
  'useMemo',
  'Component Composition',
  'Responsive UI',
  'REST APIs',
  'PostgreSQL',
  'Cross-Browser Testing',
  'Lazy Loading',
  'Accessible Markup',
]

export const experience = [
  {
    period: 'Jul 2026 — Present',
    role: 'Fullstack Development Instructor',
    org: 'Starline Tech',
    body: 'Design and deliver a fullstack curriculum covering JavaScript, TypeScript, HTML5, CSS3 and REST API integration. Guide learners through building, debugging and deploying real-world applications, and give the technical feedback that keeps their projects moving.',
  },
  {
    period: 'Feb 2023 — Oct 2023',
    role: 'Frontend Development Intern',
    org: 'Olumycosoft',
    body: 'Built responsive, user-friendly web interfaces and improved application responsiveness across devices and browsers. Integrated frontend applications with backend APIs, working alongside developers and UI/UX designers on feature delivery.',
  },
] as const

export const projects: Project[] = [
  {
    slug: 'softbuy',
    title: 'SoftBuy',
    category: 'E-commerce storefront',
    year: '2026',
    status: 'Built',
    headline: 'A storefront that stays fast at every tap.',
    summary:
      'SoftBuy is a single-page storefront for consumer tech and lifestyle goods. Browse by category, sort the catalogue, save items to a wishlist and manage everything from a slide-out cart drawer.',
    details: [
      'Eleven components compose the storefront: promo bar, sticky header, hero carousel, category tiles, flash-sale countdown, trust bar, product grid, testimonials, newsletter, footer and cart drawer.',
      'State runs through a single React Context provider instead of a store library — cart actions are wrapped in useCallback, and subtotal and item count are derived with useMemo, so every component reads from one source of truth without prop drilling.',
    ],
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Context API'],
    highlights: [
      { label: 'Role', value: 'Sole developer' },
      { label: 'Components', value: '11 built' },
      { label: 'Catalogue', value: '12 products' },
    ],
    features: [
      {
        title: 'Product catalogue',
        body: 'Twelve products across five categories, with category filtering, four sort orders and a wishlist toggle, all derived through a memoised filter pipeline.',
      },
      {
        title: 'Cart drawer',
        body: 'Slide-out cart with quantity controls, line removal and a live subtotal, driven by a Context provider that keeps its actions memoised.',
      },
      {
        title: 'Timed sections',
        body: 'The hero carousel auto-advances every six seconds while the hero and flash-sale countdowns tick on intervals that are cleaned up on unmount.',
      },
      {
        title: 'Responsive layout',
        body: 'The product grid reflows from two columns on phones to four on desktop, with a mobile nav drawer, sticky blurred header and lazy-loaded imagery.',
      },
    ],
    links: {
      live: 'https://rad-dango-5749fb.netlify.app',
      repo: 'https://github.com/jasinMiles/softBuy',
    },
    accent: 'neon',
  },
]

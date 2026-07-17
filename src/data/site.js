// Single source of truth for posts and projects.
// Used by the homepage, the writing index and the RSS feed.

export const posts = [
  {
    title: 'A real calendar server in your test suite',
    date: '2026-07-17',
    href: '/writing/radicale-pytest/',
    excerpt: 'Run Radicale in-process as a pytest fixture: real CalDAV integration tests, no Docker.',
  },
  {
    title: 'Agent memory: what exists, what breaks, and what nobody measures',
    date: '2026-07-14',
    href: '/writing/agent-memory/',
    excerpt: 'A field guide to memory for LLM agents, with the benchmark numbers fact-checked.',
  },
];

export const projects = [
  {
    title: 'Polyglot Booking Agent',
    tag: 'Python · voice agents',
    cover: 'polyglot',
    href: 'https://github.com/abiotov/polyglot-booking-agent',
    desc: 'Multilingual voice agent for appointment booking: deterministic scheduling engine, CalDAV as the single source of truth, FR/EN mid-call language switching, scenario-based evals.',
    links: [
      { label: 'GitHub', href: 'https://github.com/abiotov/polyglot-booking-agent' },
      { label: 'Related post', href: '/writing/radicale-pytest/' },
    ],
  },
  {
    title: 'Annuaire Bénin',
    tag: 'Python · data engineering',
    cover: 'annuaire',
    href: 'https://github.com/abiotov/annuaire-benin',
    desc: "Cleaning and deduplicating Benin's national business directory: ~500k raw rows into a validated, measured database (E.164 validation, record linkage, classification, economic atlas).",
    links: [
      { label: 'GitHub', href: 'https://github.com/abiotov/annuaire-benin' },
    ],
  },
];

# abiotov.github.io

Personal portfolio of **Etienne Tovimafa** — Applied AI Engineer.
Editorial / Swiss minimalist design, built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live: https://abiotov.github.io

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Writing & tweet embeds

Articles live in `src/pages/writing/` as `.mdx`. Tweets are embedded as real, clickable
cards via [`astro-embed`](https://astro-embed.netlify.app):

```mdx
import { Tweet } from 'astro-embed';

<Tweet id="https://twitter.com/user/status/123" />
```

## Credits

- Starship IFT-5 photo © Steve Jurvetson, licensed under CC BY 2.0.

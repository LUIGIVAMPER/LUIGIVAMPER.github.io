# Jianwen Lyu — Research Portfolio

Personal academic site, built with [Astro](https://astro.build) and deployed to GitHub Pages at https://luigivamper.github.io.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where to edit content

| What | File(s) |
| --- | --- |
| Name, statement, links, education, interests, service, skills | `src/data/profile.ts` |
| Research projects (cards + `/projects/<id>/` pages) | `src/content/projects/*.md` |
| Publications | `src/content/publications/*.md` |
| News | `src/content/news/*.md` (one file per item) |
| Headshot, project figures/videos, CV | `public/images/`, `public/images/projects/`, `public/cv/` |

- A project's `cover` can be an image or a short `.mp4`/`.webm` loop (add a `poster` still image).
- Set `hasPage: true` on a project to generate its detail page from the Markdown body.
- Leave a link empty or omit it to hide it; only real, public links should be listed.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages
(repository Settings → Pages → Source: **GitHub Actions**).

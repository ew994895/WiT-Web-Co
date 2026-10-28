# WiT Web Co.

The official website for WiT Web Co., Ethan Witkowski's independent web design
and development business in West Chester, Pennsylvania. The core offer is
custom business-owned websites, individually scoped projects, and optional
updates and care. No public prices or fixed packages are promised.

## Ownership-led website — October 28, 2026

The homepage introduces local service, portfolios/catalogs, and custom tools;
explains client-controlled accounts, source and licensing handoff on full
payment, third-party costs, and optional support; and links to a detailed
approach page. An interactive example switches between three explicitly
fictional business designs. The Work page includes WiT Lead Finder alongside
Witty Games, Roster IQ, and the personal portfolio. AI additions are deferred.

WiT Lead Finder is separately published at
https://wit-lead-finder.ejwit004.workers.dev/ with source at
https://github.com/ew994895/WiT-Lead-Finder. Its application files were published
byte-for-byte from the original local project, without product changes.
It still saves notes/statuses in the visitor's browser and relies on public
map services; this release does not create an authenticated marketing dashboard.
Its original README and UI still describe local use. Public hosting does not
change its data coverage, search limits, browser-local storage, or service terms.

The discarded local design direction was backed up to
`/private/tmp/wit-web-co-discarded-direction-20261028` before replacement.

## Dedicated pages — October 28, 2026

About (`/about`) and Let's Talk (`/contact`) have their own pages and metadata.
The homepage keeps short introductions linking to them. Navigation includes an
explicit Home link, and project CTAs go to `/contact`. Both new pages are in the
sitemap. Contact remains email-only; form delivery is still unconfigured.

## Hosting

This is an independent company website deployed directly to Cloudflare Workers,
not a ChatGPT Sites publication. The production Worker is `wit-web-co`; its
existing D1 database is configured in `vite.config.ts`. Do not reintroduce Sites
hosting configuration or use Sites publishing tools for this project.

Live website: https://witwebco.com

Both `witwebco.com` and `www.witwebco.com` are configured as custom domains on
the existing Worker. The `www` and original Workers addresses redirect to the
primary HTTPS address, preserving paths and query strings.

Before publishing, run `npm run verify`, commit the release changes, push to
GitHub, and verify the remote branch points to that commit. Then run
`npm run deploy:cloudflare` to publish the build from that same source revision.
Do not deploy uncommitted or unpushed application changes. Verify the live pages
after publishing. Deployment preserves dashboard-set variables and secrets.

## What's included

- Responsive landing page and mobile navigation
- Four independent projects: WiT Lead Finder, Witty Games, Roster IQ, and Witty’s Website
- Work, services, founder, process, privacy, and contact sections
- Skip navigation, keyboard-contained mobile menu, visible focus states, and reduced-motion support
- Canonical, social preview, sitemap, robots, structured data, and branded icon metadata
- Direct email contact and privacy-friendly event measurement; legacy inquiry storage retained with collection disabled
- Response security headers, a custom not-found experience, and automated production smoke tests
- Cloudflare-compatible production build powered by vinext

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Production check

```bash
npm run verify
```

## Contact inbox

**Current status:** the public contact section uses email links to `ejwit007@gmail.com`. These open the visitor’s email app; inbox delivery has not been tested in this release. Form collection is disabled (`INQUIRY_FORM_ENABLED = false`) and the endpoint returns an email instruction before accessing the database. Production form notifications are not configured. Formspree was recommended as an alternative that does not
require the owner to have a custom domain. Switching providers is pending the
user's verified Formspree endpoint; the implementation below still uses Resend.

Public contact links and form notification recipients use `ejwit007@gmail.com`,
defined in `app/lib/site.ts`. A stale `CONTACT_EMAIL` environment variable no
longer overrides this address.

The form saves inquiries to D1, then sends a plain-text notification through
Resend. The visitor's email is the Reply-To address. The notification includes
all collected inquiry fields. No email is sent back to the visitor automatically.

To enable delivery:

1. Create a Resend account and verify a sending domain you own.
2. Configure `RESEND_API_KEY` and `INQUIRY_FROM_EMAIL` as server-side runtime
   secrets on the hosting platform. Use a sender on that verified domain, not a
   Gmail sender. For local development, copy `.env.example` to `.env.local`.
3. Publish the configured site and submit a clearly labeled test inquiry.
4. Confirm receipt in `ejwit007@gmail.com` (including spam), verify every field,
   and check that Reply targets the test submitter.

Before re-enabling form collection, add server-side abuse protection, a way to review stored leads, and prove inbox delivery with a real test. Restore a form UI only after those checks pass. Database delivery status is
`email_accepted` when Resend accepts the message, or `notification_failed` when
it does not. Acceptance is not proof of inbox delivery; check Resend delivery
logs and the receiving inbox during the live test. Failed notifications are not
automatically retried, and this project has no owner inbox interface yet.

Automated tests use a mocked email provider; they do not send real messages.
Anonymous conversion events do not contain inquiry details.

## Launch follow-up

- The permanent domain is `witwebco.com`. Canonical URLs, structured data, robots, and sitemap share `SITE_URL` in `app/lib/site.ts`.
- Complete email provider setup and delivery verification before enabling form collection.
- Review each independent product separately before promoting it as a production service.
- Keep AI integrations scoped individually; no AI provider is called by this marketing website.

## Verification notes — October 16, 2026

Type checking, linting, the production build, and all nine tests pass. Desktop
and 390px phone layouts were checked in the browser, including project assets
and mobile navigation. Cloudflare tooling was updated to resolve a local
runtime/compatibility-date mismatch. Build output still includes framework
sourcemap and route-classification warnings.

The full npm audit reports 11 remaining development/build dependency findings
(7 high, 4 moderate), centered on glob matching through vinext/lint tooling and
Drizzle Kit's older esbuild toolchain. The production-only audit reports none.
These are unresolved dependency findings, not a completed security audit; do
not use forced package downgrades as a substitute for a tested tooling update.

## Project showcase

The homepage highlights Lead Finder and Witty Games and links to `/work`. The Work
page uses the original Witty Games favicon and game icons, Witty’s Website SVG
logo from its GitHub repository, and Roster IQ’s existing HTML/CSS wordmark.
The project panels link directly to their respective live sites. These are
personal projects, not claimed client commissions.

# WiT Web Co.

The official marketing site for WiT Web Co., an independent digital studio in
West Chester, Pennsylvania offering websites, custom web apps, AI integrations, and website care.

## Hosting

This is an independent company website deployed directly to Cloudflare Workers,
not a ChatGPT Sites publication. The production Worker is `wit-web-co`; its
existing D1 database is configured in `vite.config.ts`. Do not reintroduce Sites
hosting configuration or use Sites publishing tools for this project.

Live website: https://wit-web-co.ejwit004.workers.dev

Before publishing, run `npm run verify`, commit the release changes, push to
GitHub, and verify the remote branch points to that commit. Then run
`npm run deploy:cloudflare` to publish the build from that same source revision.
Do not deploy uncommitted or unpushed application changes. Verify the live pages
after publishing. Deployment preserves dashboard-set variables and secrets.

## What's included

- Responsive landing page and mobile navigation
- Three independent projects: Witty Games, Roster IQ, and Witty’s Website
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

- Confirm the permanent custom domain before changing `SITE_URL` in `app/lib/site.ts`; canonical, structured data, robots, and sitemap share that source.
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

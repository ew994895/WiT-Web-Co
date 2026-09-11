# WiT Web Co project instructions

- This is the user's independent company website, hosted directly on Cloudflare Workers.
- Publish requested releases using the existing `wit-web-co` Worker and Cloudflare D1 database through Wrangler (`npm run deploy:cloudflare` after verification).
- Do not publish through ChatGPT Sites, register a Sites project, or add Sites hosting configuration. The user explicitly chose direct Cloudflare hosting.
- Preserve existing Cloudflare domains, bindings, and runtime secrets when deploying.
- Before production deployment, run the required checks, commit the release changes, push to GitHub, and verify the remote branch points to that commit. Deploy the build from that exact source revision; do not deploy uncommitted or unpushed application changes.
- After publishing, verify the live website and report any remaining setup requirements separately from completed work.
- Keep public pricing and fixed package promises off the website; scope and quote projects individually.
- Public contact links and inquiry notifications go to `ejwit007@gmail.com`.
- Never claim email delivery is working until a real delivery test succeeds. Resend requires runtime credentials and a verified sender.
- Formspree has been recommended as the domain-free alternative; switching to it is pending the user's verified form endpoint. The current Resend connection is not configured in production.

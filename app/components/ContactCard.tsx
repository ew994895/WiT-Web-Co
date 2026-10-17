export function ContactCard({ contactEmail }: { contactEmail: string }) {
  return (
    <div className="contact-card">
      <p className="section-kicker">Start with an email</p>
      <h3>A rough idea is enough.</h3>
      <p>Tell me about your business and what you’d like to improve. I’ll reply with questions and a practical next step.</p>
      <a className="button button-dark" href={`mailto:${contactEmail}?subject=Let%E2%80%99s%20talk%20about%20a%20project`} data-track="email_click">Email Ethan <span aria-hidden="true">↗</span></a>
      <a className="contact-address" href={`mailto:${contactEmail}`} data-track="email_click">{contactEmail}</a>
      <p className="contact-helper">Opens your email app. You can also copy the address into your preferred inbox.</p>
      <div className="contact-checklist">
        <h4>Helpful details to include</h4>
        <ul><li>Your business and current website, if you have one</li><li>What you want to build or improve</li><li>Your ideal timing and any constraints</li></ul>
      </div>
      <p className="contact-helper">Every project is scoped and quoted individually. <a href="/privacy">How your information is handled</a>.</p>
    </div>
  );
}

export function ContactCard({ contactEmail }: { contactEmail: string }) {
  return (
    <div className="contact-card">
      <h2>Email Ethan</h2>
      <p><a className="text-link" href={`mailto:${contactEmail}?subject=Website%20project`} data-track="email_click">{contactEmail}</a></p>
      <h3>Helpful details to include</h3>
      <ul>
        <li>Your business name and location</li>
        <li>Your current website, if you have one</li>
        <li>What you’d like to build or improve and when you need it</li>
      </ul>
      <p>I’ll follow up with questions and quote the project individually once we’ve discussed the scope.</p>
    </div>
  );
}

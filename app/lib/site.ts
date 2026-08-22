export const PUBLIC_CONTACT_EMAIL = "ejwit007@outlook.com";

export function getContactEmail() {
  return process.env.CONTACT_EMAIL ?? PUBLIC_CONTACT_EMAIL;
}

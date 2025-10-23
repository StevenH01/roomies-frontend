export function normalizeEmail(raw: string) {
  const email = raw.trim().toLowerCase();
  const [local, dom] = email.split('@');
  return `${local.split('+')[0]}@${dom}`;
}
export function extractDomain(email: string) {
  return email.split('@')[1]?.toLowerCase();
}

/*
  SKK_AUTH_USERS — demo credential list for the client-side login gate.

  IMPORTANT: This is a STATIC SITE (GitHub Pages has no server/database),
  so this file ships to every visitor's browser in plain text. Anyone who
  opens dev tools or views source can read these values. This gate is
  therefore only a basic "keep casual visitors out" screen — NOT real
  security. Do not use it to protect sensitive personal data (this is why
  full minister contact details still live only in the Registrations /
  Verification pages behind this same light gate, not in anything more
  sensitive).

  To change the login/password, edit the list below and re-publish.
  For real protection (so credentials are never exposed client-side), the
  dashboard/verification pages would need to move behind an actual login
  service — e.g. GitHub Pages + Cloudflare Access, Netlify Identity, or
  Firebase Auth — instead of plain GitHub Pages hosting.
*/
var SKK_AUTH_USERS = [
  { user: "admin",       pass: "SKK-Admin2025!"  },
  { user: "secretariat", pass: "ChemiChemi2025"  }
];

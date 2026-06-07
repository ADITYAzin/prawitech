/** Maps service URL slugs to Contact form dropdown values. */
export const SERVICE_CONTACT_PARAMS = {
  "ai-automation": "AI Automation",
  "web-development": "Web Development",
  "graphic-design": "Graphic Design & Identity",
};

export function getContactHref(serviceSlug) {
  return `/contact?service=${serviceSlug}`;
}

export function getServiceFromContactParam(param) {
  if (!param || typeof param !== "string") return undefined;
  return SERVICE_CONTACT_PARAMS[param];
}

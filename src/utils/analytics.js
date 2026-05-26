import { track } from "@vercel/analytics";

export const ANALYTICS_EVENTS = {
  HERO_CTA_CLICK: "hero_cta_click",
  NAVBAR_LINK_CLICK: "navbar_link_click",
  CONTACT_EMAIL_CLICK: "contact_email_click",
  CONTACT_EMAIL_COPY: "contact_email_copy",
  CONTACT_LINK_CLICK: "contact_link_click",
  PROJECT_LIVE_CLICK: "project_live_click",
  PROJECT_CODE_CLICK: "project_code_click",
  PROJECT_PRIVATE_REPO_OPEN: "project_private_repo_open",
  BACKEND_NOTICE_CONTINUE: "backend_notice_continue",
};

export function trackEvent(eventName, properties = {}) {
  try {
    track(eventName, properties);
  } catch {
    // Analytics should never prevent the requested interaction.
  }
}

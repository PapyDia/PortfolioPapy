import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from "react-i18next";

import {
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../constants/animations";
import { portfolioData } from "../../data/portfolioData";
import Button from "../ui/Button";
import Container from "../ui/Container";
import ContactLinkCard from "../ui/ContactLinkCard";
import EmailContactDecor from "../ui/EmailContactDecor";
import SectionHeader from "../ui/SectionHeader";

function ContactSection() {
  const { t } = useTranslation();
  const { contact, identity } = portfolioData;
  const [copied, setCopied] = useState(false);
  const email = contact.email?.trim() ?? "";
  const activeLinks = (contact.links ?? []).filter((link) => link.href?.trim());
  const linkTranslations = t("contact.links", { returnObjects: true });
  const cardTranslations = t("contact.cards", { returnObjects: true });
  const translatedLinks = Array.isArray(linkTranslations)
    ? linkTranslations
    : [];
  const translatedCards = Array.isArray(cardTranslations)
    ? cardTranslations
    : [];

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 2200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [copied]);

  const handleCopyEmail = async () => {
    if (!email || !navigator.clipboard?.writeText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      aria-labelledby="contact-title"
      className="section-padding section-divider relative overflow-hidden focus:outline-hidden"
      id="contact"
      tabIndex={-1}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 size-72 -translate-x-1/2 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-72 rounded-full bg-[var(--app-glow-violet)] blur-3xl"
      />

      <Container>
        <motion.div
          className="glass-panel relative mx-auto max-w-6xl min-w-0 overflow-hidden p-4 text-center sm:p-8 lg:p-10"
          initial="hidden"
          variants={scaleIn}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full bg-[var(--app-glow-blue)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-10 size-56 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
          />

          <div className="relative min-w-0">
            <SectionHeader
              align="center"
              description={t("contact.description")}
              eyebrow={t("contact.eyebrow")}
              id="contact-title"
              title={t("contact.title")}
            />

            <div className="mt-8 grid min-w-0 gap-4 text-start sm:mt-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-start">
              <div className="premium-border relative isolate min-w-0 overflow-hidden rounded-card bg-[var(--app-contact-card-bg)] p-4 sm:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
                />
                <EmailContactDecor />

                <div className="relative z-10 min-w-0">
                  <div className="flex min-w-0 items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="max-w-full wrap-break-word text-sm font-semibold uppercase text-[color:var(--app-accent)]">
                        {t("contact.direct.eyebrow")}
                      </p>
                      <h3 className="mt-3 max-w-full wrap-break-word text-xl font-semibold leading-tight text-[color:var(--app-text-main)]">
                        {t("contact.direct.title")}
                      </h3>
                    </div>
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[color:var(--app-contact-card-border)] bg-[var(--app-surface)] text-[color:var(--app-text-main)] shadow-[var(--app-shadow-soft)] backdrop-blur-md sm:size-12"
                    >
                      <MdOutlineMail
                        aria-hidden="true"
                        className="size-6"
                        focusable="false"
                      />
                    </span>
                  </div>

                  {email ? (
                    <>
                      <p className="mt-3 max-w-full break-all text-sm leading-6 text-[color:var(--app-text-muted)]">
                        {email}
                      </p>
                      <div className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row">
                        <Button
                          aria-label={t("contact.aria.sendEmail", {
                            email,
                            name: identity.name,
                          })}
                          className="w-full sm:w-auto"
                          href={`mailto:${email}`}
                        >
                          {t("contact.actions.email")}
                        </Button>
                        <Button
                          aria-live="polite"
                          className="w-full sm:w-auto"
                          onClick={handleCopyEmail}
                          variant="secondary"
                        >
                          {copied
                            ? t("contact.actions.copiedEmail")
                            : t("contact.actions.copyEmail")}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-pretty-safe mt-4 max-w-full wrap-break-word rounded-2xl border border-[color:var(--app-contact-card-border)] bg-[var(--app-contact-card-bg)] px-4 py-3 text-sm leading-6 text-[color:var(--app-text-muted)]">
                      {t("contact.direct.emailUnavailable")}
                    </p>
                  )}
                </div>
              </div>

              {activeLinks.length > 0 && (
                <div className="grid w-full min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {activeLinks.map((link) => {
                    const translatedLink =
                      translatedLinks.find(
                        (item) => item.key?.toLowerCase() === link.label.toLowerCase(),
                      ) ?? {};

                    return (
                      <ContactLinkCard
                        ariaLabel={t("contact.aria.openLink", {
                          label: translatedLink.label ?? link.label,
                          name: identity.name,
                        })}
                        description={translatedLink.description ?? link.description}
                        href={link.href}
                        key={link.label}
                        label={translatedLink.label ?? link.label}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            <motion.div
              className="mt-8 grid min-w-0 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3"
              initial="hidden"
              variants={staggerContainer}
              viewport={viewportOnce}
              whileInView="visible"
            >
              {contact.cards.map((card, index) => {
                const translatedCard = translatedCards[index] ?? {};
                const titleId = `contact-card-${index + 1}-title`;

                return (
                  <motion.article
                    aria-labelledby={titleId}
                    className="premium-border min-w-0 rounded-card bg-[var(--app-contact-card-bg)] p-4 text-center sm:p-5 md:text-start"
                    key={card.title}
                    variants={staggerItem}
                  >
                    <h3
                      className="max-w-full wrap-break-word text-lg font-semibold leading-tight text-[color:var(--app-text-main)]"
                      id={titleId}
                    >
                      {translatedCard.title ?? card.title}
                    </h3>
                    <p className="text-pretty-safe mt-2 max-w-full wrap-break-word leading-7 text-[color:var(--app-text-muted)] sm:mt-3">
                      {translatedCard.description ?? card.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>

            <p className="text-pretty-safe mx-auto mt-6 max-w-2xl wrap-break-word text-sm leading-6 text-[color:var(--app-text-soft)] sm:mt-8">
              {t("contact.closing")}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactSection;

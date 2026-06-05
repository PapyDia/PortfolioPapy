import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../constants/animations";
import profilePhoto from "../../assets/images/profile.jpg";
import { portfolioData } from "../../data/portfolioData";
import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import ProfilePhoto from "../ui/ProfilePhoto";
import SectionHeader from "../ui/SectionHeader";
import SectionTransition from "../ui/SectionTransition";

function AboutSection() {
  const { t } = useTranslation();
  const { identity } = portfolioData;
  const paragraphs = t("about.paragraphs", { returnObjects: true });
  const highlights = t("about.highlights", { returnObjects: true });
  const aboutParagraphs = Array.isArray(paragraphs) ? paragraphs : [];
  const aboutHighlights = Array.isArray(highlights) ? highlights : [];

  return (
    <section
      aria-labelledby="about-title"
      className="section-padding section-divider relative overflow-hidden"
      id="about"
    >
      <Container>
        <motion.div
          initial="hidden"
          variants={fadeUp}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <SectionHeader
            align="center"
            description={t("about.description")}
            eyebrow={t("about.eyebrow")}
            id="about-title"
            title={t("about.title")}
          />
        </motion.div>

        <motion.div
          className="mt-10 grid min-w-0 gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:items-center"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <motion.div className="min-w-0" variants={staggerItem}>
            <GlassCard className="relative overflow-hidden p-5 sm:p-7 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 top-10 size-44 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 right-0 size-48 rounded-full bg-[var(--app-glow-violet)] blur-3xl"
              />

              <div className="relative mx-auto min-w-0 max-w-2xl space-y-5 text-start text-base leading-7 text-[color:var(--app-text-muted)] sm:space-y-6 sm:leading-8">
                {aboutParagraphs.map((paragraph) => (
                  <p
                    className="text-pretty-safe max-w-full wrap-break-word"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.aside
            aria-label={t("about.profileAriaLabel", { name: identity.name })}
            className="relative flex min-w-0 flex-col items-center"
            initial="hidden"
            variants={fadeUp}
            viewport={viewportOnce}
            whileInView="visible"
          >
            <ProfilePhoto
              className="relative z-10"
              alt={t("about.profileAlt")}
              src={profilePhoto}
            />

            <GlassCard className="relative -mt-8 w-full max-w-md overflow-hidden px-4 pb-5 pt-12 text-center sm:-mt-10 sm:px-6 sm:pb-6 sm:pt-14 lg:max-w-lg">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 size-40 rounded-full bg-[var(--app-glow-violet)] blur-3xl"
              />

              <div className="relative min-w-0">
                <p className="max-w-full wrap-break-word text-sm font-semibold uppercase text-[color:var(--app-accent)]">
                  {t("about.profileLabel")}
                </p>
                <h3 className="mt-3 max-w-full wrap-break-word text-xl font-semibold leading-tight text-[color:var(--app-text-main)] sm:mt-4 sm:text-2xl">
                  {identity.name}
                </h3>
                <p className="mt-2 max-w-full wrap-break-word text-[color:var(--app-text-muted)]">
                  {t("about.profileRole")}
                </p>

                <ul
                  aria-label={t("about.highlightsAriaLabel")}
                  className="m-0 mt-6 grid min-w-0 list-none gap-2 p-0 sm:mt-8 sm:grid-cols-2 sm:gap-3"
                >
                  {aboutHighlights.map((highlight) => (
                    <li
                      className="max-w-full rounded-2xl border border-[color:var(--app-chip-border)] bg-[var(--app-chip-bg)] px-3 py-2.5 text-center text-sm font-medium leading-snug wrap-break-word text-[color:var(--app-chip-text)] sm:px-4 sm:py-3"
                      key={highlight}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.aside>
        </motion.div>
      </Container>
      <SectionTransition variant="mixed" />
    </section>
  );
}

export default AboutSection;

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../constants/animations";
import { portfolioData } from "../../data/portfolioData";
import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import SectionHeader from "../ui/SectionHeader";

function SkillsSection() {
  const { t } = useTranslation();
  const { skills } = portfolioData;
  const groups = t("skills.groups", { returnObjects: true });
  const skillGroups = Array.isArray(groups) ? groups : [];

  return (
    <section
      aria-labelledby="skills-title"
      className="section-padding section-divider"
      id="skills"
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
            description={t("skills.description")}
            eyebrow={t("skills.eyebrow")}
            id="skills-title"
            title={t("skills.title")}
          />
        </motion.div>

        <motion.div
          className="mt-8 grid min-w-0 gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="visible"
        >
          {skills.groups.map((group, index) => {
            const translatedGroup = skillGroups[index] ?? group;
            const groupItems = Array.isArray(translatedGroup.items)
              ? translatedGroup.items
              : group.items;
            const titleId = `skill-group-${index + 1}-title`;
            const isFeatured = group.featured === true;
            const heading = (
              <div className="min-w-0">
                {isFeatured ? (
                  <p className="max-w-full wrap-break-word text-xs font-semibold uppercase text-[color:var(--app-accent)]">
                    {t("skills.featuredLabel")}
                  </p>
                ) : null}
                <h3
                  className={`max-w-full wrap-break-word font-semibold leading-tight text-[color:var(--app-text-main)] ${
                    isFeatured
                      ? "mt-3 text-xl sm:text-2xl"
                      : "text-lg sm:text-xl"
                  }`}
                  id={titleId}
                >
                  {translatedGroup.title}
                </h3>
                <p className="text-pretty-safe mt-2 max-w-full wrap-break-word leading-7 text-[color:var(--app-text-muted)] sm:mt-3">
                  {translatedGroup.description}
                </p>
              </div>
            );
            const itemList = (
              <ul
                aria-label={t("skills.groupAriaLabel", {
                  title: translatedGroup.title,
                })}
                className={`m-0 flex min-w-0 max-w-full list-none flex-wrap gap-2 p-0 ${
                  isFeatured
                    ? "justify-center lg:justify-start"
                    : "mt-5 justify-center sm:mt-6 sm:justify-start"
                }`}
              >
                {groupItems.map((item) => (
                  <li
                    className={`max-w-full rounded-button border px-2.5 py-1 text-center text-xs font-medium leading-snug wrap-break-word text-[color:var(--app-chip-text)] sm:px-3 sm:py-1.5 sm:text-sm ${
                      isFeatured
                        ? "border-[color:var(--app-chip-border)] bg-[var(--app-chip-bg)]"
                        : "border-[color:var(--app-chip-border)] bg-[var(--app-chip-bg)]"
                    }`}
                    key={`${group.title}-${item}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );

            return (
              <motion.div
                className={`min-w-0 ${
                  isFeatured ? "md:col-span-2 xl:col-span-4" : ""
                }`}
                key={group.title}
                variants={staggerItem}
              >
                <GlassCard
                  aria-labelledby={titleId}
                  as="article"
                  className={`flex h-full min-w-0 flex-col ${
                    isFeatured
                      ? "relative overflow-hidden border-[color:var(--app-featured-border)] bg-[var(--app-featured-surface)] px-5 py-6 sm:px-7 sm:py-7"
                      : ""
                  }`}
                >
                  {isFeatured ? (
                    <>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-20 left-1/4 size-44 rounded-full bg-[var(--app-glow-violet)] blur-3xl"
                      />
                      <div className="relative grid min-w-0 gap-6 lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-10">
                        {heading}
                        {itemList}
                      </div>
                    </>
                  ) : (
                    <>
                      {heading}
                      {itemList}
                    </>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default SkillsSection;

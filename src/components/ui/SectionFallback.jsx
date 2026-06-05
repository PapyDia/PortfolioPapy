import { useTranslation } from "react-i18next";

import Container from "./Container";

function SectionFallback() {
  const { t } = useTranslation();

  return (
    <div
      aria-label={t("accessibility.sectionLoading")}
      className="section-padding"
      role="status"
    >
      <Container>
        <div
          aria-hidden="true"
          className="glass-panel mx-auto h-32 max-w-3xl animate-pulse bg-[var(--app-surface)]"
        />
      </Container>
    </div>
  );
}

export default SectionFallback;

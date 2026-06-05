import { useTranslation } from "react-i18next";

import { portfolioData } from "../../data/portfolioData";
import Container from "../ui/Container";

function Footer() {
  const { t } = useTranslation();
  const { identity } = portfolioData;

  return (
    <footer className="border-t border-[color:var(--app-footer-border)] bg-[var(--app-footer-bg)] py-8">
      <Container>
        <div className="flex min-w-0 flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="min-w-0">
            <p className="max-w-full wrap-break-word text-sm font-semibold text-[color:var(--app-text-main)]">
              {identity.name}
            </p>
            <p className="mt-1 max-w-full wrap-break-word text-xs text-[color:var(--app-text-soft)]">
              {t("footer.role")}
            </p>
          </div>

          <p className="max-w-xl wrap-break-word text-sm text-[color:var(--app-text-soft)] md:text-center">
            {t("footer.copyright", {
              name: identity.name,
              year: new Date().getFullYear(),
            })}
          </p>

          <p className="flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 text-center text-xs font-medium uppercase text-[color:var(--app-accent)] md:justify-end">
            <span>React</span>
            <span aria-hidden="true">·</span>
            <span>Tailwind CSS</span>
            <span aria-hidden="true">·</span>
            <span>Vite</span>
            <span aria-hidden="true">·</span>
            <span>MongoDB</span>
            <span aria-hidden="true">·</span>
            <span>MySQL</span>
            <span aria-hidden="true">·</span>
            <span>Express</span>
            <span aria-hidden="true">·</span>
            <span>Git</span>
            <span aria-hidden="true">·</span>
            <span>Docker</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

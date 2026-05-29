import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import profilePhoto from "../../assets/images/profile.jpg";
import {
  mobileDrawerItemVariants,
  mobileDrawerListVariants,
  mobileDrawerVariants,
  mobileMenuVariants,
} from "../../constants/animations";
import { navigationItems } from "../../constants/navigation";
import { portfolioData } from "../../data/portfolioData";
import useScrollSpy from "../../hooks/useScrollSpy";
import Container from "../ui/Container";
import ThemeToggle from "../ui/ThemeToggle";

const navigationSectionIds = navigationItems.map((item) =>
  item.href.replace("#", ""),
);

function NavbarAvatar({ className = "", hasImage, onImageError }) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] text-sm font-bold text-[color:var(--app-text-main)] shadow-[var(--app-shadow-soft)] transition duration-300 group-hover:border-[color:var(--app-accent)] ${className}`}
    >
      {hasImage ? (
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top"
          decoding="async"
          loading="eager"
          onError={onImageError}
          src={profilePhoto}
        />
      ) : (
        "CM"
      )}
    </span>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAvatarImage, setHasAvatarImage] = useState(true);
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const activeSectionId = useScrollSpy(navigationSectionIds);

  // Close the mobile menu after an anchor click to keep navigation smooth.
  const closeMenu = () => setIsOpen(false);
  const dismissMenu = () => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 900px)");

    const handleDesktopChange = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
          isOpen
            ? "border-transparent bg-transparent shadow-none backdrop-blur-0"
            : "border-[color:var(--app-navbar-border)] bg-[var(--app-navbar-bg)] shadow-[var(--app-navbar-shadow)] backdrop-blur-xl"
        }`}
      >
        <Container className="flex min-h-16 items-center justify-between gap-2 max-[359px]:px-3">
          <a
            aria-label={`${portfolioData.identity.name}, retour à l'accueil`}
            className={`group inline-flex min-w-0 shrink-0 items-center gap-2 rounded-button py-2 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[color:var(--app-focus-ring)] min-[360px]:gap-3 ${
              isOpen ? "max-[899px]:hidden" : ""
            }`}
            href="#home"
            onClick={closeMenu}
            tabIndex={isOpen ? -1 : undefined}
          >
            <NavbarAvatar
              className="size-8 min-[360px]:size-9"
              hasImage={hasAvatarImage}
              onImageError={() => setHasAvatarImage(false)}
            />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="whitespace-nowrap text-sm font-semibold text-[color:var(--app-text-main)]">
                {portfolioData.identity.name}
              </span>
              <span className="whitespace-nowrap text-xs text-[color:var(--app-text-soft)]">
                Full-Stack JS
              </span>
            </span>
          </a>

          <div className="ml-auto flex shrink-0 items-center gap-1 min-[360px]:gap-2">
            <nav
              aria-label="Navigation principale"
              className="hidden items-center gap-0.5 min-[900px]:flex min-[1100px]:gap-1"
            >
              {navigationItems.map((item) => {
                const isActive = activeSectionId === item.href.replace("#", "");

                return (
                  <a
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-button border px-2 py-2 whitespace-nowrap text-sm font-medium transition min-[1100px]:px-3 ${
                      isActive
                        ? "border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] text-[color:var(--app-accent)] shadow-[var(--app-shadow-soft)]"
                        : "border-transparent text-[color:var(--app-text-muted)] hover:border-[color:var(--app-border)] hover:bg-[var(--app-navbar-link-hover-bg)] hover:text-[color:var(--app-text-main)]"
                    } focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[color:var(--app-focus-ring)]`}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <ThemeToggle />

            <button
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid size-9 shrink-0 touch-manipulation place-items-center rounded-full border border-[color:var(--app-border)] bg-[var(--app-surface)] text-[color:var(--app-text-main)] backdrop-blur-md transition hover:border-[color:var(--app-accent-border)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[color:var(--app-focus-ring)] min-[360px]:size-11 min-[900px]:hidden"
              onClick={() => setIsOpen((current) => !current)}
              ref={menuButtonRef}
              type="button"
            >
              <span
                aria-hidden="true"
                className="relative block size-4 min-[360px]:size-5"
              >
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-4 rounded-full bg-current transition duration-300 ease-out transform-gpu min-[360px]:w-5 ${
                    isOpen
                      ? "translate-y-0 rotate-45"
                      : "-translate-y-1.5 rotate-0 min-[360px]:-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-4 rounded-full bg-current transition duration-300 ease-out transform-gpu min-[360px]:w-5 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-4 rounded-full bg-current transition duration-300 ease-out transform-gpu min-[360px]:w-5 ${
                    isOpen
                      ? "translate-y-0 -rotate-45"
                      : "translate-y-1.5 rotate-0 min-[360px]:translate-y-2"
                  }`}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate="open"
            className="fixed inset-x-0 bottom-0 top-0 z-40 bg-[var(--app-navbar-mobile-overlay)] backdrop-blur-sm min-[900px]:hidden"
            exit="exit"
            initial="closed"
            onPointerDown={dismissMenu}
            variants={mobileMenuVariants}
          >
            <motion.aside
              aria-label="Menu mobile"
              className="relative ml-auto h-full w-[min(21rem,calc(100vw-1rem))] overflow-hidden border-l border-[color:var(--app-navbar-mobile-panel-border)] bg-[var(--app-navbar-mobile-panel)] shadow-[var(--app-navbar-mobile-panel-shadow)] backdrop-blur-2xl"
              onPointerDown={(event) => event.stopPropagation()}
              variants={mobileDrawerVariants}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[color:var(--app-accent)] to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 top-10 h-40 w-28 rotate-12 bg-linear-to-b from-[color:var(--app-shine-strong)] via-[color:var(--app-accent-soft)] to-transparent blur-2xl"
              />
              <motion.div
                aria-hidden="true"
                animate={{ x: "130%" }}
                className="pointer-events-none absolute inset-y-0 left-[70%] w-1/2 rotate-12 bg-linear-to-r from-transparent via-[color:var(--app-shine-soft)] to-transparent"
                initial={{ x: "-60%" }}
                transition={{ delay: 0.08, duration: 0.75, ease: "easeOut" }}
              />

              <div className="relative flex h-full min-w-0 flex-col px-4 pb-5 pt-16">
                <div className="mb-5 flex min-w-0 items-center gap-3 rounded-2xl border border-[color:var(--app-border)] bg-[var(--app-surface)] p-3">
                  <NavbarAvatar
                    className="size-10"
                    hasImage={hasAvatarImage}
                    onImageError={() => setHasAvatarImage(false)}
                  />
                  <span className="min-w-0">
                    <span className="block max-w-full wrap-break-word text-sm font-semibold text-[color:var(--app-text-main)]">
                      {portfolioData.identity.name}
                    </span>
                    <span className="block max-w-full wrap-break-word text-xs text-[color:var(--app-text-soft)]">
                      Développeur
                    </span>
                  </span>
                </div>

                <motion.nav
                  aria-label="Navigation mobile"
                  className="flex min-w-0 flex-1 flex-col gap-1 overflow-y-auto rounded-2xl border border-[color:var(--app-border)] bg-[var(--app-surface)] p-2 shadow-[inset_0_1px_0_var(--app-shine-soft)]"
                  id="mobile-navigation"
                  variants={mobileDrawerListVariants}
                >
                  {navigationItems.map((item, index) => {
                    const isActive =
                      activeSectionId === item.href.replace("#", "");

                    return (
                      <motion.a
                        aria-current={isActive ? "page" : undefined}
                        className={`group flex min-h-12 touch-manipulation items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] text-[color:var(--app-accent)] shadow-[var(--app-shadow-soft)]"
                            : "border-transparent text-[color:var(--app-text-muted)] hover:border-[color:var(--app-accent-border)] hover:bg-[var(--app-accent-soft)] hover:text-[color:var(--app-text-main)]"
                        } focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[color:var(--app-focus-ring)]`}
                        href={item.href}
                        key={item.href}
                        onClick={closeMenu}
                        ref={index === 0 ? firstMobileLinkRef : undefined}
                        variants={mobileDrawerItemVariants}
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={`size-1.5 rounded-full transition ${
                            isActive
                              ? "bg-[var(--app-accent)] shadow-[var(--app-shadow-soft)]"
                              : "bg-transparent group-hover:bg-[var(--app-accent)]"
                          }`}
                        />
                      </motion.a>
                    );
                  })}
                </motion.nav>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

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

const navigationSectionIds = navigationItems.map((item) =>
  item.href.replace("#", ""),
);

function NavbarAvatar({ className = "", hasImage, onImageError }) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-sm font-bold text-ice-50 shadow-glow-soft transition duration-300 group-hover:border-cyan-glow/50 ${className}`}
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/80 shadow-[0_18px_60px_rgba(2,6,23,0.42)] backdrop-blur-xl">
        <Container className="flex min-h-16 items-center justify-between">
          <a
            aria-label={`${portfolioData.identity.name}, retour à l'accueil`}
            className="group inline-flex min-w-0 shrink-0 items-center gap-3 rounded-button py-2 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-cyan-glow"
            href="#home"
            onClick={closeMenu}
          >
            <NavbarAvatar
              className="size-9"
              hasImage={hasAvatarImage}
              onImageError={() => setHasAvatarImage(false)}
            />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="max-w-full wrap-break-word text-sm font-semibold text-ice-50">
                {portfolioData.identity.name}
              </span>
              <span className="max-w-full wrap-break-word text-xs text-text-soft">
                Full-Stack JS
              </span>
            </span>
          </a>

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
                      ? "border-cyan-glow/25 bg-cyan-glow/10 text-cyan-glow shadow-glow-soft"
                      : "border-transparent text-text-muted hover:border-ice-300/15 hover:bg-white/4 hover:text-ice-50"
                  } focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-cyan-glow`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid size-11 shrink-0 touch-manipulation place-items-center rounded-full border border-ice-300/15 bg-white/5 text-ice-50 backdrop-blur-md transition hover:border-cyan-glow/40 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-cyan-glow min-[900px]:hidden"
            onClick={() => setIsOpen((current) => !current)}
            ref={menuButtonRef}
            type="button"
          >
            <span aria-hidden="true" className="relative block size-5">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition duration-300 ease-out transform-gpu ${
                  isOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition duration-300 ease-out transform-gpu ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 rounded-full bg-current transition duration-300 ease-out transform-gpu ${
                  isOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
                }`}
              />
            </span>
          </button>
        </Container>
      </header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate="open"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-navy-950/55 backdrop-blur-sm min-[900px]:hidden"
            exit="exit"
            initial="closed"
            onPointerDown={dismissMenu}
            variants={mobileMenuVariants}
          >
            <motion.aside
              aria-label="Menu mobile"
              className="relative ml-auto h-full w-[min(21rem,calc(100vw-1rem))] overflow-hidden border-l border-ice-300/15 bg-navy-950/80 shadow-[-24px_0_80px_rgba(2,6,23,0.58)] backdrop-blur-2xl"
              onPointerDown={(event) => event.stopPropagation()}
              variants={mobileDrawerVariants}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-glow/70 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 top-10 h-40 w-28 rotate-12 bg-linear-to-b from-white/18 via-cyan-glow/10 to-transparent blur-2xl"
              />
              <motion.div
                aria-hidden="true"
                animate={{ x: "130%" }}
                className="pointer-events-none absolute inset-y-0 left-[70%] w-1/2 rotate-12 bg-linear-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-60%" }}
                transition={{ delay: 0.08, duration: 0.75, ease: "easeOut" }}
              />

              <div className="relative flex h-full min-w-0 flex-col px-4 py-5">
                <div className="mb-5 flex min-w-0 items-center gap-3 rounded-2xl border border-ice-300/15 bg-white/4 p-3">
                  <NavbarAvatar
                    className="size-10"
                    hasImage={hasAvatarImage}
                    onImageError={() => setHasAvatarImage(false)}
                  />
                  <span className="min-w-0">
                    <span className="block max-w-full wrap-break-word text-sm font-semibold text-ice-50">
                      {portfolioData.identity.name}
                    </span>
                    <span className="block max-w-full wrap-break-word text-xs text-text-soft">
                      Développeur
                    </span>
                  </span>
                </div>

                <motion.nav
                  aria-label="Navigation mobile"
                  className="flex min-w-0 flex-1 flex-col gap-1 overflow-y-auto rounded-2xl border border-ice-300/15 bg-white/3.5 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
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
                            ? "border-cyan-glow/25 bg-cyan-glow/10 text-cyan-glow shadow-glow-soft"
                            : "border-transparent text-text-muted hover:border-cyan-glow/25 hover:bg-cyan-glow/10 hover:text-ice-50"
                        } focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-glow`}
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
                              ? "bg-cyan-glow shadow-glow-soft"
                              : "bg-cyan-glow/0 group-hover:bg-cyan-glow/80"
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

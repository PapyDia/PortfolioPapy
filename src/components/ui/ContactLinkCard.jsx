import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const githubCodeLines = [
  'const developer = "Cheikh Massamba Dia";',
  'const stack = ["React", "Tailwind", "Node.js", "MongoDB"];',
  "const project = createFullStackApp();",
  'const deployTarget = { frontend: "Vercel", backend: "Render" };',
];

function GitHubCodeDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 82% 18%, rgba(56, 189, 248, 0.14), transparent 34%), radial-gradient(circle at 14% 88%, rgba(139, 92, 246, 0.1), transparent 36%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between py-3 font-mono text-[0.48rem] leading-none text-cyan-glow/20 opacity-70 sm:py-4 sm:text-[0.58rem] lg:text-[0.64rem]">
        {githubCodeLines.map((line, index) => (
          <p
            className={`w-[180%] max-w-none select-none whitespace-nowrap ${
              index % 4 === 0
                ? "-translate-x-12"
                : index % 4 === 1
                  ? "translate-x-3"
                  : index % 4 === 2
                    ? "-translate-x-24"
                    : "translate-x-8"
            }`}
            key={`${line}-${index}`}
          >
            {line}
            <span className="px-4 text-ice-100/15">/* */</span>
            {githubCodeLines[(index + 5) % githubCodeLines.length]}
          </p>
        ))}
      </div>
      <div className="absolute inset-0 bg-linear-to-br from-navy-950/35 via-navy-950/55 to-navy-950/82" />
    </div>
  );
}

function LinkedInNetworkDecor() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 76% 24%, rgba(10, 102, 194, 0.2), transparent 34%), radial-gradient(circle at 18% 86%, rgba(56, 189, 248, 0.12), transparent 36%)",
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-30"
        focusable="false"
        preserveAspectRatio="none"
        viewBox="0 0 320 180"
      >
        <g fill="none" stroke="#0A66C2" strokeOpacity="0.22" strokeWidth="1">
          <line x1="34" x2="92" y1="58" y2="30" />
          <line x1="92" x2="154" y1="30" y2="68" />
          <line x1="154" x2="226" y1="68" y2="36" />
          <line x1="226" x2="286" y1="36" y2="82" />
          <line x1="52" x2="124" y1="132" y2="102" />
          <line x1="124" x2="206" y1="102" y2="128" />
          <line x1="206" x2="286" y1="128" y2="82" />
          <line x1="92" x2="124" y1="30" y2="102" />
          <line x1="154" x2="206" y1="68" y2="128" />
        </g>
        <g fill="#0A66C2" opacity="0.42">
          <circle cx="34" cy="58" r="3" />
          <circle cx="92" cy="30" r="4" />
          <circle cx="154" cy="68" r="3.5" />
          <circle cx="226" cy="36" r="4" />
          <circle cx="286" cy="82" r="3" />
          <circle cx="52" cy="132" r="3" />
          <circle cx="124" cy="102" r="4" />
          <circle cx="206" cy="128" r="3.5" />
        </g>
        <g fill="#38BDF8" opacity="0.5">
          <circle cx="92" cy="30" r="1.6" />
          <circle cx="226" cy="36" r="1.7" />
          <circle cx="124" cy="102" r="1.6" />
        </g>
      </svg>
      <span className="absolute inset-0 bg-linear-to-br from-transparent via-navy-950/10 to-navy-950/60" />
    </span>
  );
}

function ContactLinkCard({ description, href, label }) {
  const normalizedHref = typeof href === "string" ? href.trim() : "";
  const isExternal = /^https?:\/\//i.test(normalizedHref);
  const normalizedLabel = label.toLowerCase();
  const isGitHub = normalizedLabel === "github";
  const isLinkedIn = normalizedLabel === "linkedin";
  const Icon = isGitHub ? SiGithub : isLinkedIn ? FaLinkedin : null;

  if (!normalizedHref) {
    return null;
  }

  return (
    <a
      className="premium-border group relative flex w-full min-w-0 flex-col overflow-hidden rounded-3xl bg-white/4 p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-cyan-glow/45 hover:bg-cyan-glow/10 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-cyan-glow sm:p-5"
      href={normalizedHref}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {isGitHub && <GitHubCodeDecor />}
      {isLinkedIn && <LinkedInNetworkDecor />}

      <span className="relative z-10 flex min-w-0 items-center justify-between gap-3">
        <span className="max-w-full wrap-break-word text-base font-semibold text-ice-50">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-2xl border border-ice-300/20 bg-white/6 text-sm font-semibold text-cyan-glow shadow-glow-soft transition duration-300 group-hover:border-cyan-glow/50 group-hover:bg-cyan-glow/10 sm:size-12"
        >
          {Icon ? (
            <Icon
              aria-hidden="true"
              className="size-5 text-ice-50 sm:size-6"
              focusable="false"
            />
          ) : (
            label.slice(0, 1)
          )}
        </span>
      </span>
      <span className="text-pretty-safe relative z-10 mt-3 max-w-full wrap-break-word text-sm leading-6 text-text-muted">
        {description}
      </span>
    </a>
  );
}

export default ContactLinkCard;

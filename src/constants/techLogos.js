import {
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const orbitDuration = 72;
const orbitDelay = 0;

export const heroTechLogos = [
  {
    label: "React",
    Icon: SiReact,
    orbitDelay,
    orbitDuration,
    initialRotation: 0,
    iconClassName:
      "text-[#61dafb] drop-shadow-[0_0_12px_rgba(97,218,251,0.35)]",
  },
  {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    orbitDelay,
    orbitDuration,
    initialRotation: 72,
    iconClassName:
      "text-[color:var(--app-accent)] drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]",
  },
  {
    label: "Node.js",
    Icon: SiNodedotjs,
    orbitDelay,
    orbitDuration,
    initialRotation: 144,
    iconClassName:
      "text-[#68a063] drop-shadow-[0_0_12px_rgba(104,160,99,0.35)]",
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
    orbitDelay,
    orbitDuration,
    initialRotation: 216,
    iconClassName: "text-[#47a248] drop-shadow-[0_0_12px_rgba(71,162,72,0.35)]",
  },
  {
    label: "Docker",
    Icon: SiDocker,
    orbitDelay,
    orbitDuration,
    initialRotation: 288,
    iconClassName:
      "text-[#2496ed] drop-shadow-[0_0_12px_rgba(36,150,237,0.35)]",
  },
];

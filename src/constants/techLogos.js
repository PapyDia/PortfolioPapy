import {
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

const innerOrbitRadius = 'clamp(5.65rem, 29vw, 9.25rem)'
const mainOrbitRadius = 'clamp(5.9rem, 30vw, 9.75rem)'
const outerOrbitRadius = 'clamp(6.1rem, 31vw, 10.1rem)'
const orbitDuration = 72
const orbitDelay = 0

export const heroTechLogos = [
  {
    label: 'React',
    Icon: SiReact,
    orbitDelay,
    orbitDuration,
    orbitRadius: mainOrbitRadius,
    initialRotation: 0,
    iconClassName: 'text-[#61dafb] drop-shadow-[0_0_12px_rgba(97,218,251,0.35)]',
  },
  {
    label: 'Tailwind CSS',
    Icon: SiTailwindcss,
    orbitDelay,
    orbitDuration,
    orbitRadius: innerOrbitRadius,
    initialRotation: 72,
    iconClassName: 'text-[#38bdf8] drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]',
  },
  {
    label: 'Node.js',
    Icon: SiNodedotjs,
    orbitDelay,
    orbitDuration,
    orbitRadius: outerOrbitRadius,
    initialRotation: 144,
    iconClassName: 'text-[#68a063] drop-shadow-[0_0_12px_rgba(104,160,99,0.35)]',
  },
  {
    label: 'MongoDB',
    Icon: SiMongodb,
    orbitDelay,
    orbitDuration,
    orbitRadius: innerOrbitRadius,
    initialRotation: 216,
    iconClassName: 'text-[#47a248] drop-shadow-[0_0_12px_rgba(71,162,72,0.35)]',
  },
  {
    label: 'Docker',
    Icon: SiDocker,
    orbitDelay,
    orbitDuration,
    orbitRadius: mainOrbitRadius,
    initialRotation: 288,
    iconClassName: 'text-[#2496ed] drop-shadow-[0_0_12px_rgba(36,150,237,0.35)]',
  },
]

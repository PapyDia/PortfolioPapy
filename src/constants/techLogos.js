import {
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

export const heroTechLogos = [
  {
    label: 'React',
    Icon: SiReact,
    className: 'absolute left-4 top-5 z-20 sm:left-8 sm:top-8',
    iconClassName: 'text-[#61dafb] drop-shadow-[0_0_12px_rgba(97,218,251,0.35)]',
  },
  {
    label: 'Tailwind CSS',
    Icon: SiTailwindcss,
    className: 'absolute right-4 top-9 z-20 sm:right-8 sm:top-16',
    iconClassName: 'text-[#38bdf8] drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]',
  },
  {
    label: 'Node.js',
    Icon: SiNodedotjs,
    className: 'absolute bottom-6 left-5 z-20 sm:bottom-10 sm:left-10',
    iconClassName: 'text-[#68a063] drop-shadow-[0_0_12px_rgba(104,160,99,0.35)]',
  },
  {
    label: 'MongoDB',
    Icon: SiMongodb,
    className: 'absolute bottom-8 right-4 z-20 sm:bottom-16 sm:right-10',
    iconClassName: 'text-[#47a248] drop-shadow-[0_0_12px_rgba(71,162,72,0.35)]',
  },
  {
    label: 'Docker',
    Icon: SiDocker,
    className:
      'absolute left-1/2 top-5 z-20 -translate-x-1/2 min-[380px]:top-7 sm:top-24',
    iconClassName: 'text-[#2496ed] drop-shadow-[0_0_12px_rgba(36,150,237,0.35)]',
  },
]

import { motion } from 'framer-motion'

import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'

const gentleLoop = {
  duration: 3.2,
  ease: 'easeInOut',
  repeat: Infinity,
}

function CodingBearIllustration() {
  const prefersReducedMotion = useReducedMotionPreference()
  const loop = prefersReducedMotion ? undefined : gentleLoop

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem]"
    >
      <div className="pointer-events-none absolute inset-6 rounded-full bg-cyan-glow/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-10 bottom-6 h-20 rounded-full bg-violet-glow/20 blur-3xl" />

      <motion.svg
        animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
        className="relative z-10 h-auto w-full drop-shadow-[0_22px_45px_rgba(2,6,23,0.45)]"
        focusable="false"
        transition={loop}
        viewBox="0 0 260 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bearLaptop" x1="74" x2="186" y1="132" y2="196">
            <stop stopColor="#1E293B" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="bearScreen" x1="91" x2="169" y1="122" y2="164">
            <stop stopColor="#0F172A" />
            <stop offset="1" stopColor="#1E3A5F" />
          </linearGradient>
          <filter id="softCyanGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.circle
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.25, 0.85, 0.25], scale: [1, 1.75, 1] }
          }
          cx="48"
          cy="56"
          fill="#38BDF8"
          r="2"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ ...gentleLoop, delay: 0.1 }}
        />
        <motion.circle
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.2, 0.75, 0.2], scale: [1, 1.6, 1] }
          }
          cx="210"
          cy="78"
          fill="#8B5CF6"
          r="2.5"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ ...gentleLoop, delay: 0.8 }}
        />
        <motion.circle
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.2, 0.8, 0.2], y: [0, -5, 0] }
          }
          cx="218"
          cy="134"
          fill="#60A5FA"
          r="2"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ ...gentleLoop, delay: 1.3 }}
        />

        <ellipse cx="130" cy="198" fill="#020617" opacity="0.45" rx="72" ry="11" />

        <g>
          <circle cx="79" cy="67" fill="#8B5A35" r="28" />
          <circle cx="181" cy="67" fill="#8B5A35" r="28" />
          <circle cx="79" cy="68" fill="#F2C18D" opacity="0.65" r="15" />
          <circle cx="181" cy="68" fill="#F2C18D" opacity="0.65" r="15" />
          <ellipse cx="130" cy="97" fill="#B7794A" rx="67" ry="61" />
          <ellipse cx="130" cy="154" fill="#8B5A35" opacity="0.95" rx="58" ry="42" />
          <ellipse cx="130" cy="112" fill="#F8D7A8" rx="35" ry="25" />
          <ellipse cx="130" cy="105" fill="#8B5A35" rx="9" ry="6" />

          <motion.g
            animate={
              prefersReducedMotion
                ? undefined
                : { scaleY: [1, 1, 0.18, 1], y: [0, 0, 3, 0] }
            }
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            transition={{
              duration: 4.8,
              ease: 'easeInOut',
              repeat: Infinity,
              times: [0, 0.86, 0.9, 1],
            }}
          >
            <circle cx="107" cy="91" fill="#020617" r="5" />
            <circle cx="153" cy="91" fill="#020617" r="5" />
            <circle cx="109" cy="89" fill="#F8FAFC" r="1.6" />
            <circle cx="155" cy="89" fill="#F8FAFC" r="1.6" />
          </motion.g>

          <path
            d="M108 118 Q130 140 153 118"
            fill="none"
            stroke="#5B3520"
            strokeLinecap="round"
            strokeWidth="6"
          />
          <path
            d="M113 119 Q130 132 148 119"
            fill="none"
            stroke="#F8FAFC"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>

        <motion.g
          animate={prefersReducedMotion ? undefined : { rotate: [-5, 4, -5] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ ...gentleLoop, duration: 1.2 }}
        >
          <ellipse cx="83" cy="160" fill="#B7794A" rx="24" ry="15" />
        </motion.g>
        <motion.g
          animate={prefersReducedMotion ? undefined : { rotate: [5, -4, 5] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ ...gentleLoop, delay: 0.35, duration: 1.2 }}
        >
          <ellipse cx="177" cy="160" fill="#B7794A" rx="24" ry="15" />
        </motion.g>

        <g>
          <rect
            fill="url(#bearLaptop)"
            height="60"
            rx="12"
            stroke="#7DD3FC"
            strokeOpacity="0.25"
            width="126"
            x="67"
            y="130"
          />
          <rect fill="url(#bearScreen)" height="37" rx="7" width="94" x="83" y="140" />
          <rect fill="#020617" height="9" opacity="0.8" rx="4.5" width="150" x="55" y="187" />
          <rect fill="#38BDF8" filter="url(#softCyanGlow)" height="2" opacity="0.65" rx="1" width="42" x="109" y="191" />

          {[0, 1, 2].map((line) => (
            <motion.rect
              animate={
                prefersReducedMotion
                  ? undefined
                  : { opacity: [0.35, 1, 0.35], scaleX: [0.72, 1, 0.72] }
              }
              fill={line === 1 ? '#60A5FA' : '#38BDF8'}
              height="3"
              key={line}
              rx="1.5"
              style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
              transition={{ ...gentleLoop, delay: line * 0.35, duration: 1.9 }}
              width={28 + line * 7}
              x="98"
              y={150 + line * 9}
            />
          ))}
          <motion.path
            animate={prefersReducedMotion ? undefined : { opacity: [0.25, 0.85, 0.25] }}
            d="M151 151 L160 157 L151 163"
            fill="none"
            stroke="#E0F2FE"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            transition={{ ...gentleLoop, duration: 2.2 }}
          />
        </g>
      </motion.svg>
    </div>
  )
}

export default CodingBearIllustration

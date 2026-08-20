import type { Config } from 'tailwindcss'

/**
 * Tokens are declared once in styles/tokens.css and surfaced to Tailwind here,
 * so a component never hardcodes a hex, a duration, or an easing curve.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      /**
       * Channel-var form, not `var(--hex)`.
       *
       * Tailwind rewrites `<alpha-value>` per utility, so `bg-plum-900/25`
       * becomes `rgb(var(--plum-900-ch) / 0.25)`. Handing it a hex-valued
       * variable instead makes every `/<alpha>` utility compile to nothing —
       * which silently erased every hairline rule and bullet marker on the
       * first pass through this file.
       */
      colors: {
        canvas: 'rgb(var(--canvas-ch) / <alpha-value>)',
        surface: 'rgb(var(--surface-ch) / <alpha-value>)',
        raised: 'rgb(var(--raised-ch) / <alpha-value>)',
        plum: {
          100: 'rgb(var(--plum-100-ch) / <alpha-value>)',
          500: 'rgb(var(--plum-500-ch) / <alpha-value>)',
          700: 'rgb(var(--plum-700-ch) / <alpha-value>)',
          900: 'rgb(var(--plum-900-ch) / <alpha-value>)',
        },
        aurora: {
          violet: 'rgb(var(--aurora-violet-ch) / <alpha-value>)',
          orchid: 'rgb(var(--aurora-orchid-ch) / <alpha-value>)',
          steel: 'rgb(var(--aurora-steel-ch) / <alpha-value>)',
          rose: 'rgb(var(--aurora-rose-ch) / <alpha-value>)',
          peri: 'rgb(var(--aurora-peri-ch) / <alpha-value>)',
        },
        accent: {
          steel: 'rgb(var(--accent-steel-ch) / <alpha-value>)',
          orchid: 'rgb(var(--accent-orchid-ch) / <alpha-value>)',
          rose: 'rgb(var(--accent-rose-ch) / <alpha-value>)',
          violet: 'rgb(var(--accent-violet-ch) / <alpha-value>)',
        },
      },

      fontFamily: {
        // Wired to the next/font CSS variables set in app/layout.tsx.
        bebas: ['var(--font-bebas)', 'Impact', 'Haettenschweiler', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Iowan Old Style', 'Georgia', 'serif'],
      },

      /**
       * Deliberately non-generic key names.
       *
       * An earlier pass used `display` / `display-sm` / `body` / `caption`, and a
       * browser extension on the dev machine injected its own `.text-display-sm`
       * rule that won the cascade and silently reset the hero to 28px Crimson.
       * Utility class names live in a global namespace shared with every
       * extension stylesheet, so these are named to not collide.
       *
       * role -> [size, { lineHeight, letterSpacing }]
       */
      fontSize: {
        eyebrow: ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
        lede: ['1.5rem', { lineHeight: '1.6' }],
        'lede-sm': ['1.25rem', { lineHeight: '1.6' }],
        copy: ['1.0625rem', { lineHeight: '1.75' }],
        fine: ['0.875rem', { lineHeight: '1.5' }],
        navlink: ['1.5rem', { lineHeight: '1.5556', letterSpacing: '1.6px' }],
        wordmark: ['2rem', { lineHeight: '1.5', letterSpacing: '1.6px' }],
        // Bebas sizes keep the sub-1.0 leading that gives the reference its
        // dense poster block.
        hero: ['3.75rem', { lineHeight: '0.95', letterSpacing: '0.02em' }],
        'hero-sm': ['2.875rem', { lineHeight: '0.95', letterSpacing: '0.02em' }],
        numeral: ['3.5rem', { lineHeight: '1' }],
        projtitle: ['2.5rem', { lineHeight: '1' }],
      },

      maxWidth: {
        hero: 'var(--measure-hero)',
        shell: 'var(--measure-shell)',
        header: 'var(--measure-header)',
      },

      boxShadow: {
        media: 'var(--shadow-media)',
        'media-hover': 'var(--shadow-media-hover)',
        header: 'var(--shadow-header)',
      },

      borderRadius: {
        card: 'var(--radius-md)',
      },

      transitionTimingFunction: {
        signature: 'var(--ease-signature)',
        'out-soft': 'var(--ease-out-soft)',
        'in-out-soft': 'var(--ease-in-out-soft)',
      },

      transitionDuration: {
        fast: 'var(--dur-fast)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
      },

      zIndex: {
        grain: 'var(--z-grain)',
        content: 'var(--z-content)',
        header: 'var(--z-header)',
        progress: 'var(--z-progress)',
      },

      keyframes: {
        auroraText: {
          '0%, 100%': { backgroundPosition: '50% center, 18% center' },
          '50%': { backgroundPosition: '50% center, 82% center' },
        },
        heroDepthDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -2%) scale(1.04)' },
        },
        /**
         * The hero entrance. A CSS keyframe rather than a JS animation, so the
         * LCP element is never gated on hydration and degrades to plain visible
         * text if scripting fails. `both` fill supplies the hidden start state,
         * which means the element's own styles stay visible-by-default.
         */
        heroIn: {
          from: { opacity: '0', transform: 'translateY(30px)', filter: 'blur(8px)' },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        veilIn: {
          from: { opacity: '0' },
          to: { opacity: '0.85' },
        },
      },

      animation: {
        'aurora-text': 'auroraText var(--loop-text) ease-in-out infinite',
        'hero-depth': 'heroDepthDrift var(--loop-depth) ease-in-out infinite',
        'hero-in': 'heroIn var(--dur-slow) var(--ease-out-soft) both',
        'veil-in': 'veilIn var(--dur-veil) ease-out both',
      },
    },
  },
  plugins: [],
}

export default config

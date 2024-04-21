/** @type {import('tailwindcss').Config} */

import animate from 'tailwindcss-animate'

export default {
  mode: 'jit',
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './renderer/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: '440px',
        sm: '640px',
        tablet: '640px',
        md: '768px',
        lg: '1024px',
        laptop: '1024px',
        xl: '1280px',
        desktop: '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}

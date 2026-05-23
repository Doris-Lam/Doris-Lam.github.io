/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [ 
      {
        mytheme: {
          "primary": "#6f4ff9",
          "secondary": "#d1d5db",
          "accent": "#4b5563",
          "neutral": "#1f2937",
          "base-100": "#f3f4f1",
          "info": "#22d3ee",
          "success": "#a3e635",
          "warning": "#facc15",
          "error": "#f97316",
        },
      }
    ],
  },
}


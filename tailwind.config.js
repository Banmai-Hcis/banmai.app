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
          "primary": "#003366",
          "secondary": "#f3f4f6",
          "accent": "#99f6e4",
          "neutral": "#f3f4f6",
          "base-100": "#ffff",
          "info": "#22d3ee",
          "success": "#a3e635",
          "warning": "#facc15",
          "error": "#f97316",
        }, 
      }
    ],
  },
}


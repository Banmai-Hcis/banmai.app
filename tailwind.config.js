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
  daisyui: { //themes: ["light", "dark", "winter"],
    themes: [
      {
        mytheme: {
            "primary": "#6f4ff9",
                      
            "secondary": "#7b7b7b",
                      
            "accent": "#f8fafc",
                      
            "neutral": "#6b7280",
                      
            "base-100": "#f8fafc",
                      
            "info": "#22d3ee",
                      
            "success": "#a3e635",
                      
            "warning": "#facc15",
                      
            "error": "#f97316",
          },
        },
      ],
  },
}


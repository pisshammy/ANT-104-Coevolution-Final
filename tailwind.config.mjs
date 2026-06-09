/** @type {import('tailwindcss').Config} */ export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF7F4",
        walnut: "#433422",
        terracotta: "#C67B5C",
        sage: "#8DA399",
        gold: "#B08D57",
        ink: "#2D2A26",
        muted: "#8C857B",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        sans: ['"Inter var"', "system-ui", "-apple-system", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: { maxWidth: "65ch", color: "#2D2A26", lineHeight: "1.8" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: "#FE572B",
        customBronw: "#B69D73",
        customGreen: "#26A735",
        customGrey: "#8E8F9E",
      },
      screens: {
        xs: { max: "400px" }, // Pantallas menores a 400px
        sm: { max: "640px" }, // Pantallas menores a 640px
        "custom-sm": { max: "540px" }, // Pantallas menores a 540px
        md: { max: "768px" }, // Pantallas menores a 768px
        "custom-lg": { max: "950px" }, // Pantallas menores a 950px
        lg: { max: "1024px" }, // Pantallas menores a 1024px
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        slideIn: 'slideIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};

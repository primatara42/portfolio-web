/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#151515",
        "secondary": "#F5EFE6",
        "button": "#FF4C4C",
        "button-hover": "#932929",
      },
      backgroundImage: {
        "wave-pattern": 'url("/src/assets/images/wave.svg")',
        "blop-pattern": 'url("/src/assets/images/blop.svg")',
      },
      fontSize: {
        "Heading-1": "48px",
        "Heading-2": "24px",
        "Paragraph": "18px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(0.9)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
        fadeOut: "fadeOut 0.3s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        1000: "1000ms",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      ShareTech: ["Share Tech", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "800px" },
      sm: { max: "639px" },
      "-md": { min: "800px" },
      "-sm": { min: "639px" },
    },
  },
  variants: {
    extend: {
      opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
};

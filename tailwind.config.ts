import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        "bg-accent-yellow": "#E0F97B",
        "bg-accent-yellow-active": "#CCED49",
        "bg-accent-yellow-secondary": "#E0F97BE0",
        "bg-accent-yellow-tertiary": "#E0F97B66",
        "bg-accent-active": "#5733FF",
        "bg-accent-magenta": "#DF1A7924",
        "bg-accent-hover": "#6C4DFF",
        "bg-accent": "#8065FF",
        "bg-accent-disabled": "#8065FF99",
        "bg-primary": "#FFFFFF",
        "bg-primary-inverse": "#171719",
        "teal-500": "#26A69A99",
        "violet-main": "#9A1BD9",
        "violet-300": "#9A1BD924",
        "sienna-300": "#FF7A0024",
        "lilac-main": "#AB9AFF",
        "lilac-600": "#AB9AFFE0",
        "text-primary": "#171719",
        "border-primary-inverse": "#171719",
        "text-secondary": "#171719E0",
        "text-secondary-subduet": "#17171999",
        "text-critical": "#E04A43",
        "text-accent-lilac": "#AB9AFF",
        "bg-accent-subduet-active": "#8065FF24",
        "text-tertiary": "#FFFFFF99",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

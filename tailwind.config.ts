import type { Config } from "tailwindcss";

const colors = {
  backgroundSecondary: "#F2F2F7",
  backgroundPrimary: "#FFFFFF",
  white: "#ffffff",
  primary: "#0066FF",
  gray100: "#F2F2F7",
  gray200: "#E5E5EA",
  gray300: "#D1D1D6",
  gray400: "#C7C7CC",
  gray500: "#AEAEB2",
  gray600: "#8E8E93",
  systemRed: "#FF3B30",
};

const textColors = {
  textDefault: "#1E1E1E",
  textSecondary: "#757575",
  textTertiary: "#B3B3B3",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      textColors,
    },
  },
  plugins: [
    ({ addComponents }: { addComponents: any }) => {
      addComponents({
        ".text-title-bold": {
          fontSize: "24px",
          fontWeight: "700",
          letterSpacing: "-0.02em",
        },
        ".text-title-md": {
          fontSize: "20px",
          fontWeight: "600",
          letterSpacing: "-0.02em",
        },
        ".text-body-md": {
          fontSize: "16px",
          fontWeight: "500",
          letterSpacing: "-0.02em",
        },
        ".text-body-sm": {
          fontSize: "16px",
          fontWeight: "600",
          letterSpacing: "-0.02em",
        },
        ".text-body2-md": {
          fontSize: "15px",
          fontWeight: "500",
          letterSpacing: "-0.02em",
        },
        ".text-body3-sm": {
          fontSize: "15px",
          fontWeight: "500",
          letterSpacing: "-0.02em",
        },
        ".text-body3-rg": {
          fontSize: "15px",
          fontWeight: "400",
          letterSpacing: "-0.02em",
        },
        ".text-caption-sm": {
          fontSize: "13px",
          fontWeight: "600",
          letterSpacing: "-0.02em",
        },
        ".text-caption-md": {
          fontSize: "12px",
          fontWeight: "500",
          letterSpacing: "-0.02em",
        },
      });
    },
  ],
} satisfies Config;

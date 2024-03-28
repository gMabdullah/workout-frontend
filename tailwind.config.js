// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
        },
        center: true,
      },
      colors: {
        dark: "var(--dark)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        lightsecondary: "var(--lightsecondary)",
        btn: "var(--btn)",
        lightprimary: "var(--lightprimary)",
        disablebtn: "var(--disablebtn)",
        disabletext: "var(--disabletext)",
        subtext: "var(--subtext)",
        border: "var(--border)",
        admintitle: "var(--admintitle)",
        outlinebtntext: "var(--outlinebtntext)",
        submitted: "var(--submitted)",
        rejected: "var(--rejected)",
        denied: "var(--denied)",
      },
    },
  },
  darkMode: "class", // Enable Tailwind CSS dark mode
  plugins: [
    require("tailwindcss-dark-mode")(), // Add this plugin for dark mode
  ],
};

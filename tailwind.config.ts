import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "var(--bg-void)",
        base: "var(--bg-base)",
        raised: "var(--bg-raised)",
        overlay: "var(--bg-overlay)",
        
        "gold-bright": "var(--gold-bright)",
        gold: "var(--gold-mid)",
        "gold-dim": "var(--gold-dim)",
        "gold-trace": "var(--gold-trace)",
        
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        
        "border-subtle": "var(--border-subtle)",
        "border-visible": "var(--border-visible)",
        "border-accent": "var(--border-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        ui: ["var(--font-ui)", "monospace"],
        body: ["var(--font-body)", "serif"]
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        gold: "var(--shadow-gold)"
      }
    }
  },
  plugins: []
};

export default config;

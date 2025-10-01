// tailwind.config.ts
export default {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"],
  theme:{ extend:{
    colors:{
      bg:"var(--bg)", surface:"var(--surface)", text:"var(--text)", muted:"var(--muted)",
      border:"var(--border)",
      primary:{DEFAULT:"var(--primary)", foreground:"var(--primary-contrast)"},
      accent:{DEFAULT:"var(--accent)"}, secondary:{DEFAULT:"var(--secondary)"},
    },
    borderRadius:{ md:"var(--radius-md)", xl:"var(--radius-lg)" },
    boxShadow:{ card:"0 6px 20px rgba(0,0,0,0.06)" }
  }},
  plugins:[]
};

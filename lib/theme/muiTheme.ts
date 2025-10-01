// lib/theme/muiTheme.ts
"use client";
import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    background: { default: "var(--bg)", paper: "var(--surface)" },
    text: { primary: "var(--text)", secondary: "var(--muted)" },
    primary: {
      main: "var(--primary)",
      contrastText: "var(--primary-contrast)",
    },
    secondary: { main: "var(--accent)" },
    success: { main: "var(--success)" },
    warning: { main: "var(--warning)" },
    error: { main: "var(--danger)" },
    divider: "var(--border)",
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: ["Inter", "system-ui", "sans-serif"].join(","),
    h1: { fontWeight: 700, letterSpacing: -0.5 },
    h2: { fontWeight: 700, letterSpacing: -0.2 },
    body1: { lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: "var(--radius-md)" } },
    },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: "var(--radius-md)" } },
    },
  },
});

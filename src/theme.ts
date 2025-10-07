"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true, // MUI CSS vars (helps SSR flicker-free theming)
  palette: {
    primary: { main: "var(--color-primary)" },
    text: { secondary: "var(--color-muted)" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;

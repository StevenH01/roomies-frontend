// src/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

export const PRIMARY = "#2563eb"; // keep your brand color here (single source)

const theme = createTheme({
  // optional, but nice with v7 for CSS-vars-based color math
  cssVariables: { nativeColor: true }, // or just `cssVariables: true`
  palette: {
    primary: { main: PRIMARY }, // ✅ must be a real color, not var()
    text: { secondary: "#64748b" },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: "var(--font-roboto)" },
});

export default theme;

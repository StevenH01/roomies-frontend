"use client";
import { createTheme } from "@mui/material/styles";

export const PRIMARY = "#485C48"; // brand green
export const MUTED   = "#64748b"; // slate-500

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: { main: PRIMARY }, // MUI requires real color values here
    text: { secondary: MUTED },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;

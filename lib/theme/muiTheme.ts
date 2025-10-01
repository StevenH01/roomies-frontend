// lib/theme/muiTheme.ts
"use client";
import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

export const muiTheme = createTheme({
  palette:{
    background:{ default:tokens.bg, paper:tokens.surface },
    text:{ primary:tokens.text, secondary:tokens.muted },
    primary:{ main:tokens.primary, contrastText:tokens.primaryContrast },
    secondary:{ main:tokens.accent },
    divider: tokens.border
  },
  shape:{ borderRadius:16 },
  typography:{ fontFamily:["Inter","system-ui","sans-serif"].join(","), button:{ textTransform:"none", fontWeight:600 } }
});

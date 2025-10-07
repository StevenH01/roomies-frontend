// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme, { PRIMARY } from "../theme";

const roboto = Roboto({ weight: ["300","400","500","700"], subsets: ["latin"], display: "swap", variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Roomies — Find your next roommate",
  description: "Find compatible roommates faster with verified profiles, preference matching, and secure messaging.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      {/* this line sets the CSS var used by Tailwind/custom CSS */}
      <body style={{ ["--color-primary" as any]: PRIMARY }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

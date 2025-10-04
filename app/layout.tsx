import "./../styles/globals.css";
import "../lib/theme/tw-theme.css";

import ThemeRegistry from "@/lib/mui/ThemeRegistry";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "@/lib/theme/muiTheme";
import SiteHeader from "@/components/header/SiteHeader";

export const metadata = {
  title: "Roomies — Students-only Housing & Roommates",
  description: "A safe place for students with .edu verification to find housing and roommates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text">
        <ThemeRegistry>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <SiteHeader />
            <main className="mx-auto max-w-7xl px-4 lg:px-6">{children}</main>
          </ThemeProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}

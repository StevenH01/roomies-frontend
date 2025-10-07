import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Roomies — Find your next roommate",
  description:
    "Roomies helps students and young professionals find great roommates faster—browse profiles, match on preferences, and connect securely.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider
          options={{
            // Important when mixing MUI with Tailwind/CSS: keeps MUI styles layered under utilities
            enableCssLayer: true,
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

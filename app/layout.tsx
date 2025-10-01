import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "@/lib/theme/muiTheme";
import SiteHeader from "@/components/header/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roomies",
  description: "Student housing made easy: Roomies helps you find compatible roommates with verified profiles and in-app chat to move in faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <SiteHeader />
          <main className="mx-auto max-w-7xl px-4 lg:px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

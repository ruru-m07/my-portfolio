import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruru: Full-Stack Web Developer",
  description:
    "Skilled in both front-end and back-end development, I bring websites to life with a focus on user experience and technical excellence.",
  creator: "Ruru",
  authors: [
    {
      name: "Ruru",
      url: "https://github.com/ruru-m07/",
    },
  ],
  keywords:
    "web development, full-stack, front-end, back-end, user experience, technical excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-foreground/35 `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

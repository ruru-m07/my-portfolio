import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";
import { createMetadata } from "@/lib/metadata";
import { Main } from "./layout.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata({
  title: {
    absolute: "Ruru",
    template: "Ruru | %s",
  },
  description: "My personal website.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-[#020202] text-neutral-50 min-h-screen dark"
        )}
      >
        <Main>{children}</Main>
      </body>
    </html>
  );
}

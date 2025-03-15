"use client";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <nav className="flex items-center gap-3 mb-4 max-w-[600px] mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { filter: "blur(8px)", opacity: 0, },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        <Link href="/" className="mr-auto">
          <Image
            alt="Me"
            src="/me.png"
            width="40"
            height="40"
            className="size-8 rounded-full"
          />
        </Link>
      </motion.div>
      {/* <NavLink href="/blog">Blog</NavLink> */}
    </nav>
  );
}

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [width, setWidth] = useState<string | number>("100%");

  useEffect(() => {
    if (!linkRef.current) return;

    setWidth(linkRef.current.clientWidth);
  }, []);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={cn(
        "relative text-neutral-400 text-sm transition-colors hover:text-neutral-200",
        active && "text-neutral-50"
      )}
    >
      {children}
      {active && (
        <div
          className="absolute h-px bottom-0 inset-x-0 bg-neutral-200"
          role="none"
        />
      )}
    </Link>
  );
}

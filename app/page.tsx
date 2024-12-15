"use client";

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { motivations } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [imageSrc, setImageSrc] = useState<string>("/cat.jpg");

  useEffect(() => {
    const randomMotivation =
      motivations[Math.floor(Math.random() * motivations.length)];
    setQuote(randomMotivation);
  }, []);

  const changeQuote = () => {
    const randomMotivation =
      motivations[Math.floor(Math.random() * motivations.length)];
    setQuote(randomMotivation);
  };

  const blinkImage = () => {
    setImageSrc("/ruru.png");
    setTimeout(() => setImageSrc("/cat.jpg"), 69);
  };

  return (
    <main className="mx-5 md:mx-0 lg:mx-96">
      <Navbar />
      <section className="h-screen flex flex-col-reverse md:flex-row items-center md:justify-between justify-center">
        <div className=" md:w-3/5 w-full text-black">
          <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-tight">
            Het there!
          </p>
          <h1 className="scroll-m-20 md:text-3xl text-lg font-extrabold tracking-tight lg:text-4xl">
            i&apos;m Ruru, A Full-Stack Web Developer. ready to build your
            next...
          </h1>
          <blockquote
            onClick={() => changeQuote()}
            className="mt-6 border-l-2 border-black pl-3 italic cursor-pointer"
          >
            {quote}
          </blockquote>
        </div>
        <div className="md:[&>*]:scale-100 [&>*]:scale-50">
          <Card
            onClick={() => blinkImage()}
            className="p-5 relative rounded-[80px] bg-primary-foreground/70 h-72 w-72 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 "
          >
            <Image
              src={imageSrc}
              alt="ruru"
              width={600}
              height={600}
              className="h-full w-full rounded-[60px] border "
            />
            <Image
              src={"/kitty.png"}
              alt="ruru"
              width={80}
              height={80}
              className={cn(
                "rounded-[25px] absolute",
                imageSrc === "/cat.jpg" ? "top-[130px] right-44 -rotate-45" : "top-11 right-10 rotate-45"
              )}
            />
          </Card>
        </div>
      </section>
    </main>
  );
}

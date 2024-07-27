import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-10 lg:mx-56">
      <Navbar />
      <section className=" h-screen flex items-center justify-between">
        <div className=" w-3/5 text-black">
          <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-tight">
            Het there!
          </p>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            i&apos;m Ruru, A Full-Stack Web Developer. ready to build your
            next...
          </h1>
          <blockquote className="mt-6 border-l-2 border-black pl-3 italic">
            Empowering your digital presence, one line of code at a time.
          </blockquote>
        </div>
        <div>
          <Card className="p-5 relative rounded-[45px] bg-primary-foreground/70 h-72 w-72 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
            <Image
              src={"/cat.jpg"}
              alt="ruru"
              width={600}
              height={600}
              className="h-full w-full rounded-[25px] border "
            />
            <Image src={"/kitty.png"}
              alt="ruru"
              width={80}
              height={80}
              className=" rounded-[25px] absolute top-[130px] right-44 -rotate-45 "/>
          </Card>
        </div>
      </section>
    </main>
  );
}

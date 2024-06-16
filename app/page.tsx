import IconCloud from "@/components/magicui/icon-cloud";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WordRotate from "@/components/magicui/word-rotate";
import { Section } from "@/components/section";
import myData from "@/config/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-10 lg:mx-56">
      <Section>
        <div className=" w-3/5">
          <WordFadeIn
            className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground"
            words="Hlo there! 👋"
          />
          <div className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            <WordFadeIn words={`i'm ${myData.name},`} />
            <WordRotate
              className="text-4xl font-bold text-black dark:text-white"
              words={myData.iam}
            />
            <WordFadeIn words={`ready to build next...`} />
          </div>
          <blockquote className="mt-6 border-l-2 pl-6 ">
            <div>
              <div className="italic">
                <WordFadeIn words={`Empowering your digital presence, `} />
              </div>
              <div className="font-bold">
                <WordFadeIn words={`one line of code at a time.`} />
              </div>
            </div>
          </blockquote>
        </div>
        <div>
          <IconCloud iconSlugs={myData.skillslugs} />
        </div>
      </Section>
      <Section className="h-screen">
        <div>
            
        </div>
      </Section>
    </main>
  );
}

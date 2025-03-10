import { createMetadata } from "@/lib/metadata";
import { documents } from "@/app/source";
import { Card } from "./card";

export const metadata = createMetadata({
  title: "Blog",
  description: "My precious thoughts and inspirations.",
});

export default function Page() {
  return (
    <main>
      <h1 className="font-semibold text-xl mb-2">Blog</h1>
      <p className="text-sm text-neutral-400 mb-6 leading-relaxed max-w-2xl text-balance ">
        Welcome to my personal corner of the web where I share thoughts, explorations, and inspirations. 
        Feel free to explore the articles below.
      </p>
      <div className="flex flex-col gap-2">
        {documents.map((d) => (
          <Card key={d.id} id={d.id} info={d.info} />
        ))}
      </div>
      <div className="flex flex-row text-sm flex-wrap gap-4 justify-between mt-8">
        <p className="text-neutral-400">
          <i>"The best way to predict the future is to create it."</i> - Abraham Lincoln
        </p>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noreferrer noopener"
          className="text-neutral-100 transition-colors hover:text-neutral-300"
        >
          RSS
        </a>
      </div>
    </main>
  );
}

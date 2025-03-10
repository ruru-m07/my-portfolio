import { documents } from "@/app/source";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Date } from "./page.client";
import { createMetadata } from "@/lib/metadata";
import { HTMLAttributes, type AnchorHTMLAttributes } from "react";
import dynamic from "next/dynamic";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const CommentsWithAuth = dynamic(
  () => import("./comment").then((res) => res.CommentsWithAuth),
  {
    ssr: false,
  }
);

function MDXLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) return <a {...props} />;

  const isExternal = href.startsWith("https://") || href.startsWith("http://");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
    );
  }

  return <Link href={href} {...props} />;
}

const headingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

function Heading({
  as: As,
  ...props
}: { as: (typeof headingTypes)[number] } & HTMLAttributes<HTMLHeadingElement>) {
  if (props.id)
    return (
      <a href={`#${props.id}`} className="no-underline group">
        <As {...props}>
          <span className="absolute -ml-4 mt-0.5 text-neutral-500 text-base opacity-0 transition-opacity group-hover:opacity-100">
            #
          </span>
          {props.children}
        </As>
      </a>
    );

  return <As {...props}>{props.children}</As>;
}

export default function Page({ params }: { params: { id: string } }) {
  const document = documents.find((d) => d.id === params.id);
  if (!document) notFound();

  return (
    <>
      <article className="prose prose-sm prose-invert text-neutral-400 prose-li:marker:text-neutral-300">
        <document.renderer
          components={{
            a: MDXLink,
            img: (props) => <img className="rounded-xl" {...props} />,
            ...Object.fromEntries(
              headingTypes.map((type) => [
                type,
                (props: HTMLAttributes<HTMLHeadingElement>) => (
                  <Heading as={type} {...props} />
                ),
              ])
            ),
            pre: ({ className, style: _style, ...props }) => (
              <pre
                className={cn(
                  "text-sm p-2 bg-neutral-900 border border-neutral-800 rounded-lg",
                  className
                )}
                {...props}
              >
                {props.children}
              </pre>
            ),
          }}
        />
      </article>
      <p className="mt-8 text-sm">
        <span className="font-medium mr-1">Last Updated:</span>
        <Date className="text-neutral-400" value={document.info.date} />
      </p>
      <footer className="flex flex-row items-center justify-between bg-neutral-900 border border-neutral-800 rounded-xl p-4 mt-4">
        <div>
          <p>
            <span className="text-sm font-medium">Thanks for reading! ❤️</span>
            <span className="text-sm text-neutral-400 block">
              If you enjoyed this post, consider sharing it with others.
            </span>
          </p>
        </div>
        <Link
          href="/blog"
          className="text-xs text-nowrap rounded-md px-2 py-1.5 border border-neutral-700 bg-neutral-800 font-medium transition-colors hover:bg-neutral-700"
        >
          Back to blog
        </Link>
      </footer>
      <CommentsWithAuth page={params.id} />
    </>
  );
}

export function generateStaticParams() {
  return documents.map((d) => ({
    id: d.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const document = documents.find((d) => d.id === params.id);
  if (!document) notFound();

  return createMetadata({
    title: document.info.title,
    description: document.info.description,
    openGraph: {
      type: "article",
      authors: "Ruru",
      modifiedTime: document.info.date.toISOString(),
    },
  });
}

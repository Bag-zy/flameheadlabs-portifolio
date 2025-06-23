import { notFound } from "next/navigation";
import { allServices } from "contentlayer/generated";
import { Metadata } from "next";
import { ServiceHeader } from "./ServiceHeader";
import { Redis } from "@upstash/redis";
import { MdxContent } from "./MdxContent";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

interface PageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata | undefined> {
  const service = allServices.find((service) => service.slug === params.slug);
  if (!service) {
    return;
  }

  const { title, date, description, slug } = service;
  const ogImage = `https://flameheadlabs.com/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `https://flameheadlabs.com/services/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const redis = Redis.fromEnv();

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = allServices.find((service) => service.slug === params.slug);

  if (!service) {
    notFound();
  }

  const views = await redis.get<number>(["pageviews", "services", params.slug].join(":")) ?? 0;
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <ServiceHeader 
        service={{
          title: service.title,
          description: service.description,
          url: service.url
        }} 
        views={views} 
      />
      <main className="px-4 py-12 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <div className="prose dark:prose-invert max-w-none">
          <MdxContent code={service.body.code} />
        </div>
      </main>
    </div>
  );
}

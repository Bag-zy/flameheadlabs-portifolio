import Link from "next/link";
import { Eye } from "lucide-react";
import { Card } from "../components/card";

interface ServiceCardProps {
  service: {
    slug: string;
    title: string;
    description: string;
    date?: string;
  };
  views?: number;
}

export function ServiceCard({ service, views = 0 }: ServiceCardProps) {
  return (
    <Card>
      <Link href={`/services/${service.slug}`} className="block group">
        <article className="relative w-full h-full p-4 md:p-6">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-100">
              {service.date ? (
                <time dateTime={new Date(service.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(service.date))}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Eye className="w-4 h-4" />
              <span>{Intl.NumberFormat("en-US").format(views)}</span>
            </span>
          </div>
          <h2 className="mt-4 text-xl font-bold text-zinc-100 group-hover:text-white sm:text-2xl font-display">
            {service.title}
          </h2>
          <p className="mt-2 text-sm leading-6 duration-150 text-zinc-400 group-hover:text-zinc-300">
            {service.description}
          </p>
          <div className="mt-4">
            <p className="text-sm text-zinc-200 hover:text-zinc-50">
              Learn more <span aria-hidden="true">→</span>
            </p>
          </div>
        </article>
      </Link>
    </Card>
  );
}

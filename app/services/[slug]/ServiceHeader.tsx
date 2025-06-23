"use client";
import { ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type ServiceHeaderProps = {
  service: {
    title: string;
    description: string;
    url?: string;
  };
  views: number;
};

export const ServiceHeader: React.FC<ServiceHeaderProps> = ({ service, views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links = [];
  if (service.url) {
    links.push({
      label: "Learn More",
      href: service.url,
    });
  }

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <Eye className="w-5 h-5" />
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
            </span>
          </div>

          <Link
            href="/services"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-display">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              {service.description}
            </p>
          </div>
          {links.length > 0 && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

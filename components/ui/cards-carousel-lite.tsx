"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

type LiteCardData = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

interface LiteCarouselProps {
  items: React.ReactNode[];
}

export function LiteCarousel({ items }: LiteCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tickingRef = useRef(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const updateScrollability = () => {
    const el = ref.current;
    if (!el) return;
    const left = el.scrollLeft > 0;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    if (left !== canScrollLeft) setCanScrollLeft(left);
    if (right !== canScrollRight) setCanScrollRight(right);
  };

  useEffect(() => {
    updateScrollability();
    const onResize = () => {
      const el = ref.current;
      if (!el) return;
      setContainerWidth(el.clientWidth);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true } as any);
    return () => window.removeEventListener("resize", onResize as any);
  }, []);

  const scrollByAmount = (amount: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div
        ref={ref}
        onScroll={() => {
          if (tickingRef.current) return;
          tickingRef.current = true;
          requestAnimationFrame(() => {
            updateScrollability();
            const el = ref.current;
            if (el) setScrollLeft(el.scrollLeft);
            tickingRef.current = false;
          });
        }}
        className={cn(
          "flex w-full gap-4 overflow-x-auto scroll-smooth py-10 md:py-20",
          "snap-x snap-proximity overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
        style={{ willChange: "scroll-position" }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-row gap-4 px-4">
          {items.map((item, idx) => {
            const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
            const cardWidth = isMobile ? 256 : 384; // w-64 vs w-96
            const gap = 16; // gap-4
            const visibleCount = Math.max(1, Math.ceil(containerWidth / (cardWidth + gap)) + 4);
            const startIndex = Math.max(0, Math.floor(scrollLeft / (cardWidth + gap)) - 2);
            const endIndex = Math.min(items.length - 1, startIndex + visibleCount);
            const isVisible = idx >= startIndex && idx <= endIndex;
            return (
              <div key={idx} className="snap-center last:pr-[20%] md:last:pr-[33%]" style={{ contain: "content" }}>
                {isVisible ? (
                  item
                ) : (
                  <div className="h-48 w-64 md:h-[20rem] md:w-96" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mr-10 flex justify-end gap-2">
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={() => scrollByAmount(-320)}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={() => scrollByAmount(320)}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export function LiteCard({ card }: { card: LiteCardData }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => setOpen(false));

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 h-screen overflow-auto">
          <div className="fixed inset-0 bg-black/70" />
          <div
            ref={containerRef}
            className="relative z-50 mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            role="dialog"
            aria-modal="true"
            aria-label={`${card.title} details`}
          >
            <button
              className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <p className="text-base font-medium text-black dark:text-white">{card.category}</p>
            <p className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">{card.title}</p>
            <div className="py-10">{card.content}</div>
          </div>
        </div>
      )}
      <div className="group relative z-10 flex h-48 w-64 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[20rem] md:w-96 dark:bg-neutral-900" style={{ contain: "content" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 z-40 flex items-end bg-black/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:bg-black/40">
          <div className="w-full p-4">
            <p className="text-left font-sans text-sm font-medium text-white/90">{card.category}</p>
            <p className="mt-1 max-w-xs text-left font-sans text-lg font-semibold text-white md:text-2xl">{card.title}</p>
            <button
              onClick={() => setOpen(true)}
              className="mt-3 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white"
            >
              Read more
            </button>
          </div>
        </div>
        <LiteImage src={card.src} alt={card.title} className="absolute inset-0 z-10 h-full w-full object-cover transform-gpu translate-z-0" sizes="(max-width: 768px) 256px, 384px" />
      </div>
    </>
  );
}

type LiteImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  width?: number;
  height?: number;
};

function LiteImage({ src, className, alt, width, height, ...rest }: LiteImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const buildUnsplashUrl = (base: string, w: number, q = 70) => {
    try {
      const url = new URL(base);
      if (url.hostname.includes("images.unsplash.com")) {
        url.searchParams.set("w", String(w));
        url.searchParams.set("q", String(q));
        url.searchParams.set("auto", "format");
        url.searchParams.set("fit", url.searchParams.get("fit") || "crop");
        return url.toString();
      }
    } catch {}
    return base;
  };

  const isUnsplash = src.includes("images.unsplash.com");
  const src480 = isUnsplash ? buildUnsplashUrl(src, 480) : src;
  const src768 = isUnsplash ? buildUnsplashUrl(src, 768) : src;
  const src1200 = isUnsplash ? buildUnsplashUrl(src, 1200) : src;
  const src1600 = isUnsplash ? buildUnsplashUrl(src, 1600) : src;

  const srcSet = isUnsplash
    ? `${src480} 480w, ${src768} 768w, ${src1200} 1200w, ${src1600} 1600w`
    : undefined;

  const sizes = "(max-width: 768px) 256px, (max-width: 1024px) 384px, 384px";

  return (
    <img
      src={src1200}
      srcSet={srcSet}
      sizes={isUnsplash ? sizes : undefined}
      className={cn("h-full w-full transition-opacity duration-200", isLoading ? "opacity-0" : "opacity-100", className)}
      onLoad={() => setIsLoading(false)}
      loading="lazy"
      decoding="async"
      draggable={false}
      alt={alt ?? "Image"}
      width={width}
      height={height}
      {...rest}
    />
  );
}

export type { LiteCardData };



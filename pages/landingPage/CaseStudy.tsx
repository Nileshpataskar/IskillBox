import TitleH1, { TitleH1Props } from "@/components/ui/TitleH1";
import { useRef, useCallback, useMemo } from "react";

export interface CardItem {
    id: string | number;
    image: string;
    alt?: string;
    title?: string;
    excerpt?: string;
    href?: string;
}

export interface CaseStudyProps {
    topCards: CardItem[];
    bottomWorks: CardItem[];
    titleProps?: TitleH1Props;
    className?: string;
}

const ArrowButton: React.FC<{ onClick: () => void; left?: boolean }> = ({ onClick, left }) => (
    <button
        onClick={onClick}
        aria-label={left ? "Scroll left" : "Scroll right"}
        className={`p-2 rounded-full shadow-md bg-white/95 hover:bg-white focus:outline-none`}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${left ? "-rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
            />
        </svg>
    </button>
);

export const CaseStudy: React.FC<CaseStudyProps> = ({
    topCards,
    bottomWorks,
    titleProps,
    className = "",
}) => {
    const topRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);

    // Safety check to prevent mapping over undefined data
    if (!topCards || !bottomWorks) {
        return null; // or return a loading state
    }

    const scrollByWidth = useCallback((container: HTMLDivElement | null, direction = 1) => {
        if (!container) return;
        const width = container.clientWidth;
        container.scrollBy({ left: width * direction, behavior: "smooth" });
    }, []);

    // Memoize the card components to prevent unnecessary re-renders
    const topCardElements = useMemo(() =>
        (topCards || []).map((c) => (
            <article
                key={c.id}
                className="group relative w-72 md:w-[400px] flex-shrink-0 rounded-xl overflow-hidden bg-black/90 ring-1 ring-black/10 hover:ring-white/10 hover:-translate-y-1  transition-all duration-500 ease-out"
            >
                {/* Image area */}
                <div className="w-full h-56 md:h-64 lg:h-96 relative rounded-sm overflow-hidden">
                    <img
                        src={c.image}
                        alt={c.alt ?? c.title ?? "project"}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover brightness-75 transition-all duration-700 ease-out group-hover:scale-110"
                        style={{ contentVisibility: "auto" }}
                    />

                    <div className="absolute inset-0">
                        <div className="absolute font-serif inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/10 transition-colors duration-500 ease-out group-hover:from-blue-800 group-hover:via-black-900/60 group-hover:to-black-600/30" />

                        <div className="absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-300 ease-out group-hover:opacity-0">
                            {c.excerpt && (
                                <p className=" text-center font-semibold text-white/90 text-sm md:text-lg leading-relaxed">
                                    {c.excerpt}
                                </p>
                            )}
                            <h4 className="text-white text-center font-extrabold text-2xl md:text-3xl leading-tight">
                                {c.title}
                            </h4>
                        </div>

                        {/* Hover state: title centered + CTA */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 ease-out text-center group-hover:opacity-100">
                            <div className="flex-1 flex items-center justify-center">
                                <h4 className="text-white font-extrabold text-2xl md:text-3xl leading-tight text-center opacity-0 translate-y-4 scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                    {c.title}
                                </h4>
                            </div>
                            {c.href && (
                                <div className="flex justify-center">
                                    <a
                                        href={c.href}
                                        className="w-40 inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/80 text-white font-semibold tracking-wide shadow-sm opacity-0 translate-y-6 scale-90 pointer-events-none transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto hover:bg-white hover:text-black delay-200"
                                        aria-label={`Read more about ${c.title}`}
                                    >
                                        READ MORE
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        )), [topCards]);

    const bottomWorkElements = useMemo(() =>
        (bottomWorks || []).map((w) => (
            <div
                key={w.id}
                className="group w-72 md:w-[450px] flex-shrink-0 rounded-2xl overflow-hidden bg-black/90 ring-1 ring-black/10 hover:ring-white/10 transition-all duration-500 ease-out"
            >
                <div className="w-full h-48 md:h-54 relative overflow-hidden">
                    <img
                        src={w.image}
                        alt={w.alt ?? w.title ?? "work"}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover brightness-75 transition-all duration-700 ease-out group-hover:scale-110"
                        style={{ contentVisibility: "auto" }}
                    />

                    {/* Improved hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-100 transition-all duration-500 ease-out">
                        <div className="absolute inset-0 flex items-end p-4">
                            <div className="w-full">
                                <h4 className="text-white font-bold text-lg md:text-xl leading-tight transition-transform duration-300 ease-out group-hover:-translate-y-0.5">{w.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )), [bottomWorks]);

    return (
        <div className={`w-full  bg-blue-50  ${className}`}>
            {/* Top carousel of interactive cards */}
            <div className="max-w-full mx-auto px-4 md:px-6 lg:px-20 mb-8 md:mb-12">
                <div className="relative">
                    <div
                        ref={topRef}
                        className="overflow-x-auto scroll-smooth flex gap-4 md:gap-6 py-4 px-2 items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                        style={{ WebkitOverflowScrolling: "touch", willChange: "scroll-position" }}
                    >
                        {topCardElements}
                    </div>
                </div>
            </div>

            {/* Bottom: two-column section */}
            <div className="w-full mx-auto  py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left: TitleH1 (50%) */}
                    <div className="w-full lg:w-[50%]">
                        <div className=" rounded-2xl h-full p-6 md:p-12 lg:p-16 flex items-center justify-center ">
                            <TitleH1 {...(titleProps ?? {})} />
                        </div>
                    </div>

                    {/* Right: single showcase image (50%) */}
                    <div className="w-full lg:w-[50%]">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl m-5 ring-1 ring-black/5">
                            <img
                                src="/landing/pbp.jpg"
                                alt="Showcase"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-[360px] md:h-[460px] lg:h-[450px]  object-cover"
                                style={{ contentVisibility: "auto" }}
                            />
                            {/* subtle gradient and border glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
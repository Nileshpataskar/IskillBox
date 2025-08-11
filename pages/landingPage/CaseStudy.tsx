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
    topCards: CardItem[]; // interactive cards shown above
    bottomWorks: CardItem[]; // previous works carousel on the right
    /** Optional props to pass into TitleH1 on the left of bottom section */
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

    const scrollByWidth = useCallback((container: HTMLDivElement | null, direction = 1) => {
        if (!container) return;
        const width = container.clientWidth;
        container.scrollBy({ left: width * direction, behavior: "smooth" });
    }, []);

    // Memoize the card components to prevent unnecessary re-renders
    const topCardElements = useMemo(() => 
        topCards.map((c) => (
            <article
                key={c.id}
                className="group relative w-72 md:w-80 lg:w-96 flex-shrink-0 rounded-2xl overflow-hidden bg-white  hover:shadow-2xl transition-all duration-500 ease-out"
            >
                {/* Image area */}
                <div className="w-full h-56 md:h-64 lg:h-72 relative overflow-hidden">
                    <img
                        src={c.image}
                        alt={c.alt ?? c.title ?? "project"}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                        style={{ contentVisibility: "auto" }}
                    />

                    {/* Hover overlay with improved design */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="absolute inset-0 flex items-end p-6">
                            <div className="w-full space-y-3">
                                <h4 className="text-white font-bold text-xl md:text-2xl leading-tight">{c.title}</h4>
                                {c.excerpt && (
                                    <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-3">
                                        {c.excerpt}
                                    </p>
                                )}
                                {c.href && (
                                    <a
                                        href={c.href}
                                        className="inline-flex items-center mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 border border-white/30 hover:border-white"
                                        aria-label={`Read more about ${c.title}`}
                                    >
                                        Read more 
                                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )), [topCards]);

    const bottomWorkElements = useMemo(() => 
        bottomWorks.map((w) => (
            <div
                key={w.id}
                className="group w-72 md:w-[500px] flex-shrink-0 rounded-2xl overflow-hidden  hover:shadow-2xl bg-white transition-all duration-500 ease-out"
            >
                <div className="w-full h-48 md:h-72 relative overflow-hidden">
                    <img
                        src={w.image}
                        alt={w.alt ?? w.title ?? "work"}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                        style={{ contentVisibility: "auto" }}
                    />

                    {/* Improved hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="absolute inset-0 flex items-end p-4">
                            <div className="w-full">
                                <h4 className="text-white font-bold text-lg md:text-xl leading-tight">{w.title}</h4>
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
            <div className="w-full mx-auto px-4 md:px-6 lg:px-20 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left: TitleH1 (50%) */}
                    <div className="w-full lg:w-[50%]">
                        <div className=" rounded-2xl h-full p-6 md:p-12 lg:p-16 flex items-center justify-center ">
                            <TitleH1 {...(titleProps ?? {})} />
                        </div>
                    </div>

                    {/* Right: previous works larger cards (50%) */}
                    <div className="w-full lg:w-[50%]">
                        <div className="relative">
                            <div
                                ref={rightRef}
                                className="overflow-x-auto scroll-smooth flex gap-4 md:gap-6 py-4 px-2 items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                style={{ WebkitOverflowScrolling: "touch", willChange: "scroll-position" }}
                            >
                                {bottomWorkElements}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
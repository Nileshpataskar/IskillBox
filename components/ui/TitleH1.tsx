import React from "react";

export interface TitleH1Props {
    /** Main title text (required) */
    title?: string;
    /** Optional description text (not mandatory) */
    description?: string;
    /** Optional link object. When provided, renders a bold, underlined link the same size as description */
    link?: {
        text: string;
        href: string;
        /** Optional: whether link should open in new tab */
        newTab?: boolean;
    };
    /** Height of the vertical accent line in pixels. If omitted, defaults to 80 (same as h-20). */
    lineHeight?: number;
    /** Extra wrapper classes if you want to tweak layout */
    className?: string;
    /** Custom styling for the title */
    titleClassName?: string;
    /** Custom styling for the description */
    descriptionClassName?: string;
    /** Custom styling for the link */
    linkClassName?: string;
    /** Custom styling for the accent line */
    accentLineClassName?: string;
    /** Disable the component's default vertical padding */
    disableDefaultPadding?: boolean;
}

/**
 * A simple, responsive "Powered by Purpose" hero component.
 * - Built for Next.js + TypeScript
 * - TailwindCSS for styling (no external CSS required)
 *
 * Props:
 *  - title: main heading (default: "Powered by Purpose")
 *  - description: optional paragraph under the title
 *  - link: optional object { text, href, newTab } — renders bold + underlined link at the same size as the description
 *  - lineHeight: optional number (px) to control the vertical accent line height. Defaults to 80.
 *  - titleClassName: custom classes for the title (e.g., text size, color, font weight)
 *  - descriptionClassName: custom classes for the description text
 *  - linkClassName: custom classes for the link styling
 *  - accentLineClassName: custom classes for the vertical accent line
 *
 * Behaviour changes requested:
 *  - When `description` is not provided the title/link block will be vertically centered relative to the accent line.
 *  - You can pass `lineHeight` to change the line's height; the component will center automatically when description is absent.
 */

const TitleH1: React.FC<TitleH1Props> = ({
    title = "Powered by Purpose",
    description,
    link,
    lineHeight,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    linkClassName = "",
    accentLineClassName = "",
    disableDefaultPadding = false,
}) => {
    const hasDescription = Boolean(description);
    const accentHeight = typeof lineHeight === "number" ? lineHeight : 80; // default 80px (h-20)

    return (
        <section
            className={`w-fit ${disableDefaultPadding ? '' : 'py-8 md:py-12'} ${className}`}
            aria-labelledby="powered-by-purpose-heading"
        >
            <div
                className={`max-w-3xl md:max-w-4xl mx-auto flex ${hasDescription ? "items-start" : "items-center"} gap-5 md:gap-6`}
            >
                {/* Vertical accent line */}
                <div className={hasDescription ? "mt-2" : ""}>
                    <div
                        className={`w-1 bg-gradient-to-b from-lime-400 to-emerald-500 rounded ${accentLineClassName}`}
                        style={{ height: accentHeight }}
                        aria-hidden
                    />
                </div>

                {/* Text content */}
                <div className="flex flex-col">
                    <h2
                        id="powered-by-purpose-heading"
                        className={`text-2xl md:text-[34px] font-extrabold tracking-tight text-[#1F2A44] leading-tight ${titleClassName}`}
                    >
                        {title}
                    </h2>

                    {description && (
                        <p className={`mt-3 text-[15px] md:text-lg text-gray-600/90 max-w-2xl ${descriptionClassName}`}>
                            {description}{' '}
                            {link && (
                                <a
                                    href={link.href}
                                    target={link.newTab ? '_blank' : undefined}
                                    rel={link.newTab ? 'noopener noreferrer' : undefined}
                                    className={`font-semibold underline underline-offset-2 text-[#1F2A44] hover:text-black ${linkClassName}`}
                                >
                                    {link.text}
                                </a>
                            )}
                        </p>
                    )}

                    {/* If no description but link is provided, render link on its own (same size as description) */}
                    {!description && link && (
                        <p className={`mt-3 text-base md:text-lg text-gray-600 max-w-2xl ${descriptionClassName}`}>
                            <a
                                href={link.href}
                                target={link.newTab ? '_blank' : undefined}
                                rel={link.newTab ? 'noopener noreferrer' : undefined}
                                className={`font-semibold underline underline-offset-2 ${linkClassName}`}
                            >
                                {link.text}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TitleH1;

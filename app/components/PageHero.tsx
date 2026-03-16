import Image from "next/image";
import heroBgReuse from "@/app/assets/heroBgReuse.png";

export interface PageHeroProps {
  /** Sub-headline above the main title (e.g. "Get In Touch") */
  subtitle: string;
  /** Main heading (e.g. "Contact Us") */
  title: string;
  /** Descriptive text below the title */
  description: string;
}

export function PageHero({ subtitle, title, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] w-full overflow-hidden sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroBgReuse}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Centered content */}
      <div className="relative flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[55vh] sm:px-6 sm:py-20 md:min-h-[60vh] md:px-8 md:py-24 lg:min-h-[65vh]">
        <p className="mb-3 text-xl font-medium text-[#4285F4] sm:mb-4 sm:text-2xl md:text-3xl">
          {subtitle}
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-white sm:text-lg md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}

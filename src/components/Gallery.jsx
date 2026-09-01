"use client";

import Image from "next/image";

const photos = [
  {
    src: "/pic1.jpg",
    alt: "Siddhu and Kavu",
  },
  {
    src: "/pic2.jpg",
    alt: "Siddhu and Kavu",
  },
  {
    src: "/pic3.jpg",
    alt: "Siddhu and Kavu",
  },
  {
    src: "/pic4.jpg",
    alt: "Siddhu and Kavu",
  },
];

export default function Gallery() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#FFF8ED] px-5 py-8">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#C9A227]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#7A1F2B]/10 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Heading */}
        <div className="mb-7 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#C9A227]">
            Beautiful Memories
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#7A1F2B] sm:text-5xl md:text-6xl">
            Our Gallery
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />
            <span className="text-lg text-[#C9A227]">♥</span>
            <span className="h-px w-10 bg-[#C9A227]" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#3B2520]/65">
            A collection of beautiful moments from the journey of
            Siddhu & Kavu.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl border border-[#C9A227]/30 bg-[#F7E7CE] shadow-sm ${
                index === 0
                  ? "aspect-[4/5]"
                  : index === 3
                    ? "aspect-[4/5]"
                    : "aspect-[4/5]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-1000 group-hover:scale-105"
                priority={index < 2}
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2520]/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Gold corner */}
              <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#E8D19A] opacity-80" />

              <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#E8D19A] opacity-80" />
            </div>
          ))}
        </div>

        {/* Couple name */}
        <div className="mt-6 text-center">
          <p className="font-serif text-xl text-[#7A1F2B]">
            Siddhu <span className="mx-2 text-[#C9A227]">♥</span> Kavu
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#3B2520]/50">
            23 • 12 • 2026
          </p>
        </div>
      </div>
    </section>
  );
}

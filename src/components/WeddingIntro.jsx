export default function WeddingIntro() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#FFF8ED]">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#7A1F2B]/10 blur-3xl" />

      <div className="relative text-center">
        <p className="mb-8 text-sm tracking-[0.5em] text-[#C9A227]">
          शुभविवाह
        </p>

        <h1 className="font-serif text-5xl tracking-wide text-[#7A1F2B] md:text-7xl">
          Siddhartha
        </h1>

        <p className="mt-2 text-sm tracking-[0.3em] text-[#3B2520]/70">
          Siddhu
        </p>

        <div className="my-6 text-4xl text-[#C9A227]">♥</div>

        <h1 className="font-serif text-5xl tracking-wide text-[#7A1F2B] md:text-7xl">
          Kavya
        </h1>

        <p className="mt-2 text-sm tracking-[0.3em] text-[#3B2520]/70">
          Kavu
        </p>

        <div className="mx-auto mt-10 h-px w-24 bg-[#C9A227]" />

        <p className="mt-6 text-sm tracking-[0.35em] text-[#3B2520]">
          23 DECEMBER 2026
        </p>
      </div>
    </section>
  );
}
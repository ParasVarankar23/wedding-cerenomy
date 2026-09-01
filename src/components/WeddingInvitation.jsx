export default function WeddingInvitation() {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-[#FFF8ED] px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#C9A227]">
          Wedding Invitation
        </p>

        <h2 className="font-serif text-4xl text-[#7A1F2B] md:text-6xl">
          With the blessings of our families
        </h2>

        <p className="mt-8 text-lg leading-8 text-[#3B2520]/80">
          We invite you to celebrate the beautiful beginning of a new
          journey as
        </p>

        <div className="mt-8">
          <p className="font-serif text-3xl text-[#7A1F2B]">
            Siddhartha Krishna Patil
          </p>

          <p className="my-3 text-2xl text-[#C9A227]">&</p>

          <p className="font-serif text-3xl text-[#7A1F2B]">
            Kavya Ravindra Todankar
          </p>
        </div>

        <p className="mt-8 text-sm tracking-[0.25em] text-[#3B2520]">
          23 • 12 • 2026
        </p>
      </div>
    </section>
  );
}
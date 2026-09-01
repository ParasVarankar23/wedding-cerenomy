export default function FamilySection() {
  return (
    <section className="flex h-screen items-center justify-center bg-[#7A1F2B] px-6 text-center text-[#FFF8ED]">
      <div>
        <p className="text-sm tracking-[0.35em] text-[#E8D19A]">
          WITH THE BLESSINGS OF
        </p>

        <h2 className="mt-6 font-serif text-6xl md:text-7xl">
          Our Families
        </h2>

        <div className="mx-auto mt-10 grid max-w-2xl gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl text-[#E8D19A]">
              Siddhu's Family
            </h3>

            <p className="mt-4 text-[#FFF8ED]/80">
              Krishna Patil
              <br />
              Radha
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#E8D19A]">
              Kavu's Family
            </h3>

            <p className="mt-4 text-[#FFF8ED]/80">
              Ravindra Todankar
              <br />
              Rukmini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
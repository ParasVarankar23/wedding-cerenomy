"use client";

import { useEffect, useState } from "react";

import WeddingIntro from "@/components/WeddingIntro";
import WeddingInvitation from "@/components/WeddingInvitation";
import MatrimonyStory from "@/components/MatrimonyStory";
import Countdown from "@/components/Countdown";
import ChorMakhu from "@/components/ChorMakhu";
import Sakharpuda from "@/components/Sakharpuda";
import KharMaku from "@/components/KharMaku";
import Haldi from "@/components/Haldi";
import WeddingCeremony from "@/components/WeddingCeremony";
import Gallery from "@/components/Gallery";
import FamilySection from "@/components/FamilySection";
import VenueSection from "@/components/VenueSection";
import RSVP from "@/components/RSVP";
import FinalReveal from "@/components/FinalReveal";

const chapters = [
  { component: WeddingIntro, duration: 6000 },
  { component: WeddingInvitation, duration: 8000 },
  { component: MatrimonyStory, duration: 12000 },
  { component: Countdown, duration: 8000 },

  { component: ChorMakhu, duration: 8000 },
  { component: Sakharpuda, duration: 10000 },
  { component: KharMaku, duration: 8000 },
  { component: Haldi, duration: 10000 },
  { component: WeddingCeremony, duration: 15000 },

  { component: Gallery, duration: 20000 },
  { component: FamilySection, duration: 12000 },
  { component: VenueSection, duration: 10000 },
  { component: RSVP, duration: 12000 },
  { component: FinalReveal, duration: 10000 },
];

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentDuration = chapters[currentChapter].duration;

    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentChapter((prev) =>
          prev < chapters.length - 1 ? prev + 1 : 0
        );

        setIsVisible(true);
      }, 700);
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [currentChapter]);

  const ChapterComponent = chapters[currentChapter].component;

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#FFF8ED]">
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-[1.03]"
        }`}
      >
        <ChapterComponent />
      </div>

      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 gap-1.5">
        {chapters.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentChapter
                ? "w-7 bg-[#C9A227]"
                : "w-1.5 bg-[#7A1F2B]/30"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-12-23T00:00:00");

function getTimeLeft() {
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-screen w-full items-center justify-center bg-[#FFF8ED] px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#C9A227]">
          The Countdown
        </p>

        <h2 className="mt-5 font-serif text-5xl text-[#7A1F2B] md:text-7xl">
          Until Forever
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["Days", time.days],
            ["Hours", time.hours],
            ["Minutes", time.minutes],
            ["Seconds", time.seconds],
          ].map(([label, value]) => (
            <div
              key={label}
              className="min-w-28 border border-[#C9A227]/40 px-5 py-6"
            >
              <div className="font-serif text-4xl text-[#7A1F2B]">
                {String(value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#3B2520]/60">
                {label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm tracking-[0.3em] text-[#3B2520]">
          23 DECEMBER 2026
        </p>
      </div>
    </section>
  );
}
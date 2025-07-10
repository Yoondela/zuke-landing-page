"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import cards from "@/data/card-data.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Workflows() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardList, setCardList] = useState([...cards, ...cards, ...cards, ...cards]);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const handleGetStarted = async (link: string, index: number) => {
    setLoadingIndex(index);
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Replace with your real API
      const data = await response.json();
  
      console.log("API Result:", data);
  
      window.open(link, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Failed to fetch:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoadingIndex(null);
    }
  };
  

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft <= 0 || el.scrollLeft >= maxScroll) {
        el.scrollLeft = maxScroll / 2;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20 text-center">
          <h2 className="mt-12 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-orange-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Begin your product journey
          </h2>
          <p className="text-lg pb-8 text-indigo-200/65">
            We combine business development, creative branding, marketing, and technology to help you succeed.
          </p>
          <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Our Ecosystem
            </span>
          </div>
        </div>

        <div className="flex items-center gap-12">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex rounded-full bg-gray-800/70 p-3 hover:bg-gray-700"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto rounded-2xl px-2 no-scrollbar pb-16"
          >
            <div className="flex gap-6 min-w-[1100px] pb-3">
              {cardList.map((card, index) => (
                <div
                  key={index}
                  className="min-w-[320px] max-w-[350px] flex-shrink-0 relative overflow-hidden rounded-2xl bg-gray-800 p-px"
                >
                  <div className="relative z-10 h-full overflow-hidden rounded-[inherit] bg-gray-950 flex flex-col justify-between">
                    <div className="relative z-10">
                      <Image
                        className="inline-flex"
                        src={card.image}
                        width={350}
                        height={200}
                        alt={card.title}
                      />
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                              {card.title}
                            </span>
                          </span>
                        </div>
                        <p className="text-indigo-200/65">{card.description}</p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 relative z-10">
                      <button
                        onClick={() => handleGetStarted(card.link, index)}
                        className={`w-full rounded-lg py-2 text-sm font-semibold transition flex items-center justify-center ${
                          loadingIndex === index
                            ? "bg-indigo-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-500"
                        } text-white`}
                        disabled={loadingIndex === index}
                      >
                        {loadingIndex === index ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Loading...
                          </span>
                        ) : (
                          "Get Started"
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Background overlay */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 rounded-[inherit]" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:flex rounded-full bg-gray-800/70 p-3 hover:bg-gray-700"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

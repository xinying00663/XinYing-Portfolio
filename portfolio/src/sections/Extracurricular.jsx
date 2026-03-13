import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { extraCurricularCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Extracurricular = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card", sectionRef.current).forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.utils.toArray(".timeline", sectionRef.current).forEach((line) => {
      gsap.to(line, {
        transformOrigin: "bottom bottom",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top center",
          end: "70% center",
          onUpdate: (self) => {
            gsap.to(line, { scaleY: 1 - self.progress });
          },
        },
      });
    });

    gsap.utils.toArray(".expText", sectionRef.current).forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="extracurricular"
      ref={sectionRef}
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Extracurricular Activities"
          sub="Clubs and activities I am involved in"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {extraCurricularCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="flex flex-col items-center justify-center p-6 min-h-[160px] gap-1">
                      <p className="text-white-50 text-xs uppercase tracking-widest">Year</p>
                      <p className="text-white font-bold text-4xl text-center">{card.year}</p>
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src="/images/time.png" alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">Contributions</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((item, index) => (
                            <li key={index} className="text-lg">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;

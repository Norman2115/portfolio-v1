"use client";
import React, { useEffect, useRef, useState } from "react";
import { skills } from "@/constants/skills";
import Image from "next/image";

function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const skillIndex = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );

          if (entry.isIntersecting) {
            setVisibleSkills((prevVisible) => {
              if (!prevVisible.includes(skillIndex)) {
                return [...prevVisible, skillIndex];
              }
              return prevVisible;
            });
          } else {
            setVisibleSkills((prevVisible) =>
              prevVisible.filter((index) => index !== skillIndex)
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center px-4 md:px-10">
      <div className="max-w-[1200px] flex flex-col items-center">
        <h1 className="font-extrabold text-center text-3xl md:text-4xl mt-24">
          My Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                skillRefs.current[index] = el;
              }}
              data-index={index}
              className={`flex flex-row space-x-4 items-center bg-dark-gray px-6 py-3 rounded-lg ${
                visibleSkills.includes(index) ? "slideInUp" : "opacity-0"
              }`}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className=""
              />
              <p className="text-sm md:text-base lg:text-lg font-normal break-words">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
import React from "react";
import FadeInUpSection from "./FadeInUpSection";
import DividerWithText from "./DividerWithText";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex justify-center bg-[#1C1D20]">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-10 mt-24 mb-24">
        <h1 className="text-3xl font-extrabold text-center md:text-4xl">
          About Me
        </h1>
        <DividerWithText text="Who I am" />
        <div className="w-full flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/3 flex justify-center items-center p-10">
            <Image
              src="/images/ChungHenn2.jpeg"
              alt="Chung Henn 2"
              width={300}
              height={400}
              className="rounded-3xl transition-transform duration-300 hover:scale-105"
              priority={true}
            />
          </div>
          <div className="w-full lg:w-2/3 text-justify p-10">
            <h1 className="text-xl md:text-2xl font-medium mb-3"><span className="text-teal">What&apos;s up!</span></h1>
            <p className="text-base md:text-lg text-[#D9D9D9] font-normal">
              I&apos;m a student developer with a love-hate relationship with both frontend and backend development. Despite the challenges, I find coding to be incredibly fun and rewarding, therefore aspiring to become a <span className="text-teal">full stack developer</span> — a dream career I have been holding onto for years. I&apos;m currently in my second year of pursuing a Computer Science degree at INTI International University.
            </p>
            <br />
            <p className="text-base md:text-lg text-[#D9D9D9] font-normal mb-5">
              I love taking on new challenges and competing in hackathons. I&apos;m always looking for opportunities to learn and grow, and I&apos;m excited to see where my coding journey takes me. When I&apos;m not coding, you&apos;ll likely find me playing basketball or computer games with friends, or planning exciting trips to new destinations with my loved ones.
            </p>
            <div className="flex flex-row space-x-3 items-center">
              <FaHeart size={30} className="text-teal transition-transform duration-300 hover:text-ligter-teal hover:scale-110" />
              <p className="text-sm md:text-base text-medium-light-grey font-medium">21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

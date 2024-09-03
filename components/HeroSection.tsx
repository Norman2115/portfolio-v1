"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import Typewriter from 'typewriter-effect';

function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row px-6">
        {/* Left */}
        <div className="md:w-3/5 flex flex-col justify-center text-left">
          <h1 className="text-4xl md:text-5xl font-black mb-5">
            Hi, I&apos;m Chung Henn.
          </h1>
          <h1 className="text-4xl md:text-5xl text-teal font-black mb-7">
            <Typewriter
              options={{
                strings: ["CS Undergraduate", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="flex justify-start space-x-4 mb-12">
            <Link
              href="https://www.instagram.com/norman_tchenn?igsh=MWQ2ZTl0ZXkyZDY3dw%3D%3D&utm_source=qr"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={40} />
            </Link>
            <Link
              href="https://medium.com/@normantch04"
              target="_blank"
              aria-label="Medium"
            >
              <FaMedium size={40} />
            </Link>
            <Link
              href="https://github.com/Norman2115"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub size={40} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/chung-henn-teo"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link href="/" target="_blank" aria-label="Twitter">
              <FaTwitter size={40} />
            </Link>
          </div>
          <button className="px-14 py-4 text-xl font-medium bg-teal rounded-full hover:bg-ligter-teal transition duration-300 self-start">
            Resume
          </button>
        </div>
        {/* Right */}
        <div className="md:w-2/5 hidden md:flex items-center justify-center">
          <Image
            src="/images/ChungHenn.jpeg"
            alt="Chung Henn"
            width={400}
            height={400}
            className="rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

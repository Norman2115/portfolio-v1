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
import { contact } from "@/constants/contact";

function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row px-6">
        {/* Left */}
        <div className="md:w-3/5 flex flex-col justify-center items-center text-center md:items-start md:text-left">
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
              href={contact.instagram}
              target="_blank"
              aria-label="Instagram"
              className="hover:text-teal transition-transform duration-200 hover:scale-105"
            >
              <FaInstagram size={40} />
            </Link>
            <Link
              href={contact.medium}
              target="_blank"
              aria-label="Medium"
              className="hover:text-teal transition-transform duration-200 hover:scale-110"
            >
              <FaMedium size={40} />
            </Link>
            <Link
              href={contact.github}
              target="_blank"
              aria-label="Github"
              className="hover:text-teal transition-transform duration-200 hover:scale-110"
            >
              <FaGithub size={40} />
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              aria-label="Linkedin"
              className="hover:text-teal transition-transform duration-200 hover:scale-110"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link
              href={contact.twitter}
              target="_blank"
              aria-label="Twitter"
              className="hover:text-teal transition-transform duration-200 hover:scale-110"
            >
              <FaTwitter size={40} />
            </Link>
          </div>
          <button className="px-14 py-4 text-xl font-medium bg-teal rounded-full hover:bg-ligter-teal transition duration-300">
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
            className="rounded-full transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

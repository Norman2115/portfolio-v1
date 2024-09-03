"use client";
import Link from "next/link";
import React, { useCallback, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section[id]");
    let currentSection = "";

    sections.forEach((section) => {
      const element = section as HTMLElement;
      const sectionTop = element.offsetTop;
      console.log("scrollY: " + window.scrollY);
      console.log("offsetTop: " + element.offsetTop);
      if (window.scrollY >= sectionTop - 1) {
        currentSection = section.getAttribute("id") || "";
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const getLinkClass = (section: string) =>
    activeSection === section
      ? "bg-teal text-white rounded-lg px-4 py-2"
      : "text-nav-bar-link hover:bg-teal hover:rounded-lg hover:text-white px-4 py-2";

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between px-16 py-4 z-50 backdrop-filter backdrop-blur-md bg-dark-background/75">
      <h1 className="font-extrabold text-lg text-medium-light-grey flex items-center">
        CHUNG HENN TEO
      </h1>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <FaTimes size={20} className="text-nav-bar-link" />
          ) : (
            <FaBars size={20} className="text-nav-bar-link" />
          )}
        </button>
      </div>
      <div className="hidden lg:flex flex-row items-center space-x-8">
        {["home", "about", "skill", "project", "contact"].map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={getLinkClass(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-background p-10 z-40 flex flex-col space-y-4 lg:hidden rounded-xl bg-dark-background">
          {["home", "about", "skill", "project", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={getLinkClass(section)}
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopNavBar;

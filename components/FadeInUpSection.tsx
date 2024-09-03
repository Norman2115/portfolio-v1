"use client";
import React, { useEffect, useRef, useState } from "react";

const FadeInUpSection = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "fadeInUp" : "opacity-0 translate-y-2"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInUpSection;

import React from "react";
import FadeInUpSection from "./FadeInUpSection";

function About() {
  return (
    <div className="min-h-[80vh] flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-10">
        <h1 className="mt-24 text-3xl font-extrabold text-center md:text-4xl">
          About Me
        </h1>
        <h2 className="mt-7 text-xl font-medium text-center md:text-2xl">
          An <span className="text-teal">aspiring</span> full stack developer
          from Nilai, Negeri Sembilan, Malaysia.
        </h2>
        <div className="w-full mx-auto mt-10 lg:max-w-[80%]">
          <FadeInUpSection>
            <p className="px-14 py-10 text-center text-medium-light-grey text-lg md:text-xl rounded-3xl bg-dark-gray">
              A computer science undergrad with a solid foundation in{" "}
              <span className="text-teal">frontend</span> technologies like{" "}
              <span className="text-html">HTML</span>,{" "}
              <span className="text-css">CSS</span> and{" "}
              <span className="text-javascript">JavaScript</span>, and
              experience with frameworks like{" "}
              <span className="text-react">React</span>. I also know how to
              build <span className="text-teal">mobile applications</span> using{" "}
              <span className="text-flutter">Flutter</span> and develop{" "}
              <span className="text-teal">server-side</span> solutions with{" "}
              <span className="text-nodejs">Node.js</span> and{" "}
              <span className="text-aspnet">ASP.NET</span>. In addition, I have
              a keen interest in <span className="text-teal">blockchain</span>{" "}
              technology. I&apos;m a fast learner who enjoys taking new
              challenges and collaborating with others to create innovative as
              well as user-friendly solutions. Let&apos;s bring your ideas to
              life together!
            </p>
          </FadeInUpSection>
        </div>
      </div>
    </div>
  );
}

export default About;

import Image from "next/image";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/constants/projects";

function Projects() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-[1000px] flex flex-col items-center px-10">
        <h1 className="font-extrabold text-center text-3xl md:text-4xl mt-24">
          My Projects
        </h1>

        {/* Projects */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex bg-dark-gray mt-10 rounded-lg"
          >
            <div className="relative w-full h-full hidden lg:w-1/3 lg:flex">
              <Image
                src={project.image || "/images/placeholder-image.jpg"}
                alt="Project"
                layout="fill"
                objectFit="cover"
                className="rounded-l-lg"
                priority={true}
              />
            </div>
            <div className="w-full flex flex-col lg:w-2/3 p-10">
              <h1 className="text-lg md:text-xl font-semibold">
                {project.name}
              </h1>
              <div className="flex flex-row space-x-3 items-center mt-2">
                <h2 className="text-base md:text-lg font-medium">Made with:</h2>
                {project.technologies.map((tech, i) => (
                  <Image
                    key={i}
                    src={`/images/${tech}-logo.svg`}
                    alt="React"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="max-w-[30px] md:max-w-[40px] h-auto"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base mt-3 text-medium-light-grey">
                {project.description}
              </p>
              <div className="flex flex-row space-x-3 mt-5">
                {(project.demo || project.live) && (
                  <button className="flex flex-row items-center justify-center space-x-2 bg-teal hover:scale-105 rounded-full px-5 py-2">
                    <FaArrowUpRightFromSquare />
                    <span>{project.demo ? "Demo" : "Live"}</span>
                  </button>
                )}
                <button className="flex flex-row items-center justify-center space-x-2 border-2 border-medium-light-grey hover:scale-105 rounded-full px-5 py-2">
                  <FaGithub />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

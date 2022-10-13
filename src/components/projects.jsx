
// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font animate-box">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
		  I've worked with several different tech stacks and tried to make some worthy web apps from them. Check 'em' out :)
          </p>
        </div>
        <div className="flex flex-wrap row row-pt-md projects">
          {projects.map((project) => (
            
              <div className="col-md-5 project-tab">
                <img
                  alt="gallery"
                  className="absolute inset-0 project-image"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 project-info">
                <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
                  <h2 className="title-font text-lg font-medium text-white project-title">
                    {project.title}
                  </h2>
				  </a>
                  <p className="tracking-widest text-sm title-font font-medium text-green-400 project-subtitle">
                    {project.subtitle}
                  </p>
				  
                  <p className="leading-relaxed project-desc">{project.description}</p>
                </div>
              </div>
            
          ))}
        </div>
        <hr width = '75%'></hr>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base my-5">
		  Do check out my github for more!
          </p>
      </div>
    </section>
  );
}
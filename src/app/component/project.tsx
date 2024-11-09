import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/project1.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Modren Portfolio Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PortFolio
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  I designed and developed a modern portfolio using HTML, CSS, and Tailwind CSS, incorporating animations for an engaging user experience. Guided by a Figma prototype, I focused on creating a visually cohesive and responsive design that reflects my skills in frontend development. This portfolio showcases my ability to blend creativity with technical precision, delivering an interactive and professional digital showcase.!
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://vercel.com/fatima-ismats-projects/modren-portfolio"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                     className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/milestone1.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Shared Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume 
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  I developed a dynamic countdown timer using Next.js, designed to deliver precise, real-time tracking for events and deadlines. This project highlights my skills in handling state management and optimizing components, ensuring smooth performance and responsiveness for a seamless user experience
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://vercel.com/fatima-ismats-projects/new-hackathon-milestone-5"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/project4.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Figma design Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Figma
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I transformed a Figma design into a fully responsive HTML
                    and CSS webpage, carefully ensuring pixel-perfect accuracy
                    and maintaining design integrity. This project showcases my
                    attention to detail and ability to convert complex layouts
                    into clean, accessible code, providing a seamless user
                    experience across devices
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://vercel.com/fatima-ismats-projects/figma-portfolio-project"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

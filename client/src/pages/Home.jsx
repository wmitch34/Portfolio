import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Projects2 from "../components/home/Projects2.jsx";
import Experience from "../components/home/Experience.jsx";
import Demo from "../components/home/Demos.jsx";
import { useLocation } from "react-router-dom";

export default function Home(props) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const demoRef = useRef(null);

  const [smoothScroll, setSmoothScroll] = useState(true);

  const handleSetSmoothScroll = () => {
    setSmoothScroll((prev) => !prev);
  };

  const executeScroll = () => myRef.current.scrollIntoView();
  const history = useLocation();

  useEffect(() => {
    if (history.hash === "#About") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <div
      className={`lg:h-screen lg:overflow-y-scroll  md:px-20 ${
        smoothScroll ? " lg:snap-y lg:snap-mandatory" : ""
      }`}
    >
      <label
        id="hamburger-menu"
        className="flex flex-col absolute top-4 left-2 md:left-20 z-50 cursor-pointer"
      >
        <input
          type="checkbox"
          className="appearance-none m-0 p-0 outline-none pointer-events-none"
        />
      </label>
      <div
        id="sidebar"
        className="flex flex-col justify-start absolute p-4 bg-primary w-90 rounded-xl text-xl"
      >
        <button
          className="text-left w-full"
          onClick={() =>
            homeRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Home
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          About
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            experienceRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Experience
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            projectsRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Projects
        </button>
        <button
          className="text-left w-full"
          onClick={() =>
            demoRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Demos
        </button>
        <label id="scroll-controll" className="text-left">
          Smooth Scroll{" "}
          <input
            type="checkbox"
            checked={smoothScroll}
            onClick={handleSetSmoothScroll}
          />
        </label>
      </div>
      <div
        id="nav-list"
        className="hidden md:flex w-full sticky top-0 h-16 bg-primary text-xl"
      >
        <nav className="w-full flex flex-center space-x-4 justify-center ">
          <button
            onClick={() =>
              homeRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Home
          </button>
          <button
            onClick={() =>
              aboutRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            About
          </button>
          <button
            onClick={() =>
              experienceRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Experience
          </button>
          <button
            onClick={() =>
              projectsRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Projects
          </button>
          <button
            onClick={() =>
              demoRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Demos
          </button>
        </nav>
      </div>

      <div
        id="Hero"
        ref={homeRef}
        className="h-screen overflow-y-scroll lg:snap-center "
      >
        <Hero />
      </div>
      <div
        id="About"
        ref={aboutRef}
        className={`${
          smoothScroll ? "lg:h-screen" : ""
        }lg:overflow-y-scroll lg:snap-center `}
      >
        <About />
      </div>
      <div
        id="Experience"
        ref={experienceRef}
        className={`${
          smoothScroll ? "lg:h-screen" : ""
        }lg:overflow-y-scroll lg:snap-center `}
      >
        <Experience />
      </div>
      <div
        id="Projects"
        ref={projectsRef}
        className={`${
          smoothScroll ? "lg:h-screen" : ""
        }lg:overflow-y-scroll lg:snap-center `}
      >
        <Projects2 />
      </div>

      <div
        id="Demo"
        ref={demoRef}
        className={`${
          smoothScroll ? "lg:h-screen" : ""
        } lg:overflow-y-scroll lg:snap-center `}
      >
        <Demo />
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Projects from "../components/home/Projects.jsx";
import Experience from "../components/home/Experience.jsx";
import Demo from "../components/home/Demos.jsx";
import Modal from "../components/modal.jsx";
import { useLocation } from "react-router-dom";

export default function Home(props) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const demoRef = useRef(null);
  const [contactModal, setContactModal] = useState(false);

  const [smoothScroll, setSmoothScroll] = useState(false);

  const handleSetSmoothScroll = () => {
    setSmoothScroll((prev) => !prev);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div
      className={`lg:h-screen lg:overflow-y-scroll  md:px-20 ${
        smoothScroll ? " lg:snap-y lg:snap-mandatory" : ""
      }`}
    >
      <div className="sticky top-0">
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
          {/* <label
            id="scroll-controll"
            className="hidden md:flex w-fit items-center"
          >
            Scroll&nbsp;
            <input
              type="checkbox"
              checked={smoothScroll}
              onChange={handleSetSmoothScroll}
            />
          </label> */}
        </div>
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
        <Projects />
      </div>

      <div
        id="Demos"
        ref={demoRef}
        className={`h-screen${
          smoothScroll ? "lg:h-screen" : ""
        } lg:overflow-y-scroll lg:snap-center `}
      >
        <Demo stateHandler={setContactModal} />
      </div>
      <Modal
        message={`I'll make a form soon.`}
        state={contactModal}
        stateHandler={setContactModal}
        title={"Send me a message!"}
      ></Modal>
    </div>
  );
}

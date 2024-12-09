import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Projects from "../components/home/Projects.jsx";
import Experience from "../components/home/Experience.jsx";
import Demo from "../components/home/Demos.jsx";
import Modal from "../components/modal.jsx";
import { useLocation } from "react-router-dom";
import { sendMessage } from "../api.js";

export default function Home(props) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const demoRef = useRef(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [contactModal, setContactModal] = useState(false);

  const handleSendMessafe = () => {
    let payload = {
      email,
      phone,
      message,
    };
    console.log(payload);
    sendMessage(payload);
    return;
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
    <div>
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
        </div>
      </div>

      <div id="Hero" ref={homeRef} className="h-screen">
        <Hero />
      </div>
      <div id="About" ref={aboutRef} className="min-h-screen">
        <About />
      </div>
      <div id="Experience" ref={experienceRef} className="min-h-screen">
        <Experience />
      </div>
      <div id="Projects" ref={projectsRef} className="min-h-screen">
        <Projects />
      </div>
      <div id="Demos" ref={demoRef} className="min-h-screen">
        <Demo stateHandler={setContactModal} />
      </div>
      <Modal
        message={`Send me an email. I appreciate feedback, networking, etc. If you want me to get back to you, leave your email or phone number.`}
        state={contactModal}
        stateHandler={setContactModal}
        title={"Contact"}
        closeMSG="Cancel"
      >
        <form
          className="flex flex-col pt-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="emailInput" className="text-white p-2">
            Email Address
          </label>
          <input
            id="emailInput"
            className="p-2 rounded-md"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phoneInput" className="text-white p-2">
            Phone Number
          </label>
          <input
            id="phoneInput"
            className="p-2 rounded-md"
            type="tel"
            placeholder="phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="messageInput" className="text-white p-2">
            Message
          </label>
          <textarea
            id="messageInput"
            className="w-full min-h-32 p-2 rounded-md"
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="my-bingo-button my-4"
            type="submit"
            onClick={() => {
              handleSendMessafe();
              setContactModal(false);
            }}
          >
            Send
          </button>
        </form>
      </Modal>
    </div>
  );
}

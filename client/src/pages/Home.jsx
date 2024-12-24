import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Projects from "../components/home/Projects.jsx";
import Experience from "../components/home/Experience.jsx";
import Links from "../components/home/Links.jsx";
import Modal from "../components/modal.jsx";
import NavBar from "../components/NavBar.jsx";
import { useLocation } from "react-router-dom";
import { sendMessage } from "../api.js";

export default function Home(props) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const linkRef = useRef(null);
  const [contactModal, setContactModal] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = e.target.email.value;
    const message = e.target.message.value;

    let validEmail = true;
    let validMessage = true;

    if (email != "" && email != null && !emailRegex.test(email)) {
      validEmail = false;
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (message === "" || message == null) {
      validMessage = false;
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    if (validEmail && validMessage) {
      sendMessage({ message, email });
      setContactModal(false);
    }
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
    <div className="max-w-screen-md mx-auto">
      <div className="flex flex-col h-screen">
        <NavBar
          refs={{ homeRef, aboutRef, experienceRef, projectsRef, linkRef }}
        />
        <div id="Hero" ref={homeRef} className="h-full">
          <Hero />
        </div>
      </div>
      <div id="About" ref={aboutRef} className="">
        <About />
      </div>
      <div id="Links" ref={linkRef} className="">
        <Links handleOpenModal={setContactModal} />
      </div>
      <Modal
        message={`Ask a question, send feedback, or just say 'Hi'. If you want me to get back to you, leave your email.`}
        state={contactModal}
        stateHandler={setContactModal}
        title={"Contact"}
        closeMSG="Cancel"
      >
        <form
          className="flex flex-col pt-4"
          onSubmit={(e) => handleSendMessage(e)}
        >
          <label htmlFor="email" className="p-2">
            Email Address
          </label>
          {emailError && <p className="text-red-500"> Invaild email.</p>}
          <input
            id="email"
            className="p-2 rounded-md border-2 border-textSecondary"
            type="email"
            placeholder="email"
          />
          <label htmlFor="message" className="p-2">
            Message
          </label>
          {messageError && (
            <p className="text-red-500">
              Please enter a message before sending.
            </p>
          )}
          <textarea
            id="message"
            className="w-full min-h-32 p-2 rounded-md border-2 border-textSecondary"
            placeholder="message"
          />
          <button className="my-button my-4" type="submit">
            Send
          </button>
        </form>
      </Modal>
    </div>
  );
}

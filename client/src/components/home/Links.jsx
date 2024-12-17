import { Link } from "react-router-dom";
import Logo from "../../assets/icons/nodejs.svg";

export default function Demo(props) {
  const items = [
    {
      name: "Bingo",
      //   icon: bingoIcon,
      link: "/Bingo",
    },
    {
      name: "Typeracer",
      //   icon: typeRacerIcon,
      link: "/Typeracer",
    },
    {
      name: "Contact",
      //   icon: contactIcon,
      link: "/Home",
    },
    {
      name: "Resume",
      //   icon: resumeIcon,
      link: "/public/WILLMITCHELL.pdf",
    },
    {
      name: "Github",
      //   icon: githubIcon,
      link: "https://github.com/wmitch34",
    },
    {
      name: "LinkedIn",
      //   icon: linkedInIcon,
      link: "https://www.linkedin.com/in/will-mitchell-connect/",
    },
  ];
  return (
    <div id="links-container" className="flex flex-col w-full h-full">
      <div>
        <h1 className="h-fit p-4 pt-28 w-full text-5xl text-secondary">
          Links
        </h1>
      </div>
      <div
        id="Link-card-container"
        className="flex w-full flex-wrap h-full justify-center"
      >
        {items.map((item, index) => (
          <Link
            to={item.link}
            className="w-60 h-60 border-white border-2 m-2 rounded-xl flex flex-col items-center hover:text-secondary"
          >
            <p className="text-center">{item.name}</p>
            <img src={Logo} alt="Logo" className="w-48" />
          </Link>
        ))}
      </div>
    </div>
  );
}

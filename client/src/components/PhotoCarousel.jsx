import { useRef } from "react";
import gameslisthome from "../assets/photocarousel/gameslisthome.png";
import mygamelist from "../assets/photocarousel/mygamelist.png";
import tankanalytics from "../assets/photocarousel/tank-analytics.png";
import tankclients from "../assets/photocarousel/tank-clients.png";
import tankform from "../assets/photocarousel/tank-form.png";
import tanklogin from "../assets/photocarousel/tank-login.png";

const photos = [
  { img: gameslisthome, desc: "blah blah" },
  { img: mygamelist, desc: "blah blah" },
  { img: tankanalytics, desc: "blah blah" },
  { img: tankclients, desc: "blah blah" },
  { img: tankform, desc: "blah blah" },
  { img: tanklogin, desc: "blah blah" },
];

export default function PhotoCarousel(props) {
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    console.log(scrollOffset);
    console.log(containerRef.current);
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex p-2 bg-primary shadow-lg">
      <label
        className="flex flex-col"
        onClick={() => scroll(-containerRef.current.offsetWidth)}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-8 h-1 bg-textPrimary rotate-45 rounded-xl origin-left translate-y-px">
            {""}
          </div>
          <div className="w-8 h-1 bg-textPrimary -rotate-45 rounded-xl origin-left -translate-y-px">
            {""}
          </div>
        </div>
      </label>
      <div
        className="flex overflow-x-scroll snap-x snap-mandatory"
        style={{ scrollSnapType: "x mandatory" }} // For compatibility
      >
        {photos.map((photo, index) => (
          <div
            className="snap-center flex-shrink-0 w-full"
            key={index}
            style={{ flexBasis: "100%" }} // Ensures only one item is visible
          >
            <p className="text-center">{photo.desc}</p>
            <img
              src={photo.img}
              alt={photo.desc}
              className="object-contain w-full"
            />
          </div>
        ))}
      </div>
      <label
        className="flex flex-col"
        onClick={() => scroll(containerRef.current.offsetWidth)}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-8 h-1 bg-textPrimary -rotate-45 rounded-xl origin-right translate-y-px">
            {""}
          </div>
          <div className="w-8 h-1 bg-textPrimary rotate-45 rounded-xl origin-right -translate-y-px">
            {""}
          </div>
        </div>
      </label>
    </div>
  );
}

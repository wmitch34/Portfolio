import react from "react";
import { useRef } from "react";

export default function PhotoCarousel(props) {
  const { photos } = props;

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
    <div className="flex">
      <button onClick={() => scroll(-containerRef.current.offsetWidth)}>
        prev
      </button>
      <div className="flex overflow-x-scroll snap snap-x " ref={containerRef}>
        {photos.map((photo, index) => (
          <img src={photo} className="p-4 snap-center" key={index} />
        ))}
      </div>
      <button onClick={() => scroll(containerRef.current.offsetWidth)}>
        next
      </button>
    </div>
  );
}

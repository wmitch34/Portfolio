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
      <label
        className="flex flex-col"
        onClick={() => scroll(-containerRef.current.offsetWidth)}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-8 h-1 bg-bgSecondary rotate-45 rounded-xl origin-left translate-y-px">
            {""}
          </div>
          <div className="w-8 h-1 bg-bgSecondary -rotate-45 rounded-xl origin-left -translate-y-px">
            {""}
          </div>
        </div>
      </label>
      <div className="flex overflow-x-scroll snap snap-x" ref={containerRef}>
        {photos.map((photo, index) => (
          <img src={photo} className="snap-center object-contain" key={index} />
        ))}
      </div>
      <label
        className="flex flex-col"
        onClick={() => scroll(containerRef.current.offsetWidth)}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-8 h-1 bg-bgSecondary -rotate-45 rounded-xl origin-right translate-y-px">
            {""}
          </div>
          <div className="w-8 h-1 bg-bgSecondary rotate-45 rounded-xl origin-right -translate-y-px">
            {""}
          </div>
        </div>
      </label>
    </div>
  );
}

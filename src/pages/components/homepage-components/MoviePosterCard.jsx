import { useRef, useState } from "react";
import SmallCardPriview from "./smallCardPriview";

export const MoviePosterCard = (props) => {
  const boxRef = useRef(null);
  const imgRef = useRef([]);

  const [isClicked, setIsClicked] = useState(null);
  const scrollRight = () => {
    boxRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  const scrollLeft = () => {
    boxRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const data = [
    { id: 1, name: "Film 1" },
    { id: 2, name: "Film 2" },
    { id: 3, name: "Film 3" },
    { id: 4, name: "Film 4" },
    { id: 5, name: "Film 5" },
    { id: 6, name: "Film 6" },
    { id: 7, name: "Film 7" },
    { id: 8, name: "Film 8" },
  ];
  return (
    <div className="movie-poster-card ">
      <h1>{props.title}</h1>
      <img
        onClick={scrollLeft}
        style={{ width: 50, height: 50 }}
        className="arrowleft"
        id="arrowleft"
        src="assets/arrowleft.png"
        alt="arrowleft"
      />
      <img
        onClick={scrollRight}
        style={{ width: 50, height: 50 }}
        className="arrowright"
        id="arrowright"
        src="assets/arrowright.png"
        alt="arrowleft"
      />
      <div className="movie-poster-card-container" ref={boxRef}>
        {data.map((item) => (
          <>
            <div style={{ position: "relative", zIndex: isClicked === item.id ? 2 : 1 }}
            onMouseEnter={() => {setIsClicked(isClicked === item.id ? null : item.id);}}
            onMouseLeave={() => {setIsClicked(null)}}
            >
              <div
                className={props[`label${item.id}`]}
                key={item.id}
                ref={(el) => (imgRef.current[item.id] = el)}
              >
                <div>{props[`labelText${item.id}`]}</div>
                {/* on klik kalau sama di set ke null kalau tidak sama di set ke item.id */}
                <img src={props[`movie${item.id}PosterSrc`]} alt={item.name} />
            </div>
            {isClicked === item.id && 
                <SmallCardPriview img={props[`movie${item.id}PosterSrc`]}  />
                }
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

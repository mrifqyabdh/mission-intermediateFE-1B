import { useRef } from "react";

export const MoviePosterCard = (props) => {
    const boxRef = useRef(null);
    const scrollRight = () => {
        boxRef.current.scrollBy({ left: 200, behavior: "smooth" });     
    }
    const scrollLeft = () => {
        boxRef.current.scrollBy({ left: -200, behavior: "smooth" });       
    }
    return (
        <div className="movie-poster-card" >
                    <h1>{props.title}</h1>
                    <img onClick={scrollLeft}
                        style={{ width: 50, height: 50 }}
                        className="arrowleft"
                        id="arrowleft"
                        src="assets/arrowleft.png"
                        alt="arrowleft"
                    />
                    <img onClick={scrollRight}
                        style={{ width: 50, height: 50 }}
                        className="arrowright"
                        id="arrowright"
                        src="assets/arrowright.png"
                        alt="arrowleft"
                    />
                    <div className="movie-poster-card-container" ref={boxRef}>
                        <div className={props.label1}>
                            <div>{props.labelText1}</div>
                        <img src={props.movie1PosterSrc} alt="film-1" />
                        </div>
                        <div className={props.label2}>
                            <div>{props.labelText2}</div>
                        <img src={props.movie2PosterSrc} alt="film-2" />
                        </div>
                        <div className={props.label3}>
                            <div>{props.labelText3}</div>
                        <img src={props.movie3PosterSrc} alt="film-3" />
                        </div>
                        <div className={props.label4}>
                            <div>{props.labelText4}</div>
                        <img src={props.movie4PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label5}>
                            <div>{props.labelText5}</div>
                        <img src={props.movie5PosterSrc} alt="film-5" />
                        </div>
                        <div className={props.label6}>
                            <div>{props.labelText6}</div>
                        <img src={props.movie6PosterSrc} alt="film-6" />
                        </div>
                        <div className={props.label7}>
                            <div>{props.labelText7}</div>
                        <img src={props.movie7PosterSrc} alt="film-7" />
                        </div>
                        <div className={props.label8}>
                            <div>{props.labelText8}</div>
                        <img src={props.movie8PosterSrc} alt="film-8" />
                        </div>
                    </div>
                </div>
    )
}
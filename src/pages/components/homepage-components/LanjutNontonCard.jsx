import { useRef } from "react";

export const LanjutNontonCard = () => {
    const boxRef = useRef(null);
    const scrollRight = () => {
        boxRef.current.scrollBy({ left: 200, behavior: "smooth" });     
    }
    const scrollLeft = () => {
        boxRef.current.scrollBy({ left: -200, behavior: "smooth" });       
    }
    return (
        <div className="lanjut-tonton-card">
                    <h1>Melanjutkan Tonton Film</h1>

                    <div className="lanjut-tonton-card-container" ref={boxRef}>
                        <img onClick={scrollLeft}
                            style={{ width: 50, height: 50 }}
                            className="arrowleft"
                            src="assets/arrowleft.png"
                            alt="arrowleft"
                        />
                        <img onClick={scrollRight}
                            style={{ width: 50, height: 50 }}
                            className="arrowright"
                            src="assets/arrowright.png"
                            alt="arrowleft"
                        />

                        <div className="lanjut-poster-card">
                            <div className="lanjut-tonton-overlay">
                                <p>Shazam</p>
                                <p>
                                    <img
                                        style={{
                                            width: 12,
                                            height: 12,
                                            backgroundColor: "transparent",
                                        }}
                                        src="assets/star.png"
                                        alt=""
                                    />{" "}
                                    4.5/5
                                </p>
                            </div>
                            <img src="posters/poster1-lebar.png" alt="film-1" />
                        </div>

                        <div className="lanjut-poster-card">
                            <div className="lanjut-tonton-overlay">
                                <p>Blue Lock</p>
                                <p>
                                    <img
                                        style={{
                                            width: 12,
                                            height: 12,
                                            backgroundColor: "transparent",
                                        }}
                                        src="assets/star.png"
                                        alt=""
                                    />{" "}
                                    2.5/5
                                </p>
                            </div>
                            <img src="posters/poster2-lebar.png" alt="film-2" />
                        </div>
                        <div className="lanjut-poster-card">
                            <div className="lanjut-tonton-overlay">
                                <p>Fast X</p>
                                <p>
                                    <img
                                        style={{
                                            width: 12,
                                            height: 12,
                                            backgroundColor: "transparent",
                                        }}
                                        src="assets/star.png"
                                        alt=""
                                    />{" "}
                                    3/5
                                </p>
                            </div>
                            <img src="posters/poster3-lebar.png" alt="film-3" />
                        </div>
                        <div className="lanjut-poster-card">
                            <div className="lanjut-tonton-overlay">
                                <p>Avatar</p>
                                <p>
                                    <img
                                        style={{
                                            width: 12,
                                            height: 12,
                                            backgroundColor: "transparent",
                                        }}
                                        src="assets/star.png"
                                        alt=""
                                    />{" "}
                                    5/5
                                </p>
                            </div>
                            <img src="posters/poster4-lebar.png" alt="film-4" />
                        </div>
                        <div className="lanjut-poster-card">
                            <div className="lanjut-tonton-overlay">
                                <p>Drama Korea</p>
                                <p>
                                    <img
                                        style={{
                                            width: 12,
                                            height: 12,
                                            backgroundColor: "transparent",
                                        }}
                                        src="assets/star.png"
                                        alt=""
                                    />{" "}
                                    1/5
                                </p>
                            </div>
                            <img src="posters/poster5-lebar.png" alt="film-5" />
                        </div>
                    </div>
                </div>

    )
}
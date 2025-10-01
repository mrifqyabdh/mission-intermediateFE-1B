import { } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
                <nav className="nav">
                    <div className="nav-left">
                        <div className="logo-beranda">
                            <a />
                        </div>
                        <a href="#">Series</a>
                        <a href="#">Film</a>
                        <a href="#">Daftar saya</a>
                    </div>
                    <div className="profile">
                        <button>
                            <img className="avatar" src="assets/avatar-img.png" alt="" />
                            <img className="vector" src="assets/Vector.png" alt="" />
                        </button>
                        <div className="dropdown">
                            <a href="#">
                                <img src="assets/badan.png" alt="" /> Profil Saya
                            </a>
                            <a href="#">
                                <img src="assets/star.png" alt="" /> Ubah Premium
                            </a>
                            <div className="logout">
                                <img src="assets/login-variant.png" />{" "}
                                <Link to="/">Keluar</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    )
}

export const TopCard = () => {
    return (
        <div className="top-card">
                    <div className="top-card-overlay" />
                    <div className="top-card-text">
                        <h1>Duty after school</h1>
                        <p>
                            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
                            Departemen Pertahanan mulai merekrut lebih banyak tentara,
                            termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
                            garis depan dalam perang.
                        </p>
                        <div className="buttons">
                            <button className="button-mulai">Mulai</button>
                            <button className="button-selengkapnya">
                                <img src="assets/information-outline.png" alt="" />
                                Selengkapnya
                            </button>
                            <img className="logo18" src="assets/18+-logo.png" alt="18+logo" />
                            <img
                                className="volume-off-logo"
                                src="assets/volume-off.png"
                                alt="volume-off-logo"
                            />
                        </div>
                    </div>
                </div>
    )
}
export const LanjutNontonCard = () => {
    return (
        <div className="lanjut-tonton-card">
                    <h1>Melanjutkan Tonton Film</h1>

                    <div className="lanjut-tonton-card-container">
                        <img
                            style={{ width: 50, height: 50 }}
                            className="arrowleft"
                            src="assets/arrowleft.png"
                            alt="arrowleft"
                        />
                        <img
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

export const MoviePosterCard = (props) => {
    return (
        <div className="movie-poster-card">
                    <h1>{props.title}</h1>
                    <img
                        style={{ width: 50, height: 50 }}
                        className="arrowleft"
                        id="arrowleft"
                        src="assets/arrowleft.png"
                        alt="arrowleft"
                    />
                    <img
                        style={{ width: 50, height: 50 }}
                        className="arrowright"
                        id="arrowright"
                        src="assets/arrowright.png"
                        alt="arrowleft"
                    />
                    <div className="movie-poster-card-container">
                        <div className={props.label1}>
                            <div>{props.labelText1}</div>
                        <img src={props.movie1PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label2}>
                            <div>{props.labelText2}</div>
                        <img src={props.movie2PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label3}>
                            <div>{props.labelText3}</div>
                        <img src={props.movie3PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label4}>
                            <div>{props.labelText4}</div>
                        <img src={props.movie4PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label5}>
                            <div>{props.labelText5}</div>
                        <img src={props.movie5PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label6}>
                            <div>{props.labelText6}</div>
                        <img src={props.movie6PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label7}>
                            <div>{props.labelText7}</div>
                        <img src={props.movie7PosterSrc} alt="film-4" />
                        </div>
                        <div className={props.label8}>
                            <div>{props.labelText8}</div>
                            <img src={props.movie8PosterSrc} alt="film-8" />
                        </div>
                    </div>
                </div>
    )
}

export const FooterLarge = () => {
    return (
        <footer className="footer-large">
                <div className="footer-container">
                    <img src="assets/Logo.png" alt="logo" />
                    <p>@2025 Chill All Rights Reserved</p>
                </div>
                <div className="footer-links">
                    <div className="genre-links">
                        <h3>Genre</h3>
                        <div>
                            <a href="#">Aksi</a>
                            <a href="#">Anak-anak</a>
                            <a href="#">Anime</a>
                            <a href="#">Britania</a>
                            <a href="#">Drama</a>
                            <a href="#">Fantasi</a>
                            <a href="#">Kejahatan</a>
                            <a href="#">Kdrama</a>
                            <a href="#">Komedi</a>
                            <a href="#">Petualangan</a>
                            <a href="#">Perang</a>
                            <a href="#">Romantis</a>
                            <a href="#">Sains &amp; Alam</a>
                            <a href="#">Thriller</a>
                        </div>
                    </div>
                    <div className="bantuan-links">
                        <h3>Bantuan</h3>
                        <a href="#">FAQ</a>
                        <a href="#">Kontak Kami</a>
                        <a href="#">Privasi</a>
                        <a href="#">Syarat &amp; Ketentuan</a>
                    </div>
                </div>
            </footer>
    )
}

export const FooterSmall = () => {
    return (
        <footer className="footer-small">
                <div className="footer-container">
                    <img src="assets/Logo.png" alt="logo" />
                    <p>@2025 Chill All Rights Reserved</p>
                </div>
                <div className="footer-links">
                    <a href="#">
                        Genre
                        <img style={{ height: 24 }} src="assets/chevron-right.png" alt="" />
                    </a>
                    <a href="#">
                        Bantuan
                        <img style={{ height: 24 }} src="assets/chevron-right.png" alt="" />
                    </a>
                </div>
        </footer>
    )
}

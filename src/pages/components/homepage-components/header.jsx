import { Link } from "react-router-dom";
import{ useState } from 'react'

export const Header = () => {
    const [isOpen , setIsOpen] = useState(false);
    return (
        <header>
                <nav className="nav">
                    <div className="nav-left">
                        <div className="logo-beranda">
                        </div>
                        <Link to="/Beranda">Beranda</Link>
                        <a href="#">Series</a>
                        <Link to="/Daftar-Saya">Daftar Saya</Link>
                    </div>
                    <div className="profile">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <img className="avatar" src="assets/avatar-img.png" alt="" />
                            <img className="vector" src="assets/Vector.png" alt="" />
                        </button>
                        {isOpen && (
                            <div className="dropdown" >
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
                        )}
                    </div>
                </nav>
            </header>
    )
}
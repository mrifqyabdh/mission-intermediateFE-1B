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

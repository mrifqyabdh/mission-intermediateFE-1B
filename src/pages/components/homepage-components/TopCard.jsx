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
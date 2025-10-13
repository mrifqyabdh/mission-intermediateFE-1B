import {MoviePosterCard} from './components/homepage-components/MoviePosterCard.jsx';

import useDaftarSaya from './Store/setDaftarSayaStore.js';
const daftarSaya = () => {
    const list = useDaftarSaya((state) => state.list);
    return (
    <div className="daftar-saya">
      {list.length === 0 ? <h1>Daftar Masih Kosong</h1> :
      <MoviePosterCard title="Daftar Saya" 
      movie1PosterSrc={list[0].img} movie2PosterSrc={list[1].img} movie3PosterSrc={list[2].img} 
      movie4PosterSrc={list[3].img} movie5PosterSrc={list[4].img} movie6PosterSrc={list[5].img}
      movie7PosterSrc={list[6].img} movie8PosterSrc={list[7].img} />}
    </div>
    )
}

export default daftarSaya
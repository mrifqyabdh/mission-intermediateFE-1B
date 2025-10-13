import {MoviePosterCard} from './components/homepage-components/MoviePosterCard.jsx';
import useDaftarSaya from './Store/setDaftarSayaStore.js';
const DaftarSaya = () => {
  const list = useDaftarSaya((state) => state.list);

  if (list.length === 0) {
    return (
      <div className="daftar-saya">
        <h1>Daftar Masih Kosong</h1>
      </div>
    );
  }
  
  const movieProps = {};
  for (let i = 0; i < list.length; i++) {
    movieProps[`movie${i + 1}PosterSrc`] = list[i]?.img || null;
  }

  return (
    <div className="daftar-saya">
      <MoviePosterCard 
        title="Daftar Saya"
        {...movieProps}
      />
    </div>
  );
};

export default DaftarSaya;
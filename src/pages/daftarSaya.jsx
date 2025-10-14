import { MoviePosterCard } from './components/homepage-components/MoviePosterCard.jsx';
import useDaftarSaya from './Store/setDaftarSayaStore.js';
import { useGetData } from '../hooks/ApiCall.js';

const DaftarSaya = () => {

  const {isLoading, isError,getData } = useGetData();

  const list = useDaftarSaya((state) => state.list);


  // 🌀 1️⃣ Show loading state
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // ⚠️ 2️⃣ Show error state
  if (isError) {
    return (
      <div>
        <h1>Error</h1>
        <button onClick={getData}>Muat Ulang</button>
      </div>
    );
  }

  // 📭 3️⃣ Show empty state
  if (list.length === 0) {
    return (
      <div className="daftar-saya">
        <h1>Daftar Masih Kosong</h1>
      </div>
    );
  }

  // 🎬 4️⃣ Normal render
  return (
    <div className="daftar-saya">
      <MoviePosterCard
        title="Daftar Saya"
        {...Object.fromEntries(
          list.map((item, i) => [`movie${i + 1}PosterSrc`, item?.img || null])
        )}
      />
    </div>
  )
};

export default DaftarSaya;
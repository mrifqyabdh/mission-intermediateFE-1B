import {  } from 'react'
import {Header} from './components/homepage-components/header.jsx';
import {TopCard} from './components/homepage-components/TopCard.jsx';
import {LanjutNontonCard} from './components/homepage-components/LanjutNontonCard.jsx';
import {MoviePosterCard} from './components/homepage-components/MoviePosterCard.jsx';
import {FooterLarge, FooterSmall} from './components/homepage-components/Footer.jsx';

const Beranda = () =>  {
  return (
<div className='body-beranda'>
  <main>
      <Header />
      <TopCard />
      
      <LanjutNontonCard />
      <MoviePosterCard title="Top Rating Film dan Series Hari ini" 
      movie1PosterSrc="posters/poster1-tinggi.png" movie2PosterSrc="posters/poster2-tinggi.png" movie3PosterSrc="posters/poster3-tinggi.png" 
      movie4PosterSrc="posters/poster4-tinggi.png" movie5PosterSrc="posters/poster5-tinggi.png" movie6PosterSrc="posters/poster6-tinggi.png" 
      movie7PosterSrc="posters/poster7-tinggi.png" movie8PosterSrc="posters/poster8-tinggi.png" 
      label1="trending-poster" labelText1="Top 10"
      label2="episode-baru-poster" labelText2="Episode Baru"
      label3="trending-poster" labelText3="Top 10"
      label4="trending-poster" labelText4="Top 10"/> 

      <MoviePosterCard title="Film Trending" 
      movie1PosterSrc="posters/poster9-tinggi.png" movie2PosterSrc="posters/poster10-tinggi.png" movie3PosterSrc="posters/poster11-tinggi.png" 
      movie4PosterSrc="posters/poster12-tinggi.png" movie5PosterSrc="posters/poster13-tinggi.png" movie6PosterSrc="posters/poster14-tinggi.png" 
      movie7PosterSrc="posters/poster15-tinggi.png" movie8PosterSrc="posters/poster16-tinggi.png" 
      label1="trending-poster" labelText1="Top 10"
      label2="trending-poster" labelText2="Top 10"
      label3="trending-poster" labelText3="Top 10"
      label4="trending-poster" labelText4="Top 10"
      label5="trending-poster" labelText5="Top 10"
      label6="trending-poster" labelText6="Top 10"
      label7="trending-poster" labelText7="Top 10"
      label8="trending-poster" labelText8="Top 10"
      /> 

      <MoviePosterCard title="Rilis Baru" 
      movie1PosterSrc="posters/poster18-tinggi.png" movie2PosterSrc="posters/poster19-tinggi.png" movie3PosterSrc="posters/poster20-tinggi.png" 
      movie4PosterSrc="posters/poster3-tinggi.png" movie5PosterSrc="posters/poster7-tinggi.png" movie6PosterSrc="posters/poster9-tinggi.png" 
      movie7PosterSrc="posters/poster5-tinggi.png" movie8PosterSrc="posters/poster6-tinggi.png" 
      label1="episode-baru-poster" labelText1="Episode Baru"
      label2="episode-baru-poster" labelText2="Episode Baru"
      label3="episode-baru-poster" labelText3="Episode Baru"
      /> 

      <FooterLarge />
      <FooterSmall />
  </main>
</div>

  );
};

export default Beranda
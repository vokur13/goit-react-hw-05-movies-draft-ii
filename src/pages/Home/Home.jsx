import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { TrendList } from 'components/TrendList';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [movieId, setMovieID] = useState('');
  useEffect(() => {
    setTrendMovies([]);
    setMovieID('');
    async function fetchAssets() {
      try {
        const { results } = await API.getMovie();
        setTrendMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssets();
  }, []);

  function onSelect(data) {
    if (!data) {
      return;
    }
    setMovieID(data);
    console.log('movieId', movieId);
  }

  return (
    <>
      <h1>Trending today</h1>
      <TrendList data={trendMovies} onSelect={onSelect} />
    </>
  );
};

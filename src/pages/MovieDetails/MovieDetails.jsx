import { useParams } from 'react-router-dom';
import * as API from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);

  async function fetchAssetsByID(movieId) {
    try {
      const movieByID = await API.getMovieByID(movieId);
      console.log(movieByID);
    } catch (error) {
      console.log(error);
    }
  }

  fetchAssetsByID(movieId);

  return <div>Now showing movie with id - {movieId}</div>;
};

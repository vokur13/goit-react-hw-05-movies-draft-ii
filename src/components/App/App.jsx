import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';

const StyledLink = styled(NavLink)`
  color: black;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
        {/* <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

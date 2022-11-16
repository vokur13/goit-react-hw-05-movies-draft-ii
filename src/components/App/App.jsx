import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </>
  );
};

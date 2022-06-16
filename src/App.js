import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Secret from "./components/Secret"

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleMovies = (mv) => {
      //console.log(mv)
    setMovies(mv);
  };

//   const tendencia = () => {
//     let result = {};
//     axios
//       .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`)
//       .then((res) => res.data)
//       .then((data) => (data.results));
//       return data.results
//   };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home movies={movies}  handleMovies={handleMovies} />}></Route>
        <Route path="movies/:id/*" element={<Content />} />
        <Route path="login" element={<Login /> } ></Route>
        <Route path="secret" element={<Secret /> } ></Route>
      </Routes>
    </div>
  );
};
export default App;

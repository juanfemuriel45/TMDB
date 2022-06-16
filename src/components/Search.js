import axios from "axios";
import useInput from "../hooks/useInput"

const Search = ({handleMovies}) => {

    const APIKEY = "576f0b31b8a54d8600fb0d03e0832769"
    const searchURL = "https://api.themoviedb.org/3/search/movie"
    const query = useInput();

    const handleSubmit = (e)=>{        
        e.preventDefault();
        axios.get(`${searchURL}?api_key=${APIKEY}&query=${query.value}`)
        .then((res)=> res.data)
        .then(busqueda => {
            // console.log("en SEARCH")
            //console.log(busqueda.results)
            handleMovies(busqueda.results)
        })
    }

  return (
    
      <section className="section mt-5 ">
        <h1 className="title">Bienvenidos</h1>
        <h2 className="subtitle">
          Millones de películas, programas de televisión y personas por
          descubrir. Explora ahora.
        </h2>
        <form onSubmit={handleSubmit}>
        <input
            {...query}
          className="input is-rounded"
          type="text"
          placeholder="Busca algo bueno ..."
          required
        />
        <button className="button is-success is-rounded my-5">Buscar</button>
      </form>

      </section>
  );
};

export default Search;

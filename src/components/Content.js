import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Content = () => {
    const APIKEY= "576f0b31b8a54d8600fb0d03e0832769"
    const url = "https://api.themoviedb.org/3/movie"
    const {id} = useParams();
    const [data, setData] = useState({})

    const fetchMovie = ()=> {
        axios.get(`${url}/${id}?api_key=${APIKEY}`)
        .then((res) => res.data)
        .then(data => setData(data))
    }

    useEffect(() => {
        fetchMovie();
      }, [id]);

      if (!data.id) return <p>No hay datos</p>;
      //console.log("la data es ---- ",data)
  return (
    <section className="section is-medium">
      <div className="columns">
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img
                  // src={url+data.poster_path}
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`}
                  alt="movie"
                />
              </figure>
            </div>
          </div>
        </div>
 
        <div className="column is-9">
            <h2 className="title">{data.title}</h2>
            <h3 className="subtitle">
            {data.overview}
            </h3>
            <h5><strong>Popularity: </strong> {data.popularity}</h5>
            <h5><strong>Genre :</strong> {data.genres[0].name}</h5>
            <h5><strong>Release Date: </strong> {data.release_date}</h5>
            <p></p>
        </div>
      </div>
    </section>
  );
};

export default Content;

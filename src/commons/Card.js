import { Link } from "react-router-dom";

const Card = ({data}) => {
    const url= "https://image.tmdb.org/t/p/w220_and_h330_face/"
    return (
        <div className="card">
        <div className="card-image">
        <Link to={`/movies/${data.id}`}>
          {/* <a className="image" href="movies" title="{data.title}"> */}
          <figure className="image">
            <img
            src={url+data.poster_path}
            alt="movie"
            />
          </figure>
          {/* </a> */}
          </Link>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <div className="media-content">
                <p className="title is-6">{data.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
}

export default Card;
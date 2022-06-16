import Grid from "./Grid"
import Search from "./Search"
const home=({movies, handleMovies})=>{
    return(
        <>
        <Search handleMovies={handleMovies} />
        <Grid movies={movies} />
        </>
    )
}
export default home
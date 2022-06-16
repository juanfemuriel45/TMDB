import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar is-dark is-fixed-top" >
      <Link to={"/"}>
      <h3 className="navbar-item has-text-white">MY_MOVIES</h3>
      </Link>
      <div className="navbar-item navbar-end">
          <Link to={"/movies"}>
          <button className="button is-ghost has-text-white">Movies</button>
          </Link>
          <button className="button is-ghost has-text-white">TV Programs</button>
      </div>
      <div className="navbar-item navbar-end">
          <p className="has-text-white">USER NAME</p>
          <Link to="/login">
            <button className="button is-primary" >
            <strong>Log in</strong>
            </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;

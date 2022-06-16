import axios from "axios"


import useInput from "../hooks/useInput"

const Login = () => {

    const correo = useInput();
    const contrasena = useInput();

    const handleSubmit = (e)=>{        
        e.preventDefault();
        axios.post("http://localhost:3001/api/login",{ 
            email: correo.value, 
            password: contrasena.value} )
        .then((res)=> res.data)
        .then(data => { console.log("login -> ", data)
        // Redirect to secret route!
        })
    }
  return (
    <section className="hero is-primary is-fullheight">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5-tablet is-4-desktop is-4-widescreen">
          <form onSubmit={handleSubmit} className="box">
            <div className="field">
              <label  className="label">Email</label>
              <div className="control has-icons-left">
                <input {...correo} type="email" placeholder="e.g. mail@gmail.com" className="input" required></input>
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label  className="label">Password</label>
              <div className="control has-icons-left">
                <input {...contrasena} type="password" placeholder="*******" className="input" required></input>
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label  className="checkbox">
                <input type="checkbox"></input>
               Remember me
              </label>
            </div>
            <div className="field">
              <button className="button is-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Login;

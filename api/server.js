// Configuración del server
const express = require("express");
const app = express();
const db = require("./config/db.js");
const router = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const cors = require("cors");

//modelos
const User = require("./models/Users.js");

//usos
app.use(express.json());
app.use(cors()) 
app.use(morgan("tiny"));
app.use("/api", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sessions({
    secret: "tmdb",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
        User.findOne({where: {email}})
        .then(user => {
            if(!user){
                return done(null, false)
            }
            user.hash(password, user.salt).then(hash => {
                if(hash !== user.password){
                  console.log("clave erronea")
                    return done(null, false); //wrong password
                }
                return done(null, user)  ; // user and pass correct!
            })
        })
        .catch(err => { done(err)}) // hubo un error
    }
  )
);

passport.serializeUser(function (user, done){
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    User.findByPk(id).
    then(user => { done(null, user)
    }). catch(done)
    
})




//levantar server y db
db.sync({ force: false })
  .then(() => {
    app.listen(3001, () => {
      console.table("SERVER LISTENING ON PORT 3001");
    });
  })
  .catch((error) => console.log("HUBO UN ERROR ---> ", error));

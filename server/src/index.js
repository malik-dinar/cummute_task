import express from "express";
import connectDb from "./config/connection.js";
import "dotenv/config";
import cors from "cors";
import apiRoutes from "./routes/index.js";

import flash from "express-flash"
import session from 'express-session'
// import initializePassport from "./config/passport-config.js";
import passport from "passport";
// initializePassport(
//     passport, 
//     email => User.find( user => user.email === email)   // array -> mongod
// )

const app = express();

const PORT = process.env.PORT || 3001;  

connectDb();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(express.json());
app.use(cors());

app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

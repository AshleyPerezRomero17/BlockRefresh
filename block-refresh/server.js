const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { ModuleResolutionKind } = require("typescript");

const app = express();

app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword123!',
    database: 'blockRefreshUsers'
});


app.post("/api/register", (req,res) => {

    const {fullname, username, password, email} = req.body;
    

    db.query(
        "INSERT INTO Members (fullname, username, password, email) VALUES (?,?,?,?)", 
        [fullname, username, password, email], (err, results) => {
        console.log(err);
    });
});

app.post('/api/login', (req,res) => {
    const {username, password} = req.body;
    

    db.query(
        "SELECT * FROM Members WHERE username = ? AND password = ?", 
        [username, password], (err, result) => {
        if (err) {
        console.log({err: err})
        } 
        
            if (result) {
            console.log(result);
        } else {
        res.send({ message: "Wrong username/password combination"});
        }
    }
    );
});


app.listen(3001, () => {
    console.log("running server");
});
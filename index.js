const express = require ("express");
const morgan = require("morgan");
const app = express();

// Settings
app.set("appName", "Tutorial de Express");
app.set("view  engine", "ejs");

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
// app.all("/user",(req,res,next) =>{
//     console.log("Por aquí paso");
//     next();
// });

app.get("/", (req,res)=>{
    const data = [{name:"Ana"}, {name:"Janeth"},{name: "Diego"},{name:"Adriana"}];
    res.render("index.ejs", {people: data});
});

app.get("/user", (req,res) =>{
    res.json({
        username:"Cameron",
        lastname: "How"
    });
});

app.post("/user", (req,res) =>{
    console.log(req.body);
    res.send("POST Respuesta recibida");
});

app.put("/contact", (req,res) =>{
    res.send("Respuesta actualizada");
});

app.delete("/test", (req,res) =>{
    res.send("<h1>DELETE respuesta recibida</h1>");
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log(app.get("appName"));
    console.log("Server on port 3000");
});
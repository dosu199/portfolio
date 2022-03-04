const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));

const viewsPath = path.join(__dirname + "/templates/views")
const partialsPath = path.join(__dirname, "/templates/partials")

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("http://localhost:5000/plantsVsZombies", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/PlantsVZombies/index.html`));
});

app.get("http://localhost:5000/twenty-forty-eight", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/twenty-forty-eight/index.html`));
});

app.get("http://localhost:5000/tetris", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/tetris/index.html`));
});

app.get("http://localhost:5000/snake", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/snake/index.html`));
});

app.get("http://localhost:5000/cars", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/cars/index.html`));
});

app.get("http://localhost:5000/colorTetris", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/colorTetris/index.html`));
});

app.get("http://localhost:5000/calculator", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/calculator/index.html`));
});

app.get("http://localhost:5000/caseOpening", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/case/index.html`));
})

app.get("http://localhost:5000/dice", (req, res) => {
    //res.sendFile(path.join(`${__dirname}/public/DiceNew`));
});

app.get("http://localhost:5000/matchingGame", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/MatchingGame/index.html`));
});

app.get("http://localhost:5000/1", (req, res) => {
   res.send("hey")
});



app.listen(port, () => {
    console.log(`Server running on ${port} port`)
})
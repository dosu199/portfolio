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

app.get("/plantsVsZombies", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/PlantsVZombies/index.html`));
});

app.get("/twenty-forty-eight", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/twenty-forty-eight/index.html`));
});

app.get("/tetris", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/tetris/index.html`));
});

app.get("/snake", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/snake/index.html`));
});

app.get("/cars", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/cars/index.html`));
});

app.get("/colorTetris", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/colorTetris/index.html`));
});

app.get("/calculator", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/Calculator/index.html`));
});

app.get("/caseOpening", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/case/index.html`));
})

app.get("/dice", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/DiceNew/index.html`));
});

app.get("/matchingGame", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/MatchingGame/index.html`));
});

app.listen(port, () => {
    console.log(`Server running on ${port} port`)
})
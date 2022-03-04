const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 3000

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

app.get("https://suad-portfolio.herokuapp.com/plantsVsZombies", (req, res) => {
    res.sendFile(path.join(`${__dirname}/PlantsVZombies`));
})

app.get("https://suad-portfolio.herokuapp.com/twenty-forty-eight", (req, res) => {
    res.sendFile(path.join(`${__dirname}/twenty-forty-eight/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/tetris", (req, res) => {
    res.sendFile(path.join(`${__dirname}/tetris/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/snake", (req, res) => {
    res.sendFile(path.join(`${__dirname}/snake/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/cars", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/cars/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/colorTetris", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/colorTetris/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/calculator", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/calculator/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/caseOpening", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/case/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/dice", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/DiceNew/index.html`));
})

app.get("https://suad-portfolio.herokuapp.com/matchingGame", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/MatchingGame/index.html`));
})

app.listen(port, () => {
    console.log(`Server running on ${port} port`)
})
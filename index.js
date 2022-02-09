const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const hbs = require('hbs');
const requests = require('requests');

//  Builtin Middleware code
const staticpath = path.join(__dirname, "/public");
const templates = path.join(__dirname, "/templates/views");
const partialpath = path.join(__dirname, "/templates/partial")
hbs.registerPartials(partialpath);
console.log(path.join(__dirname, "/public"));

app.use(express.static(staticpath));
// above code use for single page website

// To set the views engine
app.set("view engine", "hbs");
app.set("views", templates)

app.get("", (req, res) => {
    res.render('index.hbs', { name: "Dipu Sharma" });
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.get("/contact", (req, res) => {
    res.render('contact');
})
app.get("/weather", (req, res) => {

    // requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=28fc050594456ce16003df2161042f4b`)
    //     .on("data", (chunk) => {
    //         const objData = JSON.parse(chunk);
    //         const arrData = [objData];
    //         // console.log(`City Name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
    //         res.write(arrData[0].name);
    //     })
    //     .on("end", (err) => {
    //         if (err) return console.log("Connection Closed due to errors", err)
    //         res.end();
    //     });
    res.render('weather')
});

app.get('*', (req, res) => {
    res.render("404")
})
app.listen(8001, "127.0.0.1", () => {
    console.log("Now Running Server 'Localhost', on 8001 Port");
});
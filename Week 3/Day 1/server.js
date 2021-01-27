const express = require("express");
const app = express();
const Handlebars = require("handlebars")
const expressHandlebars = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");
const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { response } = require("express");
const { MenuItem } = require("./MenuItem");
const loadAndInsert = require("./populateDB")

const port = 3000;

app.use(express.static("public"));

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.engine("handlebars", handlebars)
app.set("view engine", "handlebars")

app.get("/restaurant", (request, response) => {
    response.render("rest", {date: new Date()})
})

app.get("/about", (request, response) => {
    response.render("about", {date: new Date()})
})

// -----------------------

app.get("/", async (req, res) => {
    {date: new Date()}
    const restaurants = await Restaurant.findAll({
        include: [
            {model: Menu, as: "menus",
                include: [{model: MenuItem, as: "items"
            }]
        }
    ],
        nest: true
    });

    console.log(restaurants) 
    try {
        res.render("home", {restaurants})
    } catch (Error) {
        console.log(Error)
    }
})

// The route for the anchor tags to the specific restaurants
app.get("/restaurants/:id", async (req, res) => {
    console.log("get restaurant with ID:", req.params.id)
    res.send()
})

app.get("/restaurants/:id", async (req, res) => {
    // Uses the Primary key in the restaurant class to match to the relevant restaurant menus
    const restaurant = await Restaurant.findByPk(req.params.id)
    const menus = await restaurant.getMenus({
        include: [{model: Item, as: "items"}],
        nest: true
    })
    res.render("restaurant", {restaurant, menus})
})

app.listen(port, () => {
    console.log("Server spinning up!")
})
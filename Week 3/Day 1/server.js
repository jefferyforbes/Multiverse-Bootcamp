const express = require("express");
const app = express();
const Handlebars = require("handlebars")
const expressHandlebars = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access");
const {Restaurant} = require("./Restaurant");
const {Menu} = require("./Menu");
const {response} = require("express");
const {MenuItem} = require("./MenuItem");
const {Rating} = require("./Rating")
const loadAndInsert = require("./populateDB");


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
    // testing purpose: console.log("ID is " + req.params.id)
    // Uses the Primary key in the restaurant class to match to the relevant restaurant menus
    const restaurant = await Restaurant.findByPk(req.params.id)
    const menus = await restaurant.getMenus({
        include: [{model: MenuItem, as: "items"}],
        nest: true
    })

    // ------Rating Function-------
    // const rating = await restaurant.getRating({include: [{model: Review, as: "review"}],
    //     nest: true})

    res.render("restaurants", {restaurant, menus}) // Add Rating back in when finished
})

//---CRUD---
 //---------Create----------
app.get("/new", (request, response) => {
    response.render("new")

    app.post("/restaurants", async (req, res) => {
        // console.log(req.body);
        const restaurant = await Restaurant.create(req.body)
        res.redirect("/")
    })
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//-----------Delete----------
app.post("/restaurants/:id/delete", async (req, res) => {
    console.log(req.params.id)
    await Restaurant.findByPk(req.params.id)
    .then(restaurant => {
        restaurant.destroy()
        res.redirect("/")})
})

//-----------Edit---------------
app.get("/restaurants/:id/edit", async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render("edit", {restaurant})
})
    
//---- Update -----
app.post("/restaurants/:id/edit", async (req, res) =>{
    const restaurant = await Restaurant.findByPk(req.params.id)
    console.log(req.params.id)

    await restaurant.update(req.body)

    await restaurant.save()
    console.log("Restaurant edit was Successful!")
    await restaurant.reload()

    res.redirect(`/restaurants/${restaurant.id}`)
})

//----------RUN SERVER-------------
app.listen(port, () => {
    console.log("Server spinning up!")
});

// ------------------CODE DUMP/STORAGE----------------------
const sqlite3 = require("sqlite3").verbose();
const fsp = require("fs").promises;
const db = new sqlite3.Database('./RestaurantsDB.sqlite');


async function load() {
    console.log("calling load");
    const restaurantFile = "./restaurants.json";

    // wait for the restaurant data file to be read
    const buffer = await fsp.readFile(restaurantFile);
    const restaurantsArray = (JSON.parse(String(buffer)))

    // loop through the restaurantsArray to get hold of the list of restaurants
    for (let i = 0; i < restaurantsArray.length; i++) {
        //  const RestaurantMenu = restaurantsArray[i].name;
        console.log("RESTAURANTS:", restaurantsArray[i].name); // printing name of each restaurant

        // loop through the menus associated with the restaurant
        for (let j = 0; j < restaurantsArray[i].menus.length; j++) {
            console.log("MENUS:", restaurantsArray[i].menus[j].title); // printing title of each menu

            // loop through the items associated with the restaurant
            for (let k = 0; k < restaurantsArray[i].menus[j].items.length; k++) {
                console.log("ITEMS:", restaurantsArray[i].menus[j].items[k].name);
            }
        }
    }
}
//main flow
load();
try {
    // clean up loose data and close the database
} finally {
    db.close();
}
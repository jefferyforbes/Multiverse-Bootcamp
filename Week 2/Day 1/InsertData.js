const sqlite3 = require("sqlite3").verbose();
const fsp = require("fs").promises;
const db = new sqlite3.Database("./RestaurantsDB.sqlite", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err)
    else {
        console.log("Connected to the database")
    };
});

async function load() {
    console.log("calling load");
    const restaurantFile = "./restaurants.json";

    // wait for the restaurant data file to be read
    const buffer = await fsp.readFile(restaurantFile);
    const restaurantsArray = (JSON.parse(String(buffer)))

    // loop through the restaurantsArray for the restaurant title
    for (let i = 0; i < restaurantsArray.length; i++) {
        const restaurant = restaurantsArray[i];
        // console.log(`RESTAURANTS: ${restaurant.name} and ${restaurant.image}`); // printing name of each restaurant
        stmt1 = db.prepare(`INSERT INTO RESTAURANTS (restaurantName, imageLink) VALUES (${restaurant.name}, ${restaurant.images})`);
        stmt1.run();

        // loop through the menus associated with the restaurant
        for (let j = 0; j < restaurantsArray[i].menus.length; j++) {
            const restaurantMenu = restaurantsArray[i].menus[j];
            // console.log(`MENUS: ${restaurantMenu.title}`); // printing the menu returned into the console
            stmt2 = db.prepare(`INSERT INTO MENUS (title) VALUES (${restaurantMenu.title})`);
            stmt2.run();

            // loop through the items associated with the restaurant
            for (let k = 0; k < restaurantsArray[i].menus[j].items.length; k++) {
                const restaurantMenuItems = restaurantsArray[i].menus[j].items[k];
                // console.log(`ITEMS: ${restaurantMenuItems.name} $${restaurantMenuItems.price}`) // printing the items returned into the console
                const stmt3 = db.prepare(`INSERT INTO MENU_ITEMS (menuItemName, price) VALUES (${restaurantMenuItems.name}, ${restaurantMenuItems.price})`);
                stmt3.run();
            }
        }
    }
};

load();

// setTimeout(() => {
//     try{}
//     finally{
//     db.close();
// };
// }, 18000);


const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./RestaurantsDB.sqlite');

try {
    // The first set of DB run commands checks the database if the neecessary tbales exists -> If they do then it removes them. 
    db.serialize(function() {
        db.run("DROP TABLE IF EXISTS RESTAURANTS");
        db.run("DROP TABLE IF EXISTS MENUS");
        db.run("DROP TABLE IF EXISTS MENU_ITEMS");
        // The following set then starts to create the tables witht the necessary parameters in the database to load the data into 
        db.run("CREATE TABLE RESTAURANTS (ID INTEGER PRIMARY KEY AUTOINCREMENT , restaurantName TEXT,imageLink TEXT)");
        db.run("CREATE TABLE MENUS (ID INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, restaurant_id INT, FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(id))");
        db.run("CREATE TABLE MENU_ITEMS (ID INTEGER PRIMARY KEY AUTOINCREMENT, menuItemName TEXT, price REAL, menu_id INT, FOREIGN KEY (menu_id) REFERENCES MENUS(id))");
    });
    // Clean up loose data and close the database
} finally {
    db.close();
}
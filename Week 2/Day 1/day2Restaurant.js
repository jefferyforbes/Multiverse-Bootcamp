const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database('./mydb.sqlite');

try {
    db.serialize(function() {
        // db.run("CREATE TABLE IF NOT EXISTS Restaurants (RestaurantID INTEGER PRIMARY KEY AUTOINCREMENT, RestaurantName TEXT, ImageLink TEXT)");
        // db.run("CREATE TABLE IF NOT EXISTS Menu1 (MenuID INTEGER PRIMARY KEY AUTOINCREMENT, Meal TEXT, Sides TEXT, Drink TEXT, RestaurantRef INTEGER)");
        // db.run("CREATE TABLE IF NOT EXISTS MenuItems (ItemID INTEGER PRIMARY KEY AUTOINCREMENT, ItemName TEXT, Price INTEGER)");
        // db.run("CREATE TABLE IF NOT EXISTS DesertsMenu (ItemID INTEGER PRIMARY KEY AUTOINCREMENT, ItemName TEXT)");
        let stmt;

        // try {
        // stmt = db.prepare(`INSERT INTO Restaurants (RestaurantName, ImageLink) 
        // VALUES 
        // ("Fhresh Salads", "www.thefreshestsaladthereis.com"), 
        // ("CheeseCake Hub", "www.cheesycheesecakes.com"),
        // ("Bennys Burgers", "www.burgersarethebest.com"),
        // ("Wonderful Chinese", "www.deliciouschinesefoodpics.com"),
        // ("Best Kebab Shop", "www.bestkebabspictures.com")`);
        // stmt.run();
        // } finally {
        //     stmt.finalize();
        // }

        // ====== DELETE COMMAND ==========
        // db.run("DELETE FROM Restaurants");

        // ----------SECOND QUERY----------

        // try {
        //     stmt = db.prepare(`INSERT INTO Menu1 (Meal, Sides, Drink, RestaurantRef) VALUES
        //         ("Warrior Burger", "Fries", "Chocolate Milkshake", 1),
        //         ("Lasgana", "N/A", "Red Wine", 1),
        //         ("Spaghetti Bolognese", "N/A", "White Wine", 1),
        //         ("Chicken Fajitas", "Spicy Roasted Potatoes", "Sparkling Water", 1)`);
        //     stmt.run();

        // } catch {
        //     (err);
        // } finally {
        //     stmt.finalize();
        // }


        // ---------THIRD QUERY---------

        // try {
        //     stmt = db.prepare(`
        // INSERT INTO MenuItems (ItemName, Price) VALUES
        //     ("Avocado Salad", 2.87)`);
        //     stmt.run();

        // } catch {
        //     (error);
        // } finally {
        //     stmt.finalize();
        // }

        // ---------FOURTH QUERY---------

        // try {
        //     stmt = db.prepare(`INSERT INTO DesertsMenu (ItemName) 
        // VALUES
        //     ("Chocolate Chip Cake")`);
        //     stmt.run();

        // } catch {
        //     (error);
        // } finally {
        //     stmt.finalize();
        // }

        //DISPLAY ALL THE RESTAURANTS
        db.each("SELECT * FROM Restaurants",
            function(err, rows) {
                console.log(rows);
            }
        );

        //DISPLAY ALL THE MenuItems
        db.each("SELECT * FROM MenuItems",
            function(err, rows) {
                console.log(rows);
            }
        );

        //DISPLAY ALL THE Menu List 1
        db.each("SELECT * FROM Menu1",
            function(err, rows) {
                console.log(rows);
            }
        );

        // ========REMOVE A TABLE FUNCTION========
        // try {
        //     stmt = db.prepare(`DROP TABLE [-TABLENAME-]`);
        //     stmt.run();
        // } finally { stmt.finalize(); }

        // JOINS MENU1 TO RESTAURARNTS
        db.each("SELECT Menu1.MenuID, Restaurants.RestaurantName, Menu1.Meal FROM Menu1 INNER JOIN Restaurants ON Menu1.RestaurantRef = RestaurantID",
            function(err, rows) {
                console.log(rows);
            }
        );

        // DISPLAYS CHANGES
        db.each("SELECT * FROM Restaurants",
            function(err, rows) {
                console.log(rows);
            }
        );
    });
    // Clean up loose data and close the database
} finally {
    db.close();
}
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the Restaurant SQlite database.');
});

db.serialize(function() {
    db.run("CREATE TABLE CUSTOMERS (CustomerID INTEGER PRIMARY KEY, CustomerName TEXT, ContactName TEXT, Address TEXT, City TEXT, PostalCode INTEGER, Country TEXT)");
    console.log("Table created");

    const stmt = db.prepare()

    stmt.finalize();

    db.each("SELECT * FROM CUSTOMER", function(err, row) {
        console.log(row.id + ": " + row.name);
    });
})

// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
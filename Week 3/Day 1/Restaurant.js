const {sequelize, DataTypes, Model} = require("./sequelize_index");
const {Menu} = require("./Menu");
const {Rating} = require("./Rating");
const {Review} = require("./Review");

/**
 * Represents a Restaurant
 */
class Restaurant extends Model {
    // add methods here
}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

/* The hasMany means that for each restaurant there are many menus and the
 restaurndtID key likes the relevant menu to correct restaurant. */

Restaurant.hasMany(Menu, {as: "menus",  foreignKey: 'restaurant_id' });
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'});

// -----------------------------------
Restaurant.hasMany(Rating, {as: "ratings", foreignKey: "restaurant_id"})
Rating.belongsTo(Restaurant, {foreignKey: "restaurant_id"})

Restaurant.hasMany(Review, {as: "review", foreignKey: "restaurant_id"})
Review.belongsTo(Restaurant, {foreignKey: "restaurant_id"});

module.exports = {Restaurant};

//---------------local testing - remove when using Jest---------------
// (async () => {
//     await sequelize.sync({ force: true });
//     const r = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })

//     console.log("Inserted restaurant name is:" + r.name);
// })();

// (async () => {
//     await sequelize.sync({ force: true }); 
//     const r = await Restaurant.create({ name: 'Salad World', image: 'http://some.image.url' })

//     console.log("Inserted restaurant name is:" + r.name);
// })();

// (async () => {
//     await sequelize.sync({ force: true }); 
//     const r = await Restaurant.create({ name: 'Fish Island', image: 'http://some.image.url' })

//     console.log("Inserted restaurant name is:" + r.name);
// })();


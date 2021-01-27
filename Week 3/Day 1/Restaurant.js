const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Menu} = require('./Menu')

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

Restaurant.hasMany(Menu, {as: "menus",  foreignKey: 'restaurant_id' });
/* The hasMany means that for each restaurant there are many menus and the
 restaurndtID key likes the relevant menu to correct restaurant. */
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'});

module.exports = {Restaurant};

// // local testing - remove when using Jest

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


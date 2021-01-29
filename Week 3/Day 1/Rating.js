const {sequelize, DataTypes, Model} = require("./sequelize_index");

class Rating extends Model {
    
}

Rating.init({
    rating: DataTypes.INTEGER}, {
    sequelize,
    timestamps: false
});

module.exports = {Rating};
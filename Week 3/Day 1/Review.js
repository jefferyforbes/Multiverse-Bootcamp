const {sequelize, DataTypes, Model} = require("./sequelize_index");

class Review extends Model {
    
}

Review.init({
    review: DataTypes.STRING}, {
    sequelize,
    timestamps: false
});

module.exports = {Review};
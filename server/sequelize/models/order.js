'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, {
        foreignKey: { allowNull: false }
      });
      models.Customer.hasMany(Order);
      Order.belongsTo(models.Ticket, {
        foreignKey: { allowNull: false }
      });
      models.Ticket.hasMany(Order);
    }
  }
  Order.init({
    qrCode: DataTypes.STRING,
    note: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'used', 'canceled')
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
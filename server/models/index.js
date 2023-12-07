const Item = require('./Item');
const User = require('./User');

Item.belongsToMany(User, { through : 'cart' });
User.belongsToMany(Item, { through : 'cart' });

module.exports = {
  Item,
  User
};

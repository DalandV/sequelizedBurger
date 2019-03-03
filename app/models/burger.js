module.exports = function(sequelize, Datatypes) {
  const Burger = sequelize.define("Burger", {
    burger_name: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      }
    },
    devoured: {
      type: Datatypes.BOOLEAN,
      defaultValue: 0
    }
  });
  return Burger;
};

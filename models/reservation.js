module.exports = function(sequelize, DataTypes) {
  var Reserves = sequelize.define("Reserves", {
    resDate: {
      type: DataTypes.DATEONLY,
      isDate: true,
      notNull: true
    },
    resTime: {
      type: DataTypes.TIME
    },
    groupsize: {
      type: DataTypes.INTEGER
    }
  });
  Reserves.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    models.Reserves.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Reserves;
};

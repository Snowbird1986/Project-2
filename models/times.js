module.exports = function(sequelize, DataTypes) {
  var Times = sequelize.define("Times", {
    beginDate: {
      type: DataTypes.DATEONLY,
      isDate: true,
      notNull: true,
      defaultValue: "2018-12-10"
    },
    endDate: {
      type: DataTypes.DATEONLY,
      isDate: true,
      notNull: true,
      defaultValue: "2018-12-10"
    },
    startTime: {
      type: DataTypes.TIME
    },
    endTime: {
      type: DataTypes.TIME
    },
    frequency: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      defaultValue: 15
    },
    timeSlots: {
      type: DataTypes.TIME
    },
    availableSpaces: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    }
  });
  return Times;
};
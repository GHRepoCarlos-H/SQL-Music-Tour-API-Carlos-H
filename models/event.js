//models folder event.js file
'use strict';
const {
  Model
} = require('sequelize');
const stage_event = require('./stage_event');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, Stage_Event, Set_Time, Meet_Greet }) {
      Event.hasMany(Set_Time,  {
        foreignKey: "event_id",
        as: "set_times",
      })
      Event.belongsToMany(Stage,  {
        foreignKey: "event_id",
        as: "stages",
        through: Stage_Event
      })
      Event.hasMany(Meet_Greet, {
        foreignKey: "event_id",
        as:"meet_greets"
      })
    }
  }
  Event.init(
  {
    event_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
  },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
  },    
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
  },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
  }, 
},
{
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false,
  });
  
  return Event;
};
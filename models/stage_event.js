//models folder stage_event.js file
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_Event extends Model {
   
    static associate(models) {
      
    }
  }
  Stage_Event.init(
    {
    stage_events_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stage_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'Stage_Event',
    tableName: 'stage_events',
    timestamps: false,
  });

  return Stage_Event;
};
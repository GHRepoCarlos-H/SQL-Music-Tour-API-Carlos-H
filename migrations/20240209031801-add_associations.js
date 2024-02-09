'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addConstraint('meet_greets', {
        fields: ['band_id'],
        type: 'foreign key',
        name: 'meet_greets_band_id_fkey',
        references: {
          table: 'bands',
          field: 'band_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      queryInterface.addConstraint('meet_greets', {
        fields: ['event_id'],
        type: 'foreign key',
        name: 'meet_greets_event_id_fkey',
        references: {
          table: 'events',
          field: 'event_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      queryInterface.addConstraint('set_times', {
        fields: ['event_id'],
        type: 'foreign key',
        name: 'set_times_event_id_fkey',
        references: {
          table: 'events',
          field: 'event_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      queryInterface.addConstraint('set_times', {
        fields: ['band_id'],
        type: 'foreign key',
        name: 'set_times_band_id_fkey',
        references: {
          table: 'bands',
          field: 'band_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      queryInterface.addConstraint('set_times', {
        fields: ['stage_id'],
        type: 'foreign key',
        name: 'set_times_stage_id_fkey',
        references: {
          table: 'stages',
          field: 'stage_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      queryInterface.addConstraint('stage_events', {
        fields: ['stage_id'],
        type: 'foreign key',
        name: 'stage_events_stage_id_fkey',
        references: {
          table: 'stages',
          field: 'stage_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      queryInterface.addConstraint('stage_events', {
        fields: ['event_id'],
        type: 'foreign key',
        name: 'stage_events_event_id_fkey',
        references: {
          table: 'events',
          field: 'event_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeConstraint('meet_greets', 'meet_greets_band_id_fkey'),
      queryInterface.removeConstraint('meet_greets', 'meet_greets_event_id_fkey'),
      queryInterface.removeConstraint('set_times', 'set_times_event_id_fkey'),
      queryInterface.removeConstraint('set_times', 'set_times_band_id_fkey'),
      queryInterface.removeConstraint('set_times', 'set_times_stage_id_fkey'),
      queryInterface.removeConstraint('stage_events', 'stage_events_stage_id_fkey'),
      queryInterface.removeConstraint('stage_events', 'stage_events_event_id_fkey'),
    ]);
  }
};


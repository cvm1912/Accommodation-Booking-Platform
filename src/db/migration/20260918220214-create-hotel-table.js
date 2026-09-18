'use strict';

module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable('hotels', {
            id: { type: 'INTEGER', autoIncrement: true, primaryKey: true, allowNull: false },
            name: { type: 'STRING', allowNull: false },
            address: { type: 'TEXT', allowNull: false },
            created_at: { type: 'DATE', allowNull: false, defaultValue: new Date() },
            updated_at: { type: 'DATE', allowNull: false, defaultValue: new Date() }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('hotels');
    }
};

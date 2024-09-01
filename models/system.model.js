module.exports = (sequelize, Sequelize) => {
    const System = sequelize.define(
        'System',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            retentionTime: {
                type: Sequelize.INT,
                defaultValue: 10
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return System;
};
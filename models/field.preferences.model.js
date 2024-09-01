module.exports = (sequelize, Sequelize) => {
    const FieldPreferences = sequelize.define(
        'FieldPreferences',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            fieldID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            weatherNotification: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            fieldSensors: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            sensorDataID: {
                type: Sequelize.STRING,
                defaultValue: null
            },
            satelliteIP: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            artificalIntelligenceControl: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            pestControl: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return FieldPreferences;
};
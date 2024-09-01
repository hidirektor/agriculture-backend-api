module.exports = (sequelize, Sequelize) => {
    const SensorData = sequelize.define(
        'SensorDatas',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            sensorDataID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            sensorID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            sensorData: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return SensorData;
};
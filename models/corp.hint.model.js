module.exports = (sequelize, Sequelize) => {
    const CorpHint = sequelize.define(
        'CorpHints',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            hintCategory: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            hintList: {
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
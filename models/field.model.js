module.exports = (sequelize, Sequelize) => {
    const Field = sequelize.define(
        'Fields',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fieldID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            fieldName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fieldCoordinates: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fieldPolygon: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdDate: {
                type: Sequelize.BIGINT,
                defaultValue: () => Math.floor(Date.now() / 1000)
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return Field;
};
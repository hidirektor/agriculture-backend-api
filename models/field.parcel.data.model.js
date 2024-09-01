module.exports = (sequelize, Sequelize) => {
    const FieldParcelData = sequelize.define(
        'FieldParcelDatas',
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
            fieldRegion: {
                type: Sequelize.STRING,
                allowNull: false
            },
            parcelNumber: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return FieldParcelData;
};
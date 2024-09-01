module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define(
        'Addresses',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            addressID: {
              type: Sequelize.STRING,
              unique: true,
              allowNull: false
            },
            userID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            addressName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            addressCoordinates: {
                type: Sequelize.STRING,
                allowNull: false
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false
            },
            district: {
                type: Sequelize.STRING,
                allowNull: false
            },
            neighborhood: {
                type: Sequelize.STRING,
                allowNull: false
            },
            addressLineOne: {
                type: Sequelize.STRING,
                allowNull: false
            },
            addressLineTwo: {
                type: Sequelize.STRING,
                defaultValue: null
            },
            addressShortcut: {
                type: Sequelize.STRING,
                defaultValue: null
            },
            zipCode: {
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

    return Address;
};
const { v4: uuidv4 } = require('uuid');
const roles = require('./roles');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            userName: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            userType: {
                type: Sequelize.ENUM,
                values: [roles.SYSOP, roles.USER, roles.MERCHANT, roles.AGRICULTURAL_ENGINEER, roles.PARTNERSHIP],
                allowNull: false
            },
            fullName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            eMail: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            profilePhotoID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            lastPasswordChange: {
                type: Sequelize.BIGINT,
                allowNull: true
            },
            createdAt: {
                type: Sequelize.BIGINT,
                defaultValue: () => Math.floor(Date.now() / 1000)
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return User;
};
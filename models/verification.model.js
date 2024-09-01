module.exports = (sequelize, Sequelize) => {
    const Verification = sequelize.define(
        'Verification',
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
            idVerification: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            mailVerification: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            phoneNumberVerification: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return Verification;
};
module.exports = (sequelize, Sequelize) => {
    const OrderReceiver = sequelize.define(
        'OrderReceivers',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            receiverID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            userID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            receiverName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            idNumber: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNumber: {
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

    return OrderReceiver;
};
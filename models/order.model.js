module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define(
        'Orders',
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
            addressID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            receiverID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            orderID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            orderType: {
                type: Sequelize.STRING,
                allowNull: false
            },
            orderChannel: {
                type: Sequelize.STRING,
                allowNull: false
            },
            orderAmount: {
                type: Sequelize.STRING,
                allowNull: false
            },
            paymentMethod: {
                type: Sequelize.STRING,
                allowNull: false
            },
            isPaid: {
              type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            receiptID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            orderDate: {
                type: Sequelize.BIGINT,
                defaultValue: () => Math.floor(Date.now() / 1000)
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return Order;
};
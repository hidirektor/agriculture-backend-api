module.exports = (sequelize, Sequelize) => {
    const CorpMission = sequelize.define(
        'CorpMissions',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            fieldID: {
                type: Sequelize.STRING,
                allowNull: false
            },
            corpID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            missionList: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return CorpMission;
};
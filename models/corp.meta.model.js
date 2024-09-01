module.exports = (sequelize, Sequelize) => {
    const CorpMeta = sequelize.define(
        'CorpMetas',
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
                allowNull: false
            },
            corpName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            sustuinabilityChoices: {
                type: Sequelize.STRING,
                allowNull: false
            },
            irrigationPreference: {
                type: Sequelize.STRING,
                allowNull: false
            },
            pestControlChoice: {
                type: Sequelize.STRING,
                allowNull: false
            },
            plantingDate: {
                type: Sequelize.BIGINT,
                defaultValue: () => Math.floor(Date.now() / 1000)
            },
            harvestDate: {
                type: Sequelize.BIGINT,
                defaultValue: () => Math.floor(Date.now() / 1000)
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return CorpMeta;
};
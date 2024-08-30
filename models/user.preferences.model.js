module.exports = (sequelize, Sequelize) => {
  const UserPreferences = sequelize.define(
    'UserPreferences',
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
      language: {
        type: Sequelize.STRING,
        defaultValue: true
      },
      nightMode: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
        mailSubscription: {
          type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        smsSubscription: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        defaultCurrency: {
            type: Sequelize.STRING,
            defaultValue: false
        },
        newsSources: {
            type: Sequelize.STRING,
            defaultValue: "  {\n" +
                "    \"TRT Haber\": \"false\",\n" +
                "    \"Cumhuriyet\": \"true\",\n" +
                "    \"Hürriyet\": \"false\",\n" +
                "    \"NTV Haber\": \"false\",\n" +
                "    \"EuroNews\": \"false\",\n" +
                "    \"BBC\": \"false\",\n" +
                "    \"AgWeb\": \"false\",\n" +
                "    \"AgFunder\": \"false\",\n" +
                "    \"AgriLand\": \"false\"\n" +
                "  }"
        },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  );

  return UserPreferences;
};
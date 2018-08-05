module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Todo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      task: {
        type: DataTypes.STRING,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      }
    },
    {
      paranoid: true,
      underscored: true,
    }
  );
};
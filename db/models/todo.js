module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    task: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    completed: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  }, 
  {
    paranoid: true,
    underscored: true,
  });
  return Todo;
};
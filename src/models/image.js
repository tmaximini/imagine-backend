// Image model
export default function (sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Image.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            field: 'user_id',
            allowNull: false
          }
        })
      }
    }
  })

  return Image
}

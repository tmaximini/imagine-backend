// Image model
export default function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    description: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
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
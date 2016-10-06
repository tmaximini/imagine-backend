
export default function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Image.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  })

  return Image
}
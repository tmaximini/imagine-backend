import bcrypt from 'bcrypt'

const SALT_FACTOR = 10

// The user model
export default function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    bio: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Image)
      },
      validaPassword: function(password, passwd, done, user) {
        bcrypt.compare(password, passwd, (err, isMatch) => {
          if (err) {
            console.log(err)
          }
          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        })
      }
    }
  })

  User.hook('beforeCreate', function(user, options, cb) {
    console.log('user before create!', user.password, options, cb);
    bcrypt.hash(user.password, SALT_FACTOR, function(err, hash) {
      if (err) {
        console.error(err)
        user = {}
      } else {
        user.password = hash
        cb(null, user)
      }
    })
  })

  return User
}
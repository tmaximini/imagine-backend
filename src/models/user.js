import bcrypt from 'bcrypt'

// The user model
export default function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
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

  User.hook('beforeCreate', (user, next) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => salt)
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        console.log(err)
        return next(err)
      } else {
        user.password = hash
        return next(null, user)
      }
    })
  })

  return User
}
const sequelize = require('../db')
const {DataTypes} = require('sequelize')



const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})



const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.INTEGER},
})

const BasketTea = sequelize.define('basket_tea', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
})

const Tea = sequelize.define('tea', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},

    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Sort = sequelize.define('sort', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const TeaInfo = sequelize.define('tea_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeSort = sequelize.define('type_sort', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)



Basket.hasMany(BasketTea)
BasketTea.belongsTo(Basket)

Type.hasMany(Tea)
Tea.belongsTo(Type)

Sort.hasMany(Tea)
Tea.belongsTo(Sort)

Tea.hasMany(Rating)
Rating.belongsTo(Tea)

Tea.hasMany(BasketTea)
BasketTea.belongsTo(Tea)

Tea.hasMany(TeaInfo, {as: 'info'});
TeaInfo.belongsTo(Tea)

Type.belongsToMany(Sort, {through: TypeSort })
Sort.belongsToMany(Type, {through: TypeSort })

module.exports = {
    User,
    Basket,
    BasketTea,
    Tea,
    Type,
    Sort,
    Rating,
    TypeSort,
    TeaInfo
 
}






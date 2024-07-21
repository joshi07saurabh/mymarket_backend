const { getAllShops, getShopById, createShop } = require('../controllers/shopControllers')

const shopRouter = require('express').Router()


shopRouter
    .route('/')
    .get(getAllShops)
    
shopRouter
    .route('/:id')
    .get(getShopById)

shopRouter.route('/add-shop')
.post(createShop)

module.exports  = shopRouter
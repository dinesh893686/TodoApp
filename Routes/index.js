const express=require('express')
const Router = express.Router()
const home_controller=require('../Controller/homeController')
Router.get('/',home_controller.home)



module.exports=Router
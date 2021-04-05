const express=require('express')
const Router = express.Router()
const homeController=require('../Controller/homeController')
Router.get('/',homeController.home)



module.exports=Router
const express = require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/Admin/AdminController')
const BlogController = require('../controllers/Admin/blogcontroller')
const CategoryController = require('../controllers/Admin/CategoryController')
const AboutController = require('../controllers/Admin/AboutController')


const route = express.Router()

//route
route.get('/',FrontController.home)//static
route.get('/about',FrontController.About)
route.get('/team',FrontController.Team)
route.get('/blog',FrontController.Blog)
route.get('/contact',FrontController.contact)
route.get('/login',FrontController.login)
//admincontroller
route.get('/admin/dashboard',AdminController.dashboard)
//admin/blogcontroller
route.get('/admin/blogdisplay',BlogController.display)

//admin/category
route.get('/admin/categorydisplay',CategoryController.display)

//admin/about
route.get('/admin/aboutdisplay',AboutController.display)

module.exports =route

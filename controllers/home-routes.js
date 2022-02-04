const router = require('express').Router();
const sequelize = require('../config/connection');
const { Items } = require('../models/Items');


router.get('/', (req, res) => {
    
  
    res.render('landing');
  });
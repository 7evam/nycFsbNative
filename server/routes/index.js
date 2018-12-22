const express = require('express');
const router = express.Router();
const { Artist, Show, Article, Venue } = require('../models');

router.get('/artists', function(req,res){
  Artist.findAll({
    rejectOnEmpty: true,
    include:[ Show ],
  })
  .then(function(data){
    res.json(data)
  })
  .catch(function(err){
    res.send(err);
  })
})

router.get('/articles', function(req,res){
  Article.findAll({
    rejectOnEmpty: true,
  })
  .then(function(data){
    res.json(data)
  })
  .catch(function(err){
    res.send(err);
  })
})

router.get('/venues', function(req,res){
  Venue.findAll({
    rejectOnEmpty: true,
    include:[ Show ],
  })
  .then(function(data){
    res.json(data)
  })
  .catch(function(err){
    res.send(err);
  })
})

module.exports = router

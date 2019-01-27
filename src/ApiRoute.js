// ApiRoute.js

const express = require('express')
const app = express()
const ApiRoute = express.Router()
const state = require('./state')


// Defined sessionForUser
ApiRoute.route('/sessionForUser/:loginID').get(function (req, res) {

  const responseData = state.forSessionLoginID(req.params.loginID)

  res.status(200).json({
    response: {
      data: responseData,
    }
  })

})

// Defined store route
ApiRoute.route('/logEvent').post(function (req, res) {

  const eventRequest = {
    requestType: 'logEvent',
    eventCategory: req.body.eventCategory,
    eventType: req.body.eventType,
    eventCode: req.body.eventCode
  }

  console.log (eventRequest)

  res.status(200).json({ "method": "logEvent"});

});

// Require Post model in our routes module
//let Post = require('../models/Post');

// Defined store route
ApiRoute.route('/add').post(function (req, res) {

  const post = {
    title: req.body.title,
    body: req.body.body
  }
  console.log (req)
  console.log('add: ' + JSON.stringify(req.body) + '\n')

  res.status(200).json({ "method": "add"});

  // let post = new Post(req.body);
  // post.save()
  //   .then(post => {
  //   res.status(200).json(post);
  //   })
  //   .catch(err => {
  //   res.status(400).send("unable to save to database");
  //   });
});

// Defined get data(index or listing) route
ApiRoute.route('/').get(function (req, res) {

  console.log('get: ' + JSON.stringify(req.body) + '\n');

  res.status(200).json({ "method": "FETCH_BUSINESS_EVENT"});

  //   Post.find(function (err, posts){
  //   if(err){
  //     console.log(err);
  //   }
  //   else {
  //     res.json(posts);
  //   }
  // });
});
// Defined delete | remove | destroy route
ApiRoute.route('/delete/:id').get(function (req, res) {

    console.log('delete: ' + JSON.stringify(req.params.id) + '\n');

  res.status(200).json({ "method": "delete"});

    // Post.findByIdAndRemove({_id: req.params.id}, function(err, post){
    //     if(err) res.json(err);
    //     else res.json(req.params.id);
    // });
});

module.exports = ApiRoute;

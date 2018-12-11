/* jshint esversion : 6 */

// @root/api/tshirts.js

const user_follow_communityAPi = function user_follow_communityAPi(connection) {

  const router = require("express").Router();
  const user_follow_communityModel = require("../model/user_follow_community")(connection);

  router.post('/user_follow_community', (req, res) => {
    user_follow_communityModel.create((err, dataset) => {
      res.send(dataset);
    }, req.body); // post datas ici ...
    console.log(req.body);
    
  });
 

  router.get('/user_follow_community', (req, res) => {
    console.log("ca get");
    
    user_follow_communityModel.get( (err, dataset) => {
      res.send(dataset);
      // console.log("coucou");
      
    }, null);
  });

  router.delete('/user_follow_community', (req, res) => {
    user_follow_communityModel.remove((err, dataset) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(dataset);
    }, req.body); // tableau d'ids ici ...
    console.log( req.body);
    
  });

  router.patch('/user_follow_community', (req, res) => {
    user_follow_communityModel.update((err, dataset) => {
      if (err) return res.status(500).send(err);
      else return res.status(200).send(dataset);
    }, req.body); // un tableau d'ids ici ...
  });

  return router;
};

module.exports = user_follow_communityAPi;

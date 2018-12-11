/* jshint esversion : 6 */

// @root/api/tshirts.js

const community_has_hashtagAPi = function community_has_hashtagAPi(connection) {

    const router = require("express").Router();
    const community_has_hashtagModel = require("../model/community_has_hashtag")(connection);
  
    router.post('/community_has_hashtag', (req, res) => {
      community_has_hashtagModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
      console.log(req.body);
      
    });
   
  
    router.get('/community_has_hashtag', (req, res) => {
      console.log("ca get");
      
      community_has_hashtagModel.get( (err, dataset) => {
        res.send(dataset);
        // console.log("coucou");
        
      }, null);
    });
  
    router.delete('/community_has_hashtag', (req, res) => {
      community_has_hashtagModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body); // tableau d'ids ici ...
      console.log( req.body);
      
    });
  
    router.patch('/community_has_hashtag', (req, res) => {
      community_has_hashtagModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });
  
    return router;
  };
  
  module.exports = community_has_hashtagAPi;
  
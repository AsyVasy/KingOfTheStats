/* jshint esversion : 6 */

// @root/api/tshirts.js

const community_has_epicAPi = function community_has_epicAPi(connection) {

    const router = require("express").Router();
    const community_has_epicModel = require("../model/community_has_epic")(connection);
  
    router.post('/community_has_epic', (req, res) => {
      community_has_epicModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
      console.log(req.body);
      
    });
   
  
    router.get('/community_has_epic', (req, res) => {
      console.log("ca get");
      
      community_has_epicModel.get( (err, dataset) => {
        res.send(dataset);
        // console.log("coucou");
        
      }, null);
    });
  
    router.delete('/community_has_epic', (req, res) => {
      community_has_epicModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body); // tableau d'ids ici ...
      console.log( req.body);
      
    });
  
    router.patch('/community_has_epic', (req, res) => {
      community_has_epicModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });
  
    return router;
  };
  
  module.exports = community_has_epicAPi;
  
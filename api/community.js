/* jshint esversion : 6 */

// @root/api/tshirts.js

const communityAPi = function communityAPi(connection) {

    const router = require("express").Router();
    const communityModel = require("../model/community")(connection);
  
    router.post('/community', (req, res) => {
      console.log("ca post commu");

      communityModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
   
  
    router.get('/community', (req, res) => {
      console.log("ca get");
      
      communityModel.get( (err, dataset) => {
        res.send(dataset);
        // console.log("coucou");
        
      }, null);
    });
  
    router.delete('/community', (req, res) => {
      console.log("delete commu");
      
      communityModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.id); // tableau d'ids ici ...
    });
  
    router.patch('/community', (req, res) => {
      communityModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });
  
    return router;
  };
  
  module.exports = communityAPi;
  
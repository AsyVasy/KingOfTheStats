/* jshint esversion : 6 */

// @root/api/tshirts.js

const userAPi = function userAPi(connection) {

    const router = require("express").Router();
    const userModel = require("../model/user")(connection);
  
    router.post('/user', (req, res) => {
      console.log("coucoje psot")
      userModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
   
  
    router.get('/user', (req, res) => {
      console.log("ca get");
      
      userModel.get( (err, dataset) => {
        res.send(dataset);

        // pour chaque user, get sur api externe


        // console.log("coucou /user" );
        
      }, null);
    });
  
    router.delete('/user', (req, res) => {
      console.log("je delete")
      userModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.id); // tableau d'ids ici ...
    });
  
    router.patch('/user', (req, res) => {
      console.log("peut on update ?")
      userModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });
  
    return router;
  };
  
  module.exports = userAPi;
  
/* jshint esversion : 6 */

// @root/api/tshirts.js
const compte_associeAPi = function compte_associeAPi(connection) {

    const router = require("express").Router();
    const compte_associeModel = require("../model/compte_associe")(connection);
  
    router.post('/compte_associe', (req, res) => {
      compte_associeModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
   
  
    const solver = function solver(comptes) {
      const axios = require("axios");
      return new Promise((resolve, reject) => {
        var finished = 0;
        comptes.forEach(compte => {
          axios.post('http://localhost:8888/fortnite', {
                    pseudo: compte.name,
                    platform: compte.platform
                })
                .then(function(response) {
                  console.log("ajax fortnite ok")
                    compte.score = response.data.lifeTimeStats[6].value
                    compte.wins = response.data.lifeTimeStats[8].value
                    finished++;
                    if (finished === comptes.length) 
                    resolve(comptes)
                })
        });
      })
    };

    router.get('/compte_associe', (req, res) => {
      console.log("ca get compte associe");
      
      compte_associeModel.get( (err, comptes) => {

        solver(comptes).then(finalComptes => {
          console.log("finito")
          res.send(finalComptes)
          console.log(finalComptes)

        })
        console.log("compte avec les stats", comptes); 
      }, null);
    });
  
    router.delete('/compte_associe', (req, res) => {
      compte_associeModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.id); // tableau d'ids ici ...
    });
  
    router.patch('/compte_associe', (req, res) => {
      compte_associeModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });
  
    return router;
  };
  
  module.exports = compte_associeAPi;
  
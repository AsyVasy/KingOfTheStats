/*jshint esversion :  6 */

// @root/model/tshirts.js

const compte_associeModel = function compte_associeModel(connection) {

    const create = function createtshirts(clbk, data) {
      const q = "INSERT INTO compte_associe (id_user, name, platform) VALUES (?, ?, ?)";
      const payload = [data.id_user, data.name, data.platform ];
  
      connection.query(q, payload, (err, res, cols) => {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });   
    };
  
    const remove = function deleteCompte_associes(clbk, id) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM compte_associe WHERE id = ?";
  
       const query = connection.query(q, id, function (err, res, fields) {
        console.log(id);
        console.log(q);
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
      console.log(query.sql)
    };
  
    const update = function edittshirts(clbk, compte_associe) {
      const q = "UPDATE compte_associe SET id_user = ?,  name = ?, platform = ? WHERE id = ?";
      const payload = [compte_associe.id_user, compte_associe.name, compte_associe.platform, compte_associe.id];
      connection.query(q, payload, function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    };
  
    const get = function getcompte_associe(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM `compte_associe`;";
      
  
      connection.query(sql, id, (error, results, fields) => {
        // return console.log(this.sql);
        if (error) return clbk(error, null);
        else return clbk(null, results);
      });
    };
   
    return {
      create,
      remove,
      update,
      get
    };
  };
  
  module.exports = compte_associeModel;
  
/*jshint esversion :  6 */

// @root/model/tshirts.js

const communityModel = function communityModel(connection) {

    const create = function createCommunity(clbk, data) {
      const q = "INSERT INTO community (name, user_id) VALUES (?, ?)";
      const payload = [data.name, data.user_id];
  
      connection.query(q, payload, (err, res, cols) => {
        console.log(payload); 
        // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });   
    };
  
    const remove = function deleteCommunity(clbk, id) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM community WHERE id_community = ? ";
  
      console.log(id);
      connection.query(q, id, function (err, res, fields) {
        
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
    };
  
    const update = function editCommunity(clbk, community) {
      const q = "UPDATE community SET name = ?, user_id = ? WHERE id_community = ?";
      const payload = [community.name, community.user_id, community.id_community];
      connection.query(q, payload, function (err, res, fields) {
        console.log(payload);
        console.log(q);
         // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    };
  
    const get = function getcommunity(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM community;";
      
  
      connection.query(sql, [id], (error, results, fields) => {
        // return console.log(this.sql);
        if (error) return clbk(error, null);
        else return clbk(null, [fields.map(x => x.name), results]);
      });
    };
   
    return {
      create,
      remove,
      update,
      get
    };
  };
  
  module.exports = communityModel;
  
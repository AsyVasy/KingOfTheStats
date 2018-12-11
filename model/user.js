/*jshint esversion :  6 */

// @root/model/tshirts.js

const userModel = function userModel(connection) {

    const create = function createUser(clbk, data) {
      const q = "INSERT INTO user (username, email, password ) VALUES (?, ?, ?)";
      const payload = [data.username, data.email, data.password];
  
      connection.query(q, payload, (err, res, cols) => {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });   
    };
  
    const remove = function deletetUser(clbk, id) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      // const q = "DELETE FROM user WHERE id IN (?)";
      const q = "DELETE FROM user WHERE id = ?";
  
      connection.query(q, id, function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
    };
  
    const update = function editUser(clbk, user) {
      const q = "UPDATE user SET username = ?, email = ?, password = ? WHERE id = ?";
      const payload = [user.username, user.email, user.password, user.id];
      connection.query(q, payload, function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    };
  
    const get = function getUser(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM user;";
      
  
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
  
  module.exports = userModel;
  
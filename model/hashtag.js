/*jshint esversion :  6 */

// @root/model/hashtag.js

const hashtagModel = function hashtagModel(connection) {

    const create = function createtHashtag(clbk, data) {
      const q = "INSERT INTO hashtag (name) VALUES (?)";
      const payload = [data.name];
  
      connection.query(q, payload, (err, res, cols) => {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });   
    };
  
    const remove = function deleteHashtag(clbk, hashtag) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM hashtag WHERE name = ?";
      
      const query = connection.query(q, hashtag, function (err, res, fields) {
        console.log(q);
        console.log(hashtag);
         // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
      console.log(query.sql)
    };
  
    const update = function editHashtag(clbk, hashtag) {
      const q = "UPDATE hashtag SET name = ? WHERE name = ?";
      const payload = [hashtag.newName, hashtag.oldName];
     const query = connection.query(q, payload, function (err, res, fields) {
        console.log(q);
        console.log(hashtag);
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
      console.log(query.sql)
    };
  
    const get = function gethashtag(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM hashtag;";
      
  
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
  
  module.exports = hashtagModel;
  
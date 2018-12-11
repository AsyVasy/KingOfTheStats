/*jshint esversion :  6 */

// @root/model/tshirts.js

const community_has_hashtagModel = function community_has_hashtagModel(connection) {

    const create = function createCommunity_has_hashtag(clbk, data) {
      const q = "INSERT INTO `community_has_hashtag`(`id_community`, `hashtag`) VALUES (?, ?)";
      const payload = [data.id_community, data.hashtag];
  
     const query = connection.query(q, payload, (err, res, cols) => {
        // console.log(q)
        // console.log(payload + " is the paylooood")
        // console.log(this.sql); 
        // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });   
      console.log(query.q);
      
    };
  
    const remove = function deleteCommunity_has_hashtag(clbk, data) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM `community_has_hashtag` WHERE id_community = ? AND hashtag = ?";
      const payload = [data.id_community, data.hashtag]
  
      connection.query(q, payload, function (err, res, fields) {
        console.log(payload);
        // console.log(this.sql);
         // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
    };
  
    const update = function editCommunity_has_hashtag(clbk, data) {
      const q = "UPDATE community_has_hashtag SET id_community = ? AND hashtag = ? WHERE id_community = ? AND hashtag = ?";
      const payload = [data.new_id_community, data.new_hashtag, data.old_id_community, data.old_hashtag];
      connection.query(q, payload, function (err, res, fields) {
        // console.log(this.sql);
        console.log(payload);
         // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    }; 
  
    const get = function getcommunity_has_hashtag(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM `community_has_hashtag`;";
      
  
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
  
  module.exports = community_has_hashtagModel;
  
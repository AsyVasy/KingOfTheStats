/*jshint esversion :  6 */

// @root/model/tshirts.js

const community_has_epicModel = function community_has_epicModel(connection) {

    const create = function createCommunity_has_epic(clbk, data) {
      const q = "INSERT INTO `community_has_epic`(`id_community`, `id_epic`) VALUES (?, ?)";
      const payload = [data.id_community, data.id_epic];
  
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
  
    const remove = function deleteCommunity_has_epic(clbk, data) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM `community_has_epic` WHERE id_community = ? AND id_epic = ?";
      const payload = [data.id_community, data.id_epic]
  
      connection.query(q, payload, function (err, res, fields) {
        console.log(payload);
        // console.log(this.sql);
         // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
    };
  
    const update = function editCommunity_has_epic(clbk, data) {
      const q = "UPDATE community_has_epic SET id_community = ? AND id_epic = ? WHERE id_community = ? AND id_epic = ?";
      const payload = [data.new_id_community, data.new_id_epic, data.old_id_community, data.old_id_pic];
      connection.query(q, payload, function (err, res, fields) {
        // console.log(this.sql);
        console.log(payload);
         // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    }; 
  
    const get = function getcommunity_has_epic(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM `community_has_epic`;";
      
  
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
  
  module.exports = community_has_epicModel;
  
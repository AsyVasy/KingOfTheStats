/*jshint esversion :  6 */

// @root/model/tshirts.js

const community_has_epicModel = function community_has_epicModel(connection) {
    
    const get = function getcommunity_has_epic(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM compte_associe WHERE compte_associe.id_community = community.id;";
      
  
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
  
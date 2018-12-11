/*jshint esversion :  6 */

// @root/model/message.js

const messageModel = function messageModel(connection) {

    const create = function createMessage(clbk, data) {
      const q = "INSERT INTO message (message, id_user, id_community) VALUES (?, ?, ?)";
      const payload = [data.message, data.id_user, data.id_community];
  
      connection.query(q, payload, (err, res, cols) => {
        console.log(q);
        console.log(payload);
        
        // console.log(this.sql); 
        // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });   
    };
  
    const remove = function deleteMessage(clbk, message) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM message WHERE id_message = ?";
  
      connection.query(q, message, function (err, res, fields) {
        console.log(q)
        console.log(message)
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
    };
  
    const update = function editMessage(clbk, message) {
      const q = "UPDATE message SET message = ?, id_user = ?, id_community = ? WHERE id_message = ?";
      const payload = [message.message, message.id_user, message.id_community, message.id_message];
      connection.query(q, payload, function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    };
  
    const get = function getmessage(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM message;";
      
  
      connection.query(sql, [id], (error, results, fields) => {
        // return console.log(this.sql);
        if (error) return clbk(error, null);
        else return clbk(null, [fields.map(x => x.name), results]);
      });
    };
    
    const getDiscuss = function getDiscuss(clbk, id) {
      var sql;
  
        sql = "SELECT * FROM message WHERE id_community = ?;";
      
      id = 1;
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
      get,
      getDiscuss
    };
  };
  
  module.exports = messageModel;
  
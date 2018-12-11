/* jshint esversion : 6 */

// @root/api/index.js

// ROUTAGE DE L'API
const apiDB = (function api() {

    const APIVersion = 1; // notre api est en version 1
    const database = require(__dirname + "/../model")({
      password: "", // définition du mot de passe de mySQL
      database: "bigboss" // base de donnée cible
    });
  
    const routers = []; // on expotera ce tableau une fois rempli de routeurs...
    // IMPORT DES ROUTES DE l'API tshirts
    const userRouter = require("./user")(database.connection); // module api user
    const communityRouter = require("./community")(database.connection); // module api community
    const messageRouter = require("./message")(database.connection); // module api message
    const compte_associeRouter = require("./compte_associe")(database.connection); // module api compte_associe
    const hashtagRouter = require("./hashtag")(database.connection); // module api hashtag
    const user_registered_communityRouter = require("./user_registered_community")(database.connection); // module api user_registered_community
    const user_follow_communityRouter = require("./user_follow_community")(database.connection); // module api user_follow_community
    const community_has_hashtagRouter = require("./community_has_hashtag")(database.connection); // module api community_has_hashtag
    const community_has_epicRouter = require("./community_has_epic")(database.connection); // module api community_has_epic

    // aggrégation des routeurs dans un tableau 
    routers.push(userRouter);
    routers.push(communityRouter);
    routers.push(messageRouter);
    routers.push(compte_associeRouter);
    routers.push(hashtagRouter);
    routers.push(user_registered_communityRouter);
    routers.push(user_follow_communityRouter);
    routers.push(community_has_hashtagRouter);
    routers.push(community_has_epicRouter);




    return { // définition des propriétés publiques du module @root/api/index.js
      version: APIVersion,
      prefix: `/api/v${APIVersion}`,
      routers: routers
    }; // on récupère ces valeurs dans @root/index.js
  
  }());
  
  module.exports = apiDB;
  
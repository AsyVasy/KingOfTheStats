const axios = require("axios");
  const express = require("express");
  const cors = require("cors")

  const app = express();



const apiFortnite = () => {
  


  app.use(express.json({
    extended: false
    }))

  app.use(cors())

  app.post("/fortnite", (req, res) => {
    // console.log(req.body.pseudo)
    axios.get("https://api.fortnitetracker.com/v1/profile/" + req.body.platform + "/" + req.body.pseudo,
    {
      headers: {
        "TRN-Api-Key":"5f51cfcb-1ab8-4181-aeb4-7abcb3d554c1"
      }
    })

    .then(function(response) {
      // console.log(res.data);
      res.send(response.data);
    })

    .catch(function(error) {
      // console.log("err", error);
      res.send("error");
    });

  })

  app.listen(8888);
}


const dataBase = () => {
  // @root/server.js

  const serverDataGetter = require("./utils/serverside-data-getter");
  const http = require("http");
  const baseURL = `http://localhost:8888`;
  const api = require(__dirname + "/api");



  app.use(cors())

  app.use(express.json()); // on  peut recevoir des données POST en json via req.body
  app.use(api.prefix, api.routers); // on préfixe chaque route des API par api/v1/
  app.set("view engine", "ejs"); // CHECK THE DOC http://ejs.co/
  app.set("views", __dirname + "/view"); //  précise le dossier des vues
  // ci-dessous définition de ressources statiques...
  app.use("/ejs", express.static(__dirname + "/node_modules/ejs"));
  app.use("/fa", express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/css"));
  app.use("/webfonts", express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/webfonts"));
  app.use(express.static(__dirname + "/public"));

  // TEMPLATE VARS !!!
  // Accessibles dans tout le template via app.locals (API express)
  app.locals.site = {};
  app.locals.baseURL = baseURL;
  app.locals.activeRoute = null;
  app.locals.site.title = "JS - Simple Express Template";
  app.locals.site.description = "application utilisant node, express JS, ejs et mysql.";
  app.locals.site.nav = [
    {label: "accueil", route: "/"},
    {label: "les t-shirts", route: "/tshirtz"},
  ];

  function getDataUrl(req, url) {
    return req.protocol + "://" + req.headers.host + api.prefix + (url || req.originalUrl);
  }

  // ROUTES DES PAGES DE l"APPLICATION
app.get("/database", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  res.render("index", {nom: "bigboss"});
  // on passe un objet ({nom: "gui"}) à la vue, utilisable dans le template EJS
});

app.post("/database", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  res.render("index", {nom: "bigboss"});
  // on passe un objet ({nom: "gui"}) à la vue, utilisable dans le template EJS
});

app.delete("/database", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  res.render("index", {nom: "bigboss"});
  // on passe un objet ({nom: "gui"}) à la vue, utilisable dans le template EJS
});

app.listen(8889);

}




dataBase();
apiFortnite();
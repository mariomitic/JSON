const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; 
// const router = jsonServer.router("db.json");

const router = jsonServer.router();
const db_accountlist = require("./db_accountlist.json");
router.db._.assign(db_accountlist);

const router2 = jsonServer.router();
const db_recipes = require("./db_recipes.json");
router.db._.assign(db_recipes);

const router3 = jsonServer.router();
const db_daily = require("./db_daily.json");
router.db._.assign(db_daily);

server.use("/data1", router);
server.use("/data2", router2);
server.use("/data3", router3);

server.use(middlewares);
//server.use(router);

server.listen(port);
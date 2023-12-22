const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; 


const router1 = jsonServer.router();
const db_accountlist = require("./db_accountlist.json");
router1.db._.assign({ accountlist: db_accountlist });

const router2 = jsonServer.router();
const db_recipes = require("./db_recipes.json");
router2.db._.assign({ recipes: db_recipes });

const router3 = jsonServer.router();
const db_daily = require("./db_daily.json");
router3.db._.assign({ daily: db_daily });

server.use("/data1", router1);
server.use("/data2", router2);
server.use("/data3", router3);

server.use(middlewares);


server.listen(port);
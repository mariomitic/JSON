const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; 



const db_accountlist = require("./db_accountlist.json");
const router1 = jsonServer.router({ accountlist: db_accountlist });


const db_recipes = require("./db_recipes.json");
const router2 = jsonServer.router({ recipes: db_recipes });


const db_daily = require("./db_daily.json");
const router3 = jsonServer.router({ daily: db_daily });

server.use("/data1", router1);
server.use("/data2", router2);
server.use("/data3", router3);

server.use(middlewares);


server.listen(port);
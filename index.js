let express = require("express");
let mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const createuser = require("./component/routes/user.create");
const login = require("./component/routes/user.login");
const token_auth = require("./component/routes/token.auth");
const dbconnect = require("./component/config/db");
const vf_token = require("./component/routes/page.token.user");
const contact = require("./component/routes/mail.contact");
const all_user_send = require("./component/routes/all.user.send");
const user_update = require("./component/routes/user.update");
const user_delete = require("./component/routes/user.delete");
const servises_route = require("./component/routes/servises.rw");
const user_logout = require("./component/routes/user.logout");
const user_send = require("./component/routes/user.send");

let app = express();

app.use(express.json());
app.use(cors());

// router

app.use(
  "/api",
  createuser,
  login,
  token_auth,
  vf_token,
  contact,
  all_user_send,
  user_update,
  user_delete,
  servises_route,
  user_logout,
  user_send
);

app.get("/", (req, res) => {
  res.send({
    email: "maruf@gmail.com",
    name: "Md Maruf ",
  });
});

app.get("/api/maruf", (req, res) => {
  res.send({
    Name: "Maruf",
    email: "marufmursalin28@gmail.com",
  });
});

// app.post("/api/singup",(req,res)=>{
//     // const {email,password,name,username} = req.body
//     // const user_infol = new user_info({
//     //     name,
//     //     email,
//     //     password,
//     // })
//     // user_infol.save()
//     // const ck = req.body

//     // res.send({
//     //     state:1,
//     //     msg:"all ok",
//     //     deta:ck
//     // })

// })

app.listen(process.env.PORT, () => {
  dbconnect();
  console.log(process.env.EMAIL_USERNAME, process.env.EMAIL_APP_PASSWORD);
  console.log("server is runing in " + process.env.PORT);
});

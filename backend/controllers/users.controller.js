const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/models/users");

module.exports.userLogin = function (req, res) {
User.findOne({
  attributes:['id','first_name', 'access_level', 'password', 'company_id'],
where : {
  email : req.body.email
}
}).then((user)=> {
  if(user == null)
  return res.status(401).json({
    message: "invalid email"});
  bcrypt.compare(req.body.password,user.password)
    .then((result) => {
        console.log(result);
        if (!result) {
            console.log("error password");
            return res.status(401).json({
            message: "Authentication failed",
            });
        }
        const token = jwt.sign(
            {
            id: user.id,
            email: user.email,
            access_level: user.access_level,
            },
            "this_is_secret",
            { expiresIn: "2h" }
        );
        res.status(200).json({
            message: "user valid",
            firstName:user.first_name,
            companyId : user.company_id,
            expiresIn: 7200,
            token: token,
            id: user.id,
            accessLevel: user.access_level,
        });
        console.log(user);
    })
    .catch((err)=>{
      res.status(500).json({
        error: "Authentication Failed"
      });
      });
}).catch((err)=>{
res.status(500).json({
  error: "Server Failed"
});
});
  }

module.exports.userProfile = function (req, res) {
res.sendStatus(200);
};

module.exports.allUsers = function (req, res) {
 User.findAll().then((data)=> {
   console.log(data)
   res.status(200).json({
     users: data
   });
 })
 .catch(err => {
   console.log(err);
   res.status(500).json({
     message: "error occured"
   });
 });
};

          // var updateLoginQuery = "UPDATE users SET last_login = ? WHERE id = ?";
          // db.query(updateLoginQuery, [new Date(), user.id], function (
          //   err,
          //   result,
          //   fields
          // ) {
          //   return;
          // });
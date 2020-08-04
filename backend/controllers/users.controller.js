const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/models/users");
const company = require("../database/models/idialog_companies");

module.exports.userLogin = function (req, res) {
User.findOne({
  attributes:['id','first_name', 'access_level', 'password'],
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
  console.log(err);
res.status(500).json({
  error: "Server Failed"
});
});
  }

module.exports.userProfile = function (req, res) {
User.findOne({
  attributes:['email','first_name','last_name', 'last_login'],
where : {
  id : req.params.id
}
}).then((profile) => {
if(!profile)
return res.status(401).json({
  error: "Not Found"
});
return res.status(200).json({
  profile: profile
});
})
.catch((err)=>{
  console.log(err);
res.status(500).json({
  error: "Server Failed"
});
});
};

module.exports.logout = function (req, res) {
  User.update({
    last_login: req.body.accessTime
  },{
  where: {
    id : req.params.id}
  }).then(() => {
  return res.status(200).json({
    loggedOut: true
  });
  })
  .catch((err)=>{
    console.log(err);
  res.status(500).json({
    loggedOut: false,
    error: "Server Failed"
  });
  });
  };

module.exports.allUsers = function (req, res) {
 User.findAll().then((data)=> {
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
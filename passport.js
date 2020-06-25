var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');

module.exports = function(passport,user){

    var User = user;

    var LocalStrategy = require('passport-local').Strategy;
    var JsonStrategy = require('passport-json').Strategy;
     
    passport.serializeUser(function(user,done){
        done(null,user.id)
    })

    passport.deserializeUser(function(id,done){
       User.findByPk(id).then(function(user){
            if(user){
                done(null,user.get());
            }else{
                done(user.error,null)
            }
        });
    });

    //Local Signin

    passport.use('local-signin',new LocalStrategy(
        {
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true //alows us to pass entire request to the callback
        },

        function(req,email,password,done){

            var User = user;
            var isValidPassword = function(userPass,password){

                return bcrypt.compareSync(password,userPass);

            }

            const Op = Sequelize.Op;
            User.findOne({
               where : {email :email}}).then(function(user){
                 console.log(user,"5444")
                 if(!user){
                     req.flash('loginError',"Invalid Credentials");
                     return done(null,false,{
                         message : 'Email doesnot exist'
                     })
                 }
                 if(!isValidPassword(user.password,password)){
                    
                    req.flash('loginerror',"Invalid Credentials");
                    return done(null,false,{
                        message : "Credentials donot match"
                    })
                 }
                 var userinfo = user.get();
                 return done(null,userinfo);
                
             }).catch(function(err){
                 console.log("Error :",err);
                 return done(null,false,{
                     message : 'Something went wrong with signin'
                 });
             });
           }
    ))

    //local-sign-in-shopper

   passport.use('local-signin-shopper',new LocalStrategy(
       {
           usernameField : 'email',
           passwordField : 'password',
           passReqToCallback : true
       },
       function(req,email,password,done){
           var User = user;
           var isValidPassword= function(userPass,password){
               return bcrypt(password,userPass);
           }

           const Op = Sequelize.Op;
           User.findOne({
               where : {
                   [Op.or] : [{
                       email : email
                   },{
                       mobile : email
                   }],
                   [Op.and] : [{
                       role : 2
                   }]
               }
           }).then(function(user){
               if(!user){
                   req.flash('loginError',"Invalid Credentials")
                   return done(null,false,{
                       message : "Email doesnot exist"
                   })
               }
               if(!isValidPassword(user.password,password)){
                   req.flash('loginError',"Something went wrong")
                   return done(null,false,{
                       message : "Something went wrong with the sign in"
                   })
               }
               var userinfo = user.get();
               return done(null,userinfo);
           }).catch(function(err){
               console.log("Error :",err);
               return done(null,false,{
                   message : "Something went wron with signin"
               });
           });
       }
   ));

}
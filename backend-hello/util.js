import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) =>{
      return jwt.sign({

            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin

      },config.JWT_SECRET,{
            expiresIn:'48h'
      })
}

const isAuth = (req,res,next)=>{
      const token = req.headers.authorization;
      if(token){
            const onlyToken = token.slice(7,token.length);
            jwt.verify(onlyToken,config.JWT_SECRET,(err,decoded)=>{
                  if(err){
                        return res.status(401).send({msg:'Invalid Token'});
                  }
                  req.user = token;
                  next();
                  return

            })
      }
      return res.status(401).send({msg:'Token is not Supplied'})
}

const isAdmin = (req,res,next) =>{
      if(req.user && req.user.isAdmin){
            return next();
      }
      return res.status(401).send({msg:"Admin Token is not VAlid"});
}





export{
      getToken,isAdmin,isAuth
}
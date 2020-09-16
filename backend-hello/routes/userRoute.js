import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth } from '../util';

const router = express.Router();

router.post('/signin', async (req,res)=>{


const signinUser = await User.findOne({
      email:req.body.email,
      password:req.body.password
});
if(signinUser){
      res.status(200).send({
            _id:signinUser.id,
            name:signinUser.name,
            email:signinUser.email,
            isAdmin:signinUser.isAdmin,
            token:getToken(signinUser)
      })
}else{
      res.status(401).send({msg:"Invalid Email or Password"})
}
});


//register router

router.post('/register', async (req,res)=>{

      const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
      });

      const newUser = await user.save();

      
      if(newUser){
            res.status(200).send({
                  _id:newUser.id,
                  name:newUser.name,
                  email:newUser.email,
                  isAdmin:newUser.isAdmin,
                  token:getToken(newUser)
            })
      }else{
            res.status(401).send({msg:"Invalid data"})
      }
      });


//register router


router.get('/createadmin', async (req, res) => {
      try {
        const user = new User({
          name: 'nitesh',
          email: 'dasnitesh780@gmail.com',
          password: '12345',
          isAdmin: true,
        });
        const newUser = await user.save();
      
        res.status(200).send(newUser) 
        
      } catch (error) {
        res.send({ message: error.message });
      }
    });

    export default router;
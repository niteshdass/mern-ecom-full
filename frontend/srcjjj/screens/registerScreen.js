import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { register } from '../actions/userActions';
function RegisterScreen(props){

      const [name,setName]= useState('');
const [email,setEmail]= useState('');
const [rePassword,setRePassword]= useState('');
const [password,setPassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const {loading,userInfo,error} = userRegister;
  const dispatch = useDispatch();
 

    useEffect(() => {
          if(userInfo){
                props.history.push("/")
          }
      return () => {
         
      }
    }, [userInfo]);

   const submitHandler = (e) =>{
         e.preventDefault();
         dispatch(register(name,email,password));
         
   }

  

    return <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
                  <h3>Sign-In</h3>
                  <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                  </li>

                  <li>
                   <label for="email">Name</label>
                   <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/>

               </li> 
               <li>
                   <label for="email">Email</label>
                   <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>

               </li> 
               <li>
                   <label for="password">password</label>
                   <input type="password" id="passsword" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                     
               </li>
               <li>
                   <label for="repassword">Re-password</label>
                   <input type="password" id="rePasssword" name="rePassword" onChange={(e)=>setRePassword(e.target.value)}/>
                     
               </li>
               <li>
                     <button type="submit" className="button primary">Register</button>

               </li> 
               <li>
                     Already Have an Account?
              </li>  
              <li>
                    <Link to="/signin" className="button full-weidth">Sign-in</Link>
              </li>
            </ul>
          </form>

    </div>
}
export default RegisterScreen;
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { signin } from '../actions/userActions';
function SigninScreen(props){
const [email,setEmail]= useState('');
const [password,setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const {loading,userInfo,error} = userSignin;
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
         dispatch(signin(email,password));
         
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
                   <label for="email">Email</label>
                   <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>

               </li> 
               <li>
                   <label for="password">password</label>
                   <input type="password" id="passsword" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                     
               </li>
               <li>
                     <button type="submit" className="button primary">Signin</button>

               </li> 
               <li>
                     New To Our-Site?
              </li>  
              <li>
                    <Link to="/register" className="button full-weidth">Create your New Account</Link>
              </li>
            </ul>
          </form>

    </div>
}
export default SigninScreen;
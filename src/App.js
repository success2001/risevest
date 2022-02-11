
import './App.css';
import {NavLink, Routes, Route, Link } from 'react-router-dom';
import React, {useState}  from "react";

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import {useEffect} from "react";
// import login from './login';
function App() {
  const[errorMessages, setErrorMessages] = useState({});
  const[isSubmitted, setisSubmitted] = useState(false);
  const[passwordShown, setPasswordShown] = useState(false);
  

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
 
  const database = [
    {
      email: "pope@gmail.com",
      password:"Pope2001"
    },
    {
      email: "Success@gmail.com",
      password:"Success2001"
    },
    {
      email: "user@gmail.com",
      password:"User2001"
    },
  ];
 
  const errors = 
    {
      mail: "invalid mail",
      pass:"invalid password"
    };





  const handleSubmit = (event) => {

    event.preventDefault();
      var {mail,pass} = document.forms[0];
      
      const userData = database.find((user) => user.email === mail.value)
      if (userData){
        if (userData.password !==pass.value){
          setErrorMessages({name: "pass", message:errors.pass});
        }else {setisSubmitted(true);
         
        }
      }else{
        setErrorMessages({
          name: "mail", message: errors.mail
        });
      }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>

  );
  

  const renderForm = (
    <div className="Flex">
      
      
    <form onSubmit={handleSubmit}  >
      <div className="sign-in">Sign in</div>
      <div>
     
        <input type="email" 
        name = "mail"
        placeholder="Email address"
       required/>
       {renderErrorMessage("mail")}
     </div> 


     <div className="passwords">
     <Input  style = {{textDecoration:"none",color:"white",fontSize:"small"}}
        type={values.showPassword ? "text" : "password"}

        placeholder="Password"
        name ="pass"
        onChange={handlePasswordChange("password")}
        value={values.password}
        
        endAdornment={
          <InputAdornment position="end">
            <IconButton 
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            </InputAdornment>
        
        }
      />
      {renderErrorMessage("pass")}
     </div>

   
  

<div> <input type="checkbox" value="check" 
      placeholder="rememberMe" />
      <font color="white">Remember Me</font></div>
    
     <div className="Sign in"> 
     
      <input type="submit" value ="SIGN IN"/ >
      </div>
      
      <div><Link to ="/forgotpassword" style = {{textDecoration:"none",color:"white",fontSize:"small"}}>I forgot my password</Link></div>
     
    </form>
     </div>
    
  )
  return (
    
    <div className="App">
    <body> 
     
      <h1 style ={{float:"left"}}><span>money</span>rise</h1>
      
      <Routes>
        <Route path="login" element={<login/>} />
        <Route path="contact" element={<contact/>} />
      </Routes>
      <div style ={{margin:"30px",float:"right"}}>
      <Link to ="/ContactUs" style ={{textDecoration:"none", padding:"25px", color:"white"}}>contact us </Link>
      <Link to ="/About" style ={{textDecoration:"none", color:"white"}}>about</Link>
    </div>
<form></form>
    <div class="footer"> if you find difficulty accessing your account, Get help <Link to ="/help" style = {{color:"white"}}>here</Link>
    </div>
    </body>
   
   
   
<div className="login-form">

<div>
  {isSubmitted ? <div className="logged-in">User is successfully logged in</div>:renderForm}
</div>
</div>

    </div>
  );

 


}


export default App;


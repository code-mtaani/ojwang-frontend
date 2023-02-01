import React from 'react'

const SignUp = () => {
  return (
   <div className="overlay">
<form>
     {/* con = Container  for items in the form */}
   <div className="con">
   {/* <!--     Start  header Content  --> */}
   <header className="head-form">
      <h2>Log In</h2>
      {/* <!--     A welcome message or an explanation of the login form --> */}
      <p>login here using your username and password</p>
   </header>
   {/* End  header Content */}
   <br/>
   <div className="field-set">
     
      {/*user name */}
         <span className="input-item">
           <i className="fa fa-user-circle"></i>
         </span>
        {/* user name Input */}
         <input className="form-input" id="txt-input" type="text" placeholder="@UserName" required />
     
      <br/>
     
           {/*Password */}
     
      <span className="input-item">
        <i className="fa fa-key"></i>
       </span>
      {/*Password Input */}
      <input className="form-input" type="password" placeholder="Password" id="pwd"  name="password" required />
     
{/*  Show/hide password */}
     <span>
        <i className="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
     </span>
     
     
      <br />
{/*  buttons */}
<!--      button LogIn -->
      <button className="log-in"> Log In </button>
   </div>
  
<!--   other buttons -->
   <div className="other">
<!--      Forgot Password button-->
      <button className="btn submits frgt-pass">Forgot Password</button>
<!--     Sign Up button -->
      <button className="btn submits sign-up">Sign Up 
<!--         Sign Up font icon -->
      <i className="fa fa-user-plus" aria-hidden="true"></i>
      </button>
<!--      End Other the Division -->
   </div>
     
<!--   End Conrainer  -->
  </div>
  
  <!-- End Form -->
</form>
</div>
  )
}

export default SignUp
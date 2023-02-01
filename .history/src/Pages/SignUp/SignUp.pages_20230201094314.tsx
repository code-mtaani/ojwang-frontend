import React from 'react'

const SignUp = () => {
  return (
   <div classNAme="overlay">
<!-- LOGN IN FORM by Omar Dsoky -->
<form>
   <!--   con = Container  for items in the form-->
   <div classNAme="con">
   <!--     Start  header Content  -->
   <header classNAme="head-form">
      <h2>Log In</h2>
      <!--     A welcome message or an explanation of the login form -->
      <p>login here using your username and password</p>
   </header>
   <!--     End  header Content  -->
   <br>
   <div classNAme="field-set">
     
      <!--   user name -->
         <span classNAme="input-item">
           <i classNAme="fa fa-user-circle"></i>
         </span>
        <!--   user name Input-->
         <input classNAme="form-input" id="txt-input" type="text" placeholder="@UserName" required>
     
      <br>
     
           <!--   Password -->
     
      <span classNAme="input-item">
        <i classNAme="fa fa-key"></i>
       </span>
      <!--   Password Input-->
      <input classNAme="form-input" type="password" placeholder="Password" id="pwd"  name="password" required>
     
<!--      Show/hide password  -->
     <span>
        <i classNAme="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
     </span>
     
     
      <br>
<!--        buttons -->
<!--      button LogIn -->
      <button classNAme="log-in"> Log In </button>
   </div>
  
<!--   other buttons -->
   <div classNAme="other">
<!--      Forgot Password button-->
      <button classNAme="btn submits frgt-pass">Forgot Password</button>
<!--     Sign Up button -->
      <button classNAme="btn submits sign-up">Sign Up 
<!--         Sign Up font icon -->
      <i classNAme="fa fa-user-plus" aria-hidden="true"></i>
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
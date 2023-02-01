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
          <br />
          <div className="field-set">
            {/*user name */}
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            {/* user name Input */}
            <input
              className="form-input"
              id="txt-input"
              type="text"
              placeholder="@UserName"
              required
            />

            <br />

            {/*Password */}

            <span className="input-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=''="bi bi-key"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </span>
            {/*Password Input */}
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              id="pwd"
              name="password"
              required
            />

            {/*  Show/hide password */}
            <span>
              <i className="fa fa-eye" aria-hidden="true" id="eye"></i>
            </span>

            <br />
            {/*  buttons */}
            {/*button LogIn */}
            <button className="log-in"> Log In </button>
          </div>

          {/* other buttons */}
          <div className="other">
            {/* Forgot Password button */}
            <button className="btn submits frgt-pass">Forgot Password</button>
            {/* Sign Up button */}
            <button className="btn submits sign-up">
              Sign Up
              {/* Sign Up font icon */}
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </button>
            {/* End Other the Division */}
          </div>

          {/* End Conrainer */}
        </div>

        {/* End Form */}
      </form>
    </div>
  );
}

export default SignUp
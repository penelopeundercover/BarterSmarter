import React, { Component } from "react";

const SignUp = () => {
  return (
    <body class="my-login-page">
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-md-center h-100">
            <div class="card-wrapper">
              <div class="brand"></div>
              <img src="./bartersmarter.png" width="190px" height="190px" />
              <div class="card fat">
                <div class="card-body">
                  <h4 class="card-title">Sign Up</h4>
                  <form
                    method="POST"
                    class="my-login-validation"
                    novalidate=""
                  />
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      name="name"
                      required
                      autofocus
                    />
                    <div class="invalid-feedback">What's your name?</div>
                  </div>

                  <div class="form-group">
                    <label for="email">E-Mail Address</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      required
                    />
                    <div class="invalid-feedback">Your email is invalid</div>
                  </div>

                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      data-eye
                    />
                    <div class="invalid-feedback">Password is required</div>
                  </div>

                  <div class="form-group">
                    <div class="invalid-feedback"></div>
                  </div>
                </div>

                <div class="form-group m-0">
                  <button type="submit" class="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
                <div class="mt-4 text-center">
                  Already have an account? <a href="loginpage.html">Login</a>
                </div>
              </div>
            </div>
            <div class="footer"></div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default SignUp;

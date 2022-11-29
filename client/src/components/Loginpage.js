import React from "react";

const Login = () => {
  return (
    <form>
      <body class="my-login-page">
        <section class="h-100">
          <div class="container h-100">
            <div class="row justify-content-md-center h-100">
              <div class="card-wrapper">
                <div class="brand"></div>
                <img src="./bartersmarter.png" width="190px" height="190px" />
                <div class="card fat">
                  <div class="card-body">
                    <h4 class="card-title">Login</h4>
                    <form
                      method="POST"
                      class="my-login-validation"
                      novalidate=""
                    >
                      <div class="form-group">
                        <label for="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          name="email"
                          value=""
                          required
                          autofocus
                        />
                        <div class="invalid-feedback">Email is invalid</div>
                      </div>
                      <div class="form-group">
                        <label for="password">Password </label>
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

                      <div class="form-group m-0">
                        <button type="submit" class="btn btn-primary btn-block">
                          Login
                        </button>
                      </div>
                      <div class="mt-4 text-center">
                        Don't have an account?
                        <a href="signuppage.html">Sign Up</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="footer"></div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </form>
  );
};

export default Login;
// "use strict";

// $(function () {
//   $("input[type='password'][data-eye]").each(function (i) {
//     var $this = $(this),
//       id = "eye-password-" + i,
//       el = $("#" + id);

//     $this.wrap(
//       $("<div/>", {
//         style: "position:relative",
//         id: id,
//       })
//     );

//     $this.css({
//       paddingRight: 60,
//     });
//     $this.after(
//       $("<div/>", {
//         html: "Show",
//         class: "btn btn-primary btn-sm",
//         id: "passeye-toggle-" + i,
//       }).css({
//         position: "absolute",
//         right: 10,
//         top: $this.outerHeight() / 2 - 12,
//         padding: "2px 7px",
//         fontSize: 12,
//         cursor: "pointer",
//       })
//     );

//     $this.after(
//       $("<input/>", {
//         type: "hidden",
//         id: "passeye-" + i,
//       })
//     );

//     var invalid_feedback = $this.parent().parent().find(".invalid-feedback");

//     if (invalid_feedback.length) {
//       $this.after(invalid_feedback.clone());
//     }

//     $this.on("keyup paste", function () {
//       $("#passeye-" + i).val($(this).val());
//     });
//     $("#passeye-toggle-" + i).on("click", function () {
//       if ($this.hasClass("show")) {
//         $this.attr("type", "password");
//         $this.removeClass("show");
//         $(this).removeClass("btn-outline-primary");
//       } else {
//         $this.attr("type", "text");
//         $this.val($("#passeye-" + i).val());
//         $this.addClass("show");
//         $(this).addClass("btn-outline-primary");
//       }
//     });
//   });

//   $(".my-login-validation").submit(function () {
//     var form = $(this);
//     if (form[0].checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     form.addClass("was-validated");
//   });
// });

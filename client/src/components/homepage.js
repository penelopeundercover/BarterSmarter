import React, { Component } from "react";

const Home = () => {
  return (
    <>
      <header>
        <title>Barter Smarter</title>
        <img src="./bartersmarter.png" width="190px" height="190px" />
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark probootstrap-navbar-dark">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#probootstrap-nav"
              aria-controls="probootstrap-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="probootstrap-nav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a href="homepage.html" class="nav-link pl-0">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                    My Items
                  </a>
                </li>
                <li class="nav-item">
                  <a href="./loginpage.html" class="nav-link">
                    Login
                  </a>
                </li>
              </ul>
              <div class="ml-auto">
                <form
                  action="#"
                  method="get"
                  class="probootstrap-search-form mb-sm-0 mb-3"
                >
                  <div class="form-group">
                    <button class="icon submit">
                      <span class="icon-magnifying-glass"></span>
                    </button>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Find Item"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#probootstrap-nav"
            aria-controls="probootstrap-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="probootstrap-nav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a href="index.html" class="nav-link pl-0">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="departments.html" class="nav-link">
                  Trade
                </a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div class="ml-auto">
              <form
                action="#"
                method="get"
                class="probootstrap-search-form mb-sm-0 mb-3"
              >
                <div class="form-group">
                  <button class="icon submit">
                    <span class="icon-magnifying-glass"></span>
                  </button>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- END nav --> */}
        <div class="main-container">
          <div class="left-container"></div>
          <div class="right-container"></div>
        </div>
      </body>
    </>
  );
};

export default Home;

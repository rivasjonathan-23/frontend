<template>
  <div id="cont">
    <form class="col-sm-3" v-on:submit="login">
      <h1 class="sign">Sign Up</h1>
      <label>
        <p class="label-txt">USERNAME</p>
        <input type="text" class="input" v-model="username">
        <div class="line-box">
          <div class="line"></div>
        </div>
      </label>
      <label>
        <p class="label-txt">PASSWORD</p>
        <input type="password" class="input" v-model="password">
        <div class="line-box">
          <div class="line"></div>
        </div>
      </label>
      <label>
        <p class="label-txt">CONFIRM PASSWORD</p>
        <input type="password" class="input" v-model="confirmpassword">
        <div class="line-box">
          <div class="line"></div>
        </div>
      </label>

      <!-- <router-link to="/personalinfo"> -->
      <button type="submit">submit</button>
      <!-- </router-link> -->
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";


export default {
  name: "SignUp",
  data: function() {
    return {
      username: "",
      password: "",
      confirmpassword: ""
    };
  },
  methods: {
    login: e => {
      e.preventDefault();
      let newUser = { username: "rivas", passwords: "password" };
      // console.log(newUser)
      axios.post("http://localhost:5000/login", newUser)
    }
  },
  mounted() {
    $(".input").focus(function() {
      $(this)
        .parent()
        .find(".label-txt")
        .addClass("label-active");
    });

    $(".input").focusout(function() {
      if ($(this).val() == "") {
        $(this)
          .parent()
          .find(".label-txt")
          .removeClass("label-active");
      }
    });
  }
};
</script>

<style scoped>
.col-sm-3 {
  border: 1px solid lightgrey;
  width: 400px;
  margin-top: 90px;
  margin-bottom: 40px;
  margin-right: 10%;
  margin-left: 10%;
  background: white;
  padding: 4%;
  text-align: center;
  float: right;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.posts {
  height: 1000px;
  background-color: white;
}

.container {
  background-image: linear-gradient(to bottom right, white, #d9dcde);
  margin: 0;
  padding-top: 0;
  width: 100%;
}

label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: 0.8em;
  letter-spacing: 1px;
  color: rgb(120, 120, 120);
  transition: ease 0.3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  text-align: left;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #bcbcbc;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #5d5f61;
  transition: ease 0.6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220, 220, 220);
  font-weight: bold;
  color: rgb(120, 120, 120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease 0.3s;
}

button:hover {
  background: #5d5f61;
  color: #ffffff;
}

.sign {
  padding: 0px;
  margin-top: 0;
  margin-bottom: 60px;
}
</style>


<template>
  <div class="container">
    <center>
      <div class="innercont">
        <form class="col-sm-4">
          <h1 class="sign">Sign Up</h1>
          <label>
            <p class="label-txt">USERNAME</p>
            <input type="text" class="input">
            <div class="line-box">
              <div class="line"></div>
            </div>
          </label>
          <label>
            <p class="label-txt">PASSWORD</p>
            <input type="text" class="input">
            <div class="line-box">
              <div class="line"></div>
            </div>
          </label>
          <label>
            <p class="label-txt">CONFIRM PASSWORD</p>
            <input type="text" class="input">
            <div class="line-box">
              <div class="line"></div>
            </div>
          </label>
        </form>
        <PersonalInfo></PersonalInfo>
      </div>
    </center>
  </div>
</template>

<script>
import PersonalInfo from "./personalInfo";
import $ from "jquery";

export default {
  name: "FullSignUp",
  components: {
    PersonalInfo
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
.col-sm-4 {
  background: #e3e3e3;
  padding: 4%;
  text-align: center;
  border-right: none;
  height: 700px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.pholder {
  padding: 0;
}

PersonalInfo {
  border:0;
}

.fname {
  width: 100%;
  padding-right: 10px;
  margin: 0;
}
#fn {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

#ln {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.lname {
  padding-left: 10px;
  width: 100%;
  margin: 0;
}
table {
  width: 100%;
  margin-top: 0;
  padding-top: 0;
  margin: 0;
  padding: 0;
  overflow: visible;
}

.container {
  /* background-image: linear-gradient(to bottom right, white, #d9dcde); */
  padding-top: 10%;
  /* padding-left: 15%;
  padding-right: 15%; */
  width: 100%;
}

.innercont {
  padding: 0;
  border-radius: 5px;
  border: 1px solid lightgrey;
  overflow: hidden;
  width: 800px;
  /* height: 100%; */
  /* margin:10%; */
  /* background-color: black; */
}

.body {
  padding: 0;
  margin: 0;
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







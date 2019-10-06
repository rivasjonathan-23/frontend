<template>
  <div class="pholder">
    <center>
      <div class="pinnerholder">
        <form id="perinfo" class="col-sm-8">
          <h4 class="sign">Personal Information</h4>
          <table>
            <td>
              <div class="fname">
                <label id="fn">
                  <p class="label-txt">FIRST NAME</p>
                  <input type="text" class="input">
                  <div class="line-box">
                    <div class="line"></div>
                  </div>
                </label>
              </div>
            </td>
            <td>
              <div class="lname">
                <label id="ln">
                  <p class="label-txt">LAST NAME</p>
                  <input type="text" class="input">
                  <div class="line-box">
                    <div class="line"></div>
                  </div>
                </label>
              </div>
            </td>
          </table>
          <label>
            <p class="label-txt">EMAIL ADDRESS</p>
            <input type="text" class="input">
            <div class="line-box">
              <div class="line"></div>
            </div>
          </label>
          <label>
            <p class="label-txt">ADDRESS</p>
            <input type="text" class="input">
            <div class="line-box">
              <div class="line"></div>
            </div>
          </label>
          <label>
            <p class="label-txt">OCCUPATION</p>
            <input type="text" class="input">
            <div class="line-box">
              <div class="line"></div>
            </div>
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </center>
  </div>
</template>

<script>
import JQuery from "jquery";

export default {
  name: "PersonalInfo",
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
#perinfo {
  float:right;
  padding: 5%;
  margin: 0;
  border-radius: 2px;
  height: 700px;
  border: 1px solid lightgrey;
}

.pinnerholder {
  margin:0;
  padding:0;
}

.pholder {
  padding: 10%;
  width: 100%;
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







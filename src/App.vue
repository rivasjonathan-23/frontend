<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
           <router-link to="/">
          <h3 class="web-name" href="#">BadgeBook</h3>
           </router-link>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link class="btn btn-default" to="/signup">
              <span class="glyphicon glyphicon-user"></span> Sign Up
            </router-link>
          </li>
          <li>
            <router-link class="btn btn-default" to="/login">
              <span class="glyphicon glyphicon-log-in"></span> Login
            </router-link>
          </li>
        </ul>

        <form class="navbar-form navbar-right" action>
          <div class="form-group has-search">
            <span class="material-icons">search</span>
            <input type="text" class="form-control" placeholder="Search">
          </div>
        </form>
      </div>
    </nav>
    <center>
      <router-view/>
    </center>
    
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>

<style scoped>
.navbar {
  z-index: 9999;
  position: fixed;
  width: 100%;
  margin-top: 0px;
  border-radius: 0;
  padding-right: 2%;
  padding-left: 2%;
  margin-bottom: 0;
  padding-top: 3px;
  padding-bottom: 3px;
}

.btn {
  padding: 5px;
  background-color: transparent;
  border: 1px solid #e0e0e0;
  margin: 10px;
}

body{
  zoom:10%
}

.web-name {
  padding: 10px;
  color: white;
  padding: 5px;
  letter-spacing: 2px;
  margin: 5px;
}

.material-icons {
  color: grey;
  top: 5px;
  left: 4px;
  position: absolute;
  margin-bottom: 0;
}


button {
  margin-left: 5px;
}

.form-control {
  margin: 0;
  border: none;
  padding-left: 30px;
}

.navbar-form {
  background-color: white;
  border-radius: 3px;
  padding: 0;
  position: relative;
  margin-right: 7px;
}
.signin {
  background-image: linear-gradient(to bottom right, white, #d9dcde);
  margin: 0;
  padding-top: 0;
  width: 100%;
}
</style>

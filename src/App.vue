<template>
<div class="container-fluid">
 <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pacifico</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link  to="/" class="nav-link active" aria-current="page" href="#">Login</router-link>
        </li>
       <li class="nav-item">
          <router-link to="/dash" class="nav-link" href="#">Dash</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-view/>

</div>
</template>

<!-- <script>
import LoginView from './components/auth/LoginView.vue'

export default {
  name: 'App',
  components: {
    LoginView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

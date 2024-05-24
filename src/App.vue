<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/" > <fa icon="home" /> Home</router-link>
      <router-link to="/auth"><fa icon="sign-in" /> Access</router-link> 
      <router-link to="/firebase"><fa icon="fire" /> Firebase</router-link>  
  
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  padding: 20px;
  border-bottom: 1px solid #cccccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 80%;
  max-width: 1200px;
  text-align: center; /* Para centrar los elementos horizontalmente */
}

.navigation a {
  text-decoration: double;
  color: #333333;
  margin: 0 30px; /* Espacio horizontal entre elementos */
  font-weight: bold;
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: blue
}

</style>;
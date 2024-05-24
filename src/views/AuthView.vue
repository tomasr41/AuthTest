<template>
    <div id="app">
        <div class="form-container">
          <h2 class="form-title">Login</h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary btn-block" @click.prevent="authUser">Submit</button>
        </div>
      </div>
</template>


<script lang="ts" setup> 
import { ref } from "vue";
import AuthService from '../services/AuthService'

let email = ref('')
let password = ref('')

const authUser = async () => { 
  const auth = new AuthService()
  const success = await auth.login(email.value,password.value)
  if (success){
    alert('TODO BIEN')
  }
  else{
    alert('TODO MAL')
  }
}



</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

/* Contenedor del formulario */
.form-container {
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box; /* Para asegurarse de que el relleno no cause desbordamiento */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Título del formulario */
.form-title {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
}

/* Labels y inputs */
.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-size: 16px;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

/* Botón de submit */
.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

/* Ajustes adicionales */
.mb-3 {
  margin-bottom: 20px;
}

</style> 
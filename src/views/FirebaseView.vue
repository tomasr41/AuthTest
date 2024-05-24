<template>
    <div id="app">
        <div class="form-container">
          <h1 class="form-title">Login</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
          </div>
          
          
          <button type="submit" class="btn btn-primary btn-block mb-4" @click.prevent="authUser">Submit</button>
          <button type="button" id="google" class="btn btn-primary btn-block mb-4" @click="loginGoogle"> <fa :icon="['fab', 'google']" /> Login with Google</button>
        </div>
      </div>
      
     
</template>


<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

let email = ref('')
let password= ref('')

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

const loginGoogle = () => {
    signInWithPopup(auth,googleProvider).then( (result) => {alert('exito!')}).catch((error) => {alert('fracaso')})
}

const authUser = () => {
    signInWithEmailAndPassword(auth, email.value, password.value).then ( () => {
        alert('Exito!')

    })
    .catch((error) => {
        alert ('Error: ' + error.message)
    })
}


</script>

<style>

</style>
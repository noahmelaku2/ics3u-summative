<script setup>
import { useRegistrationStore } from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const repassword = ref('');
const store = useRegistrationStore();
const router = useRouter();

async function registerByEmail() {
  if (password.value === repassword.value) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;

      store.firstName = firstName.value;
      store.lastName = lastName.value;
      store.email = email.value;
      store.password = password.value;

      await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });

      store.user = user;

      router.push("/movies");
    } catch (error) {
      alert("There was an error creating a user with email!");
    }
  } else {
    window.alert("The passwords are not the same!");
  }
}

async function registerByGoogle() {
  try {
    await auth.signOut();

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account" 
    });

    const result = await signInWithPopup(auth, provider);

    store.user = result.user;

    router.push("/movies");
  } catch (error) {
    console.error("Error during Google sign-in:", error.code, error.message);
    alert("There was an error creating a user with Google!");
  }
}

function goToHome() {
  router.push('/');
}
</script>

<template>
  <Header />
  <div class="form-container">
    <h2>Create an Account</h2>
    <button class="button back" @click="goToHome">Back to Home</button>
    <form @submit.prevent="registerByEmail">
        <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required>
          <input v-model="lastName" type="text" placeholder="Last name" class="input-field" required>
          <input v-model="email" type="email" placeholder="Email" class="input-field" required>
          <input v-model="password" type="password" placeholder="Password" class="input-field" required>
          <input v-model="repassword" type="password" placeholder="Re-enter Password" class="input-field" required>
        <button type="submit" class="register">Register</button>
      </form> 
    </div>
    <div class="additional-actions">
    <button @click="handleSubmit" class="button submit">Submit Registration</button>
  </div>
    <button @click="registerByGoogle" class="button register">Register by Google</button>
    <Footer />
</template>

<style scoped>
.hero {
  background-image: url('your-image-url-here.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #000;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.7);
}

.overlay {
  background: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f4f4f4;
  padding: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
}

.navbar h1 {
  font-size: 2.4rem;
  font-family: 'Arial', sans-serif;
  color: #092ae5;
  font-weight: 700;
  text-shadow: 0 3px 6px rgba(9, 42, 229, 0.6);
}

.navbar .login {
  background: linear-gradient(90deg, #092ae5, #0057ff);
  color: #fff;
  padding: 12px 28px;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
}

.navbar .login:hover {
  background: linear-gradient(90deg, #0057ff, #092ae5);
  transform: translateY(-2px);
}

.form-container {
  text-align: center;
  margin-top: 60px;
  color: #000;
}

.form-container h2 {
  font-size: 2.4rem;
  color: #000000;
  margin-bottom: 30px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.input-field {
  padding: 15px;
  width: 340px;
  border-radius: 8px;
  border: 2px solid #444;
  background-color: #1a1a1a;
  color: #f4f4f4;
  margin-bottom: 20px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-field:focus {
  border-color: #092ae5;
  box-shadow: 0 0 10px rgba(9, 42, 229, 0.6);
  outline: none;
}

.register {
  background: linear-gradient(90deg, #092ae5, #0057ff);
  color: #fff;
  padding: 12px 32px;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
}

.register:hover {
  background: linear-gradient(90deg, #0057ff, #092ae5);
  transform: translateY(-2px) scale(1.05);
}

@media (max-width: 600px) {
  .input-field {
    width: 90%;
  }

  .navbar h1 {
    font-size: 2rem;
  }

  .form-container h2 {
    font-size: 2rem;
  }
}
</style>
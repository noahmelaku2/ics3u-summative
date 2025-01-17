<script setup>
import Header from '../components/Header.vue';
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const password = ref('');

const handleLogin = () => {
  if (password.value === "movielover") {
    router.push("/movies");
  } else {
    alert("Invalid Password");
  }
};
</script>

<template>
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
        <h1>NotFlix</h1>
        <RouterLink to="/register" class="button register">Register</RouterLink>
      </div>
      <div class="form-container">
        <h2>Login to Your Account</h2>
        <form @submit.prevent="handleLogin">
          <input type="email" placeholder="Email" class="input-field" required />
          <input v-model="password" type="password" placeholder="Password" class="input-field" required />
          <button type="submit" class="button login">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-color: #000;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f4f4f4;
  padding: 30px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
}

.navbar h1 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #092ae5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}

.navbar .register {
  background: linear-gradient(90deg, #092ae5, #0057ff);
  color: #fff;
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.3s, transform 0.3s;
}

.navbar .register:hover {
  background: linear-gradient(90deg, #0057ff, #092ae5);
  transform: translateY(-2px);
}

.form-container {
  text-align: center;
  margin-top: 60px;
}

.form-container h2 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #f4f4f4;
}

.input-field {
  padding: 14px;
  width: 320px;
  border-radius: 6px;
  border: 2px solid #444;
  background-color: #1a1a1a;
  color: #fff;
  margin-bottom: 20px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-field:focus {
  border-color: #092ae5;
  box-shadow: 0 0 8px rgba(9, 42, 229, 0.5);
  outline: none;
}

.login {
  background: linear-gradient(90deg, #092ae5, #0057ff);
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.login:hover {
  background: linear-gradient(90deg, #0057ff, #092ae5);
  transform: translateY(-2px) scale(1.05);
}

@media (max-width: 600px) {
  .input-field {
    width: 100%;
    max-width: 300px;
  }

  .navbar h1 {
    font-size: 1.8rem;
  }

  .navbar .register {
    padding: 8px 20px;
  }
}
</style>
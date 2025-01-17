<script setup>
import { useRegistrationStore } from '../store';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const store = useRegistrationStore();
const router = useRouter();

const validateForm = (event) => {
  if (store.password !== store.rePassword) {
    event.preventDefault(); 
    alert('The passwords do not match. Please check and try again.');
  } else {
    store.setRegistrationData({
      firstName: store.firstName,
      lastName: store.lastName,
      email: store.email,
      password: store.password,
    });

    router.push('/movies')
  }
};
</script>

<template>
  <Header />
  <div class="form-container">
    <h2>Create an Account</h2>
      <form @submit="validateForm">
        <input type="text" placeholder="First Name" class="input-field" v-model="store.firstName" required />
        <input type="text" placeholder="Last Name" class="input-field" v-model="store.lastName" required />
        <input type="email" placeholder="Email" class="input-field" v-model="store.email" required />
        <input type="password" placeholder="Password" class="input-field" v-model="store.password" required />
        <input type="password" placeholder="Re-Enter Password" class="input-field" v-model="store.rePassword" required />
        <button type="submit" class="register">Register</button>
      </form>
    </div>
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
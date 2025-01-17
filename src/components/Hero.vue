<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRegistrationStore } from '../store';

const isHomePage = ref(false);
const route = useRoute();
const registrationStore = useRegistrationStore();

onMounted(() => {
  if (route.path === '/') {
    isHomePage.value = true;
  }
});
</script>

<template>
  <div class="header">
    <h1>NotFlix</h1>
  </div>
  <div class="buttons">
    <li v-if="$route.path === '/'">
      <RouterLink to="/register" class="button">Register</RouterLink>
      <RouterLink to="/login" class="button">Login</RouterLink>
    </li>
    <li v-if="$route.path === '/movies'">
      <h1 class="email">{{ `Hello ${registrationStore.firstName}!` }}</h1>
      <RouterLink to="/settings" class="button settings">Setting</RouterLink>
      <RouterLink to="/" class="button settings">Logout</RouterLink>
      <RouterLink to="/cart" class="button cart">Cart</RouterLink>
      <RouterLink to="/movies" class="button settings">Movies</RouterLink>
    </li>
  </div>
</template>

<style scoped>
.header {
  background-color: black;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  text-align: center; /* Center the title */
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* Reduced margin to move buttons closer to the header */
  padding: 10px;
  background-color: black;
  position: fixed; /* Fix buttons near the header */
  top: 70px; /* Position just below the header */
  width: 100%;
  z-index: 999;
}

.button {
  margin: 5px 15px;
  padding: 10px 20px;
  background-color: #092ae5;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #021f91;
}

h1 {
  color: white;
  font-family: 'Arial', sans-serif;
  font-size: 3rem;
  font-style: italic;
  margin: 0;
}
</style>

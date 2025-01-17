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
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 20px;
  margin-top: 80px;
}

.button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #092ae5;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #092ae5;
}

h1 {
  color: white;
  background-color: black;
  font-family: 'Arial', sans-serif;
  font-size: 3rem;
  font-style: italic;
  text-align: center;
  margin: 0;
}
</style>
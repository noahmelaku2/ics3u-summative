<script setup>
</script>

<template>
    <div class="not-found-container">
      <h1>This page does not exist</h1>
      <p>We're sorry, but the page you are looking for cannot be found.</p>
      <router-link to="/" class="home-button">Return Home</router-link>
    </div>
  </template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background */
  color: #343a40; /* Dark gray text */
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

.not-found-container h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #e63946; /* Red color for emphasis */
}

.not-found-container p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #6c757d; /* Muted gray text */
}

.home-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff; /* Blue button */
  color: white;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
}

.home-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: translateY(-3px); /* Lift effect */
}

.home-button:active {
  background-color: #003f7f; /* Even darker blue on click */
  transform: translateY(0); /* Reset lift on click */
}
</style>

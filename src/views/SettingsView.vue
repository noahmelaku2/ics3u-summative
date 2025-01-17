<script setup>
import { useRegistrationStore } from '../store';
import { computed } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const userStore = useRegistrationStore();

const firstName = computed({
  get: () => userStore.firstName,
  set: (value) => {
    userStore.firstName = value;
  },
});
const lastName = computed({
  get: () => userStore.lastName,
  set: (value) => {
    userStore.lastName = value;
  },
});
const email = computed({
  get: () => userStore.email,
  set: (value) => {
    userStore.email = value;
  },
});

const updateProfileHandler = (event) => {
  event.preventDefault();
  userStore.setRegistrationData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  });

  alert('Profile updated successfully!');
}
</script>

<template>
  <div class="Notflix-theme">
    <div class="settings-view">
      <h1>User Settings</h1>
      <form @submit.prevent="updateProfileHandler">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" class="input-field" v-model="firstName" /><br /><br />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" class="input-field" v-model="lastName" /><br /><br />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="input-field" v-model="email" readonly/><br /><br />
        </div>
        <button type="submit" class="button">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.Notflix-theme {
  background-color: #1e1e1e; /* Dark background for a cinematic feel */
  color: #fff; /* White text for contrast */
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.settings-view {
  background-color: #2c2c2c; /* Slightly lighter background for the form container */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  padding: 20px 30px;
  width: 100%;
  max-width: 400px;
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #1e1e1e;
  color: #fff;
  font-size: 16px;
}

.input-field:focus {
  outline: none;
  border-color: #ff4500; /* Highlight color for focus */
  box-shadow: 0 0 5px rgba(255, 69, 0, 0.7);
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button.save {
  background-color: #ff4500;
  color: #fff;
}

.button.save:hover {
  background-color: #e63e00;
}

.button.back {
  background-color: #555;
  color: #fff;
}

.button.back:hover {
  background-color: #444;
}

@media (max-width: 768px) {
  .settings-view {
    padding: 15px;
  }

  h1 {
    font-size: 20px;
  }

  button {
    font-size: 14px;
  }
}
</style>

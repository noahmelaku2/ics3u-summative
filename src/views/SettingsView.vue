<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useRouter } from "vue-router";
import { useStore } from '../store';
import { updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { ref } from 'vue';

const store = useStore();
const router = useRouter();
const name = ref(store.user?.displayName?.split(" ")[0] || '');
const lastName = ref(store.user?.displayName?.split(" ")[1] || '');
const email = ref(store.user?.email || '');
const password = ref('');

const changeName = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      const currentName = user.displayName;
      const newName = `${name.value} ${lastName.value}`;
      if (currentName === newName) {
        alert("The new name is the same as the current name. No changes made.");
        return;
      }

      await updateProfile(user, { displayName: newName });
      store.user = { ...user, displayName: newName };
      alert("Name updated successfully!");
    }
  } catch (error) {
    console.error("Error occurred during name change:", error);
    alert("There was an error updating the name. Please try again.");
  }
};

const changePassword = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      const newPassword = password.value;
      if (!newPassword || newPassword === user.password) {
        alert("The new password is the same as the current password or is empty. No changes made.");
        return;
      }

      await updatePassword(user, newPassword);
      alert("Password updated successfully!");
      password.value = '';
    }
  } catch (error) {
    console.error("Error occurred during password change:", error);
    alert("There was an error updating the password. Please try again.");
  }
};

function goBackToMovies() {
  router.push("/movies");
}
</script>

<template>
  <Header />
  <div class="form-container">
    <button class="button back" @click="goBackToMovies">Back to Movie List</button>
    <h1>User Profile</h1>
    <form @submit.prevent="changeName" class="form">
      <div class="input-container">
        <p>{{ `First Name: ${name}` }}</p>
        <input v-model="name" type="text" id="name" class="input-field" />
        <button type="submit" class="changeName">Change</button>
      </div>
    </form>
    <form @submit.prevent="changeName" class="form">
      <div class="input-container">
        <p>{{ `Last Name: ${lastName}` }}</p>
        <input v-model="lastName" type="text" id="lastName" class="input-field" />
        <button type="submit" class="changeName">Change</button>
      </div>
    </form>
    <div class="email">
      <div class="input-container">
        <p>{{ `Email:` }}</p>
        <input v-model="email" type="email" id="email" class="input-field" readonly />
      </div>
    </div>
    <form @submit.prevent="changePassword" class="form">
      <div class="input-container">
        <p>New Password</p>
        <input v-model="password" type="password" id="password" class="input-field" required />
        <button type="submit" class="changeName">Change Password</button>
      </div>
    </form>
  </div>
  <Footer />
</template>

<style scoped>
.Notflix-theme {
  background-color: #092ae5; /* Dark background for a cinematic feel */
  color: #fff; /* White text for contrast */
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.settings-view {
  background-color: #092ae5; /* Slightly lighter background for the form container */
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
  border: 1px solid #092ae5;
  border-radius: 5px;
  background-color: #092ae5;
  color: #fff;
  font-size: 16px;
}

.input-field:focus {
  outline: none;
  border-color: #092ae5; /* Highlight color for focus */
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
  background-color: #092ae5;
  color: #fff;
}

.button.save:hover {
  background-color: #092ae5;
}

.button.back {
  background-color: #092ae5;
  color: #fff;
}

.button.back:hover {
  background-color: #092ae5;
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

<script setup>
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

const store = useStore();
const router = useRouter();
const thank = ref(false);
const cartEmpty = ref(false);

function goBackToMovies() {
  router.push("/movies");
}

const handleCheckout = () => {

if (store.cart.size === 0) {
  cartEmpty.value = true;
} else {
  thank.value = true;
  store.clearCart();
}
};
</script>

<template>
  <Header />
    <div class="cart-container" v-if="!thank">
    <h2>Shopping Cart</h2>
    <button class="button back" @click="goBackToMovies">Back to Movie List</button>
    <button @click="handleCheckout">Checkout</button>
    <div class="cart-item" v-for="([key, value]) in store.cart" :key="key">
      <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" />
      <div class="item-details">
        <h3>{{ value.title }}</h3>
        <button @click="store.removeFromCart(key)">Remove</button>
      </div>
    </div>

    <div v-if="cartEmpty" class="cart-empty-message">
      <p>Your cart is empty. Please add some items before proceeding!</p>
    </div>
  </div>

  <div v-else class="thank-you-message">
    <p>Enjoy your purchase!</p>
  </div>

  <Footer />
</template>

<style scoped>
h1 {
    color: #092ae5;
    text-align: center;
}

button {
    display: inline-block;
    margin-bottom: 20px;
    padding: 10px 15px;
    background-color: #092ae5;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.cart {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100vw;
}

.item {
    display: flex;
    align-items: center;
    gap: 2rem;
}

img {
    width: 10%;
    border-radius: 5%;
}
</style>

<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from '../store';

const props = defineProps(["genres"]);
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);
const store = useStore();

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${selectedGenre.value}`);
})
</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre()">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card" @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
        <button
          v-if="!store.cart.has(movie.id)"
          @click.stop="store.addToCart(movie.id, { title: movie.title, url: movie.poster_path })"
          class="buy"
        >
          Buy
        </button>
        <button v-else class="buy">Added</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-gallery {
  padding: 20px;
  color: white;
  background-color: #141414;
}

.movie-gallery h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movie-card {
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
  width: 200px;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 100%;
  height: auto;
}

.movie-title {
  padding: 10px;
  text-align: center;
  font-size: 1.1rem;
  color: #ffffff;
}

select {
  background-color: #333;
  color: white;
  padding: 10px;
  border: 2px solid #444;
  border-radius: 5px;
  font-size: 1rem;
  width: 200px;
  margin: 10px 0;
}

select:focus {
  border-color: #092ae5;
  outline: none;
}

.buy {
  display: inline-block;
  margin: 10px auto;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.buy:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.buy:active {
  background-color: #003f8a;
}

.buy[disabled],
.buy[disabled]:hover {
  background-color: #444;
  cursor: not-allowed;
  transform: none;
}
</style>
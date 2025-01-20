import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import MoviesView from '../views/MoviesView.vue';
import DetailsView from '../views/DetailsView.vue';
import CartView from '../views/CartView.vue';
import SettingsView from '../views/SettingsView.vue';
import ErrorsView from '../views/ErrorsView.vue';
import { useStore } from '../store';


const routes = [
 { path: '/', component: HomeView },
 { path: '/login', component: LoginView },
 { path: '/register', component: RegisterView },
 { path: '/movies', component: MoviesView },
 { path: '/movies/:id', component: DetailsView },
 { path: '/cart', component: CartView },
 { path: '/settings', component: SettingsView },
 { path: '/:pathMatch(.*)*', meta: { auth: false }, component: ErrorsView, },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  router.beforeEach((to, from, next) => {
    const store = useStore();
  
    store.userAuthorized.then(() => {
      if (!store.user && to.meta.auth) {
        next("/login");
      } else {
        next();
      }
    });
  });
  export default router;
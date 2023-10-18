import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import CategoryPage from './components/CategoryPage.vue'
import RecipePage from './components/RecipePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/category/:categoryId', component: CategoryPage },
        { path: '/recipe/recipe:Id', component: RecipePage }
    ]
})

createApp(App).use(router).mount('#app')

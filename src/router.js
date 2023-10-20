import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import CategoryPage from './views/CategoryPage.vue'
import RecipePage from './views/RecipePage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/category/:categoryId',
        name: 'category',
        component: CategoryPage
    },
    {
        path: '/recipe/:id/',
        name: 'recipe',
        component: RecipePage
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
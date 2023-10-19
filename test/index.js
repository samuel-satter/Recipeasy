import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/category/:categoryId',
            name: 'category',
            component: () => import('../views/CategoryPage.vue')
        },
        {
            path: '/recipe/:recipeId/',
            name: 'recipe',
            component: () => import('../views/RecipePage.vue')
        }
    ]
})
export default router
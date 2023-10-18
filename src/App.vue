<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.text">
          <router-link :to="route.to" :class="{ active: isActive(route.to) }">
            {{ route.text }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const routes = [
      { to: "/", text: "Startsida" },
      { to: "/category/:categoryId", text: "Kategorisida" },
      { to: "/recipe/:recipeId", text: "Receptsida" }
    ];
    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = path => path === activeRoute.value;
    return { isActive, routes };
  }
};
</script>

<style scoped>
.active {
  font-weight: bold;
}
</style>

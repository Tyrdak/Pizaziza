<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { cartItems } from "../../props/Pizza.vue";

// On calcule le nombre total d'items juste pour le petit badge
const cartCount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});
</script>

<template>
  <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <!-- Logo simple -->
        <RouterLink to="/" class="text-2xl font-bold text-gray-800 tracking-tight hover:text-red-600 transition-colors">
          Pizaziza
        </RouterLink>

        <!-- Navigation Links -->
        <div class="hidden md:flex gap-6">
          <RouterLink to="/" class="text-gray-600 hover:text-gray-900 font-medium">
            La Carte
          </RouterLink>
          <RouterLink to="/parole" class="text-gray-600 hover:text-gray-900 font-medium">
            L'Histoire
          </RouterLink>
        </div>
      </div>

      <!-- Lien Panier -->
      <RouterLink to="/panier" class="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium group">
        <span class="group-hover:text-gray-900">Panier</span>
        <span v-if="cartCount > 0" class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {{ cartCount }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>

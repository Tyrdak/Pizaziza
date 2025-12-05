<script setup>
import ListPizza from "../components/sections/ListPizza.vue";
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">La Carte</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Toutes nos pizzas sont préparées avec amour, une pâte faite maison et des ingrédients frais. Bon appétit !
      </p>
    </header>

    <ListPizza />
  </div>
</template>

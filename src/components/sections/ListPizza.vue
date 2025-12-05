<script setup>
import Cards from '../layout/cards.vue';
import { pizzas, incrementPizza } from "../../stores/pizza.js";
</script>

<template>
  <!-- Grille responsive : 1 colonne mobile, 2 tablettes, 3 desktop -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Cards
      v-for="pizza in pizzas"
      :key="pizza.id"
      :name="pizza.name"
      :description="pizza.description"
      :price="pizza.price"
      :action="() => incrementPizza(pizza.id)"
    />
  </div>
</template>

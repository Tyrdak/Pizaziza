<script setup>
import { defineProps, computed } from "vue";

// On récupère les infos de la pizza
const props = defineProps({
  name: String,
  description: String,
  price: Number,
  action: Function // La fonction pour ajouter au panier
});

// Une couleur aléatoire (basée sur le nom) pour le cercle visuel
// Ça permet d'avoir une couleur stable pour chaque pizza sans stocker d'image
const colorClass = computed(() => {
  const colors = [
    'bg-red-100 text-red-500',
    'bg-orange-100 text-orange-500',
    'bg-yellow-100 text-yellow-600',
    'bg-green-100 text-green-600',
    'bg-teal-100 text-teal-600'
  ];
  // Simple hash du nom pour choisir une couleur
  const index = props.name.length % colors.length;
  return colors[index];
});

// Les initiales pour le visuel
const initials = computed(() => {
  return props.name.substring(0, 2).toUpperCase();
});
</script>

<template>
  <div class="group bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div class="flex justify-between items-start mb-4">
      <!-- Visuel simple : Cercle avec initiales -->
      <div :class="['w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm tracking-wider', colorClass]">
        {{ initials }}
      </div>
      <span class="text-lg font-bold text-gray-900">{{ price }} €</span>
    </div>
    
    <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">{{ name }}</h3>
    
    <p class="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
      {{ description }}
    </p>

    <button 
      @click="action"
      class="w-full py-3 px-4 bg-gray-50 text-gray-900 font-semibold rounded border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 text-sm"
    >
      Ajouter au panier
    </button>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { cartItems, cartTotal, incrementPizza, decrementPizza, clearCart } from "../props/Pizza.vue";

const router = useRouter();

// Fonction simple pour simuler le paiement
function payer() {
  if (cartItems.value.length === 0) return;
  
  alert(`Merci pour votre commande de ${cartTotal.value.toFixed(2)} € ! Elle arrive bientôt.`);
  clearCart(); // On vide le panier
  router.push('/'); // On retourne à l'accueil
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Votre Panier</h1>

    <!-- Si le panier est vide -->
    <div v-if="cartItems.length === 0" class="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
      <p class="text-gray-600 mb-4">Votre panier est vide.</p>
      <RouterLink to="/" class="text-red-600 hover:underline font-medium">
        Retourner à la carte
      </RouterLink>
    </div>

    <!-- Liste des articles -->
    <div v-else>
      <div class="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
        <div 
          v-for="item in cartItems" 
          :key="item.id" 
          class="flex items-center justify-between p-4 border-b border-gray-100 last:border-0"
        >
          <div>
            <h3 class="font-bold text-gray-800">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">{{ item.price }} € x {{ item.quantity }}</p>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="flex items-center border border-gray-300 rounded">
              <button 
                @click="decrementPizza(item.id)"
                class="px-3 py-1 hover:bg-gray-100 text-gray-600"
              >-</button>
              <span class="px-3 py-1 font-medium text-gray-800 border-l border-r border-gray-300 min-w-[2.5rem] text-center">
                {{ item.quantity }}
              </span>
              <button 
                @click="incrementPizza(item.id)"
                class="px-3 py-1 hover:bg-gray-100 text-gray-600"
              >+</button>
            </div>
            <span class="font-bold text-gray-900 w-20 text-right">
              {{ item.total.toFixed(2) }} €
            </span>
          </div>
        </div>
        
        <!-- Total -->
        <div class="bg-gray-50 p-6 flex justify-between items-center border-t border-gray-200">
          <span class="text-lg font-bold text-gray-700">Total à payer</span>
          <span class="text-2xl font-bold text-gray-900">{{ cartTotal.toFixed(2) }} €</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-end gap-4">
        <RouterLink 
          to="/"
          class="px-6 py-3 text-gray-600 font-medium hover:text-gray-900 transition-colors"
        >
          Continuer mes achats
        </RouterLink>
        <button 
          @click="payer"
          class="px-8 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-colors shadow-sm"
        >
          Payer ma commande
        </button>
      </div>
    </div>
  </div>
</template>

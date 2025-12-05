<script setup>
import { ref } from "vue";
import { cartItems, cartTotal } from "../../props/Pizza.vue";

// Dropdown visibility
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function closeDropdown() {
  showDropdown.value = false;
}

// Number of items in cart
const itemCount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
);

// Close dropdown when clicking outside (optional - for UX)
function handleClickOutside(event) {
  if (!event.target.closest('.panier-dropdown')) {
    closeDropdown();
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative panier-dropdown inline-block">
    <!-- Panier Button -->
    <button
      @click.stop="toggleDropdown"
      class="flex items-center bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded-full shadow hover:from-purple-600 hover:to-blue-500 relative focus:outline-none transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293-2.414A1 1 0 016.618 9H19"/>
        <circle cx="9" cy="21" r="1.5"/>
        <circle cx="19" cy="21" r="1.5"/>
      </svg>
      <span>Panier</span>
      <!-- Item count badge -->
      <span
        v-if="itemCount > 0"
        class="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold"
      >{{ itemCount }}</span>
    </button>
    
    <!-- Dropdown -->
    <div
      v-if="showDropdown"
      class="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-20"
      @click.stop
    >
      <div class="p-4">
        <h3 class="font-bold mb-2 text-gray-900 text-lg">Votre Panier</h3>
        <div v-if="cartItems.length === 0" class="text-gray-500 py-8 text-center">
          Votre panier est vide.
        </div>
        <ul v-else>
          <li
            v-for="item in cartItems"
            :key="item.id"
            class="flex justify-between items-center border-b border-gray-100 py-2"
          >
            <span class="font-medium">{{ item.name }}</span>
            <div class="flex items-center">
              <span class="mx-2 text-gray-700">x{{ item.quantity }}</span>
              <span class="text-gray-700">{{ item.total.toFixed(2) }} €</span>
            </div>
          </li>
        </ul>
        <div
          v-if="cartItems.length > 0"
          class="flex justify-between items-center border-t border-gray-200 mt-3 pt-3"
        >
          <span class="font-semibold text-gray-800">Total :</span>
          <span class="font-bold text-blue-700">{{ cartTotal.toFixed(2) }} €</span>
        </div>
      </div>
    </div>
  </div>
</template>
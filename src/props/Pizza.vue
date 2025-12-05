<script>
import { ref, computed } from "vue"

// Liste des pizzas disponibles
export const pizzas = ref([
  {
    id: 1,
    name: "Leonardo da Vinci",
    description: "Sauce tomate, mozzarella, basilic frais",
    price: 8.5,
  },
  {
    id: 2,
    name: "Michelangelo",
    description: "Sauce tomate, mozzarella, jambon, champignons",
    price: 10,
  },
  {
    id: 3,
    name: "Raphaël",
    description: "Sauce tomate, mozzarella, gorgonzola, chèvre, emmental",
    price: 11,
  },
  {
    id: 4,
    name: "Caravage",
    description: "Pizza demi-lune, sauce tomate, mozzarella, jambon, œuf",
    price: 11.5,
  },
  {
    id: 5,
    name: "Botticelli",
    description: "Sauce tomate, mozzarella, anchois, câpres, olives",
    price: 10.5,
  },
  {
    id: 6,
    name: "Donatello",
    description: "Sauce tomate, mozzarella, légumes grillés",
    price: 10.5,
  },
  {
    id: 7,
    name: "Veronese",
    description: "Sauce tomate, mozzarella, pepperoni",
    price: 11,
  },
  {
    id: 8,
    name: "Tintoretto",
    description: "Sauce tomate, mozzarella, jambon, ananas",
    price: 11,
  },
  {
    id: 9,
    name: "Giotto",
    description: "Sauce tomate, mozzarella, merguez, poivrons",
    price: 12,
  },
])

// Panier : clé = id de pizza, valeur = quantité
export const cart = ref({})

export function incrementPizza(id) {
  cart.value[id] = (cart.value[id] || 0) + 1
}

export function decrementPizza(id) {
  if (!cart.value[id]) return
  cart.value[id] = cart.value[id] - 1
  if (cart.value[id] <= 0) {
    delete cart.value[id]
  }
}

// Vide le panier complet (utile après paiement)
export function clearCart() {
  cart.value = {}
}

// Liste détaillée des éléments du panier
export const cartItems = computed(() => {
  return Object.entries(cart.value).map(([id, quantity]) => {
    const pizza = pizzas.value.find(p => p.id === Number(id))
    return {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      quantity,
      total: pizza.price * quantity,
    }
  })
})

export const cartTotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.total, 0)
)
</script>

<template>
</template>
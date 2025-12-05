<script setup>
import { defineProps } from "vue"

// Define the props for the button component
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  action: {
    type: Function,
    required: false
  }
})

// fallback handler if action is not provided
function handleClick() {
  if (props.action) {
    props.action()
  }
}
</script>

<template>
    <button
        @click="handleClick"
        class="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-400 shadow-md hover:from-purple-600 hover:to-blue-500 transition-colors duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95">
        {{ label }}
    </button>
</template>
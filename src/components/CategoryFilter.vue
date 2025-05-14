<template>
  <div class="flex justify-end">
    <select
      v-model="category"
      class="p-2 border-b border-gray-300 outline-none"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">Seleccione una categoría</option>
      <option
        v-for="option in categories"
        :value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue"

defineProps({
  categories: Array,
})
const emit = defineEmits(["update"])

const category = ref("")
</script>

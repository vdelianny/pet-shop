<template>
  <div class="flex justify-end">
    <select
      v-model="category"
      class="p-2 border-b border-gray-300 outline-none"
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
import { computed, defineProps, defineEmits } from "vue"

const props = defineProps({
  modelValue: String,
  categories: Array
})
const emit = defineEmits(["update:modelValue"])

const category = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>

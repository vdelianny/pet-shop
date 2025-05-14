<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Seleccione una categoría</option>
      <option>Accesorios</option>
      <option>Medicinas</option>
      <option>Alimentos</option>
    </select>
  </div>
</template>

<script setup>
import {
  ref
} from "vue"

const selected = ref('')

</script>

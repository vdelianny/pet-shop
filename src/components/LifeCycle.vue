<template>
  <div>
    <h2>Hooks del ciclo de vida</h2>
    <input
      v-model="mensaje"
      placeholder="Ingrese un valor para actualizar el ciclo de vida"
      style="width: 300px; height: 30px"
    />
  </div>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue"

const mensaje = ref("")

onBeforeMount(() => {
  console.log("onBeforeMount: El componente está por montarse")
})

onMounted(() => {
  console.log("onMounted: El componente ya fue montado")
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate: El componente está por actualizarse")
})

onUpdated(() => {
  console.log("onUpdated: El componente ya se actualizó")
})

onBeforeUnmount(() => {
  console.log("onBeforeUnmount: El componente está por desmontarse")
})

onUnmounted(() => {
  console.log("onUnmounted: El componente fue desmontado")
})
</script>

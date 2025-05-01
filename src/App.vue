<template>
  <LifeCycle v-if="showElements" />
  <div style="margin-top: 20px;">
    <button @click="showElements = !showElements">
      {{ showElements ? "Ocultar elementos" : "Mostrar elementos" }}
    </button>
  </div>
</template>

<script setup>
import LifeCycle from "./components/LifeCycle.vue"
import { ref } from "vue"

const showElements = ref(true)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

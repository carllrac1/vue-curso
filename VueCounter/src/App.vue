<script setup>

  import { ref } from 'vue'

  const count = ref(0)
  
  const addToCount = () => {
    count.value++;
  }

  const substractToCount = () => {
    count.value--;
  }
  
</script>

<template>
  <main>
    <div>
      <h4>The current value is...</h4>
      <h1>{{ count }}</h1>
      <button @click="substractToCount()">-</button>
      <button @click="addToCount()">+</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div { 
    text-align: center;
  }

</style>
<script setup>

  import { ref, watch } from 'vue'

  // const showGreet = ref(true)

  const person = ref("")
  const guests = ref([])
  
  const addGuest = () => {
    if (person.value.length > 3) {
      guests.value.unshift(person.value)
      person.value = ""
    }
  }


</script>

<template>
  <main>
    <!-- <div class="container">
      <Transition name="fade">
        <h1 v-if="showGreet">Hello world</h1>
        <h1 v-else>Goodbye World</h1>
      </Transition>
    </div>
    <button @click="showGreet = !showGreet">Toggle</button> -->

    <div class="container">
      <input v-model="person" @keypress.enter="addGuest()" type="text" placeholder="Add person to invite...">
      <TransitionGroup name="guests">
        <li v-for="(guest, index) in guests" :key="guest" @click="guests.splice(index, 1)">{{ guest }}</li>
      </TransitionGroup>
    </div>
    
  </main>
</template>

<style scoped>

  /* .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter-active {
    transition: all 0.4s ease;
  }

  .fade-leave-from {
    opacity: 1;
  }

  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-active {
    transition: all 0.4s ease;
  }

  .container {
    position: relative;
  }

  h1 {
    position: absolute;
  }

  button {
    margin-top: 50px; 
  } */

  .container {
    max-width: 300px;
    margin: auto;
  }

  .container input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.13);
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
  }

  ul {
    display: inline;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  li {
    list-style: none;
    width: 300px;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
    text-align: center;
    cursor: pointer;
  }


  /* Transition Group */

  .guests-enter-from {
    opacity: 0;
    transform: scale(0.5);
  }

  .guests-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .guests-enter-active {
    transition: all 0.5s ease;
  }

  .guests-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .guests-leave-to {
    opacity: 0;
    transform: scale(0.5);
  }

  .guests-leave-active {
    transition: all 0.5s ease;
    position: absolute;
  }

  .guests-move {
    transition: all 0.5s ease;
  }
</style>
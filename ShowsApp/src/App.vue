<script setup>
  import RickAndMortyCards from "./components/RickAndMortyCards.vue";
  import Hero from "./components/Hero.vue";
  import PokemonCardsSuspense from "./components/pokemonCardsSuspense.vue";
  import { ref } from 'vue'

  const isPokemon = ref(true)
</script>

<template>
<main>
  <Hero :isPokemon="isPokemon" @selectShow="isPokemon = !isPokemon"/>
  <!-- <PokemonCardsSuspense v-show="isPokemon"/>
  <RickAndMortyCards v-show="!isPokemon"/> -->
  <KeepAlive>
    <Component :is="isPokemon ? PokemonCardsSuspense : RickAndMortyCards" />
  </KeepAlive>
</main>
</template>

<style scoped>

.cards {
  height: 700px;
  background-color: rgb(27, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
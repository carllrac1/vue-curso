<script setup>

import { defineProps, onMounted, ref } from 'vue'
import axios from "axios"

const { character } = defineProps([
    "character"
])

const image = ref(null)

if (character.image) {
    image.value = character.image
} else {
    onMounted(async () => {
        const response = await axios.get(character.url)
        image.value = response.data.sprites.front_default
    })

}



</script>

<template>
    <div>
        <NCard>
            <template #cover>
                <img :src="image">
            </template>
            <h3>Name: {{ character.name }}</h3>
            <slot></slot>
        </NCard>
    </div>
</template>

<style scoped>

.n-card {
    width: 200px;
    margin:10px 20px;

}
.n-card img {
    height: 250px
}

</style>
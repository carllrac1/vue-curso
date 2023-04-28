<script setup>

import { useRoute, RouterView, useRouter } from 'vue-router'
import cars from '../data/data.json'

const route = useRoute()
const router = useRouter()

const carId = parseInt(route.params.id)
const car = cars.find(c => c.id == carId)

const showContact = () => {
    if (car.id == 4) {
        return
    }

    else {
        return router.push(`/cars/${car.id}/contact`)
    }
}

</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button @click="showContact()">Click me for contact</button>
        <RouterView/>
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>
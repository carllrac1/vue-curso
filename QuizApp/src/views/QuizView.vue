<script setup>

import { useRoute } from "vue-router"
import quizes from "../data/data.json"

const route = useRoute()

const course = quizes.find(q => q.id == parseInt(route.params.id))


</script>

<template>
    <div>
        <h1>Course is {{ course.name }}</h1>
    </div>
</template>
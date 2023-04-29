<script setup>

    import { defineProps } from 'vue'

    const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
        "quizQuestionLength",
        "numberOfCorrectAnswers"
    ])

</script>

<template>
    <div class="results">
        <p>Your results...</p>
        <h1>{{ numberOfCorrectAnswers }} / {{ quizQuestionLength }}</h1>
        <RouterLink to="/">Go back</RouterLink>
    </div>
</template>

<style scoped>

.results {
    text-align: center;
    padding: 100px;
}

p { 
    font-size: 25px;
}

h1 {
    font-size: 80px;
}

</style>
<script setup>

import { useNumbersStore } from "../stores/numbers"

const { numbers, filterNum } = useNumbersStore()

</script>

<template>
    <div>
        <h1>GreatGrandChild Component {{ filterNum(5) }}</h1>
    </div>
</template>
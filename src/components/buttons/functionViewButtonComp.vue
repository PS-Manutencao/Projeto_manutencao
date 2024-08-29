<script setup>
    defineProps(['word'])
</script>
<template>
    <button>cadastrar {{word}}</button>
</template>
<style scoped>
    button{
        background-color: #A7DAFF;
        padding: 8px 30px;
        font-weight: 600;
        color: white;
    }
</style>
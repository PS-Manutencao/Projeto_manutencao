<script setup>
    import navbarComp from '../components/nav/navbarComp.vue';
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    const route = useRoute()
    const link = computed(() => {
        return route.fullPath
    })
    console.log(link)
</script>

<template>
    <div class="flex">
        <navbarComp />
        <h1>{{link.replace('/', '')}}</h1>
    </div>
</template>
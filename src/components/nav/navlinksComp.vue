<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
defineProps(['title', 'link'])
</script>
<template>
    <RouterLink class="router-link" :to="link">
        <li class="color-gray" :class="[
            $route.fullPath == link || $route.fullPath == link + '/' + route.params.id ? 'active' : ''
        ]">
            {{ title }}
        </li>
    </RouterLink>
</template>
<style scoped>
.router-link{
    width: 100%;
    height: 40px;
}
.router-link li{
    display: flex;
    align-items: center;
    justify-content: center
}
.active{
    background-color: #7AC6FD;
}
li {
    height: 40px;
    color: white;
    cursor: pointer;
}
</style>
<script setup>
defineProps(['dadoTL', 'dadoTR', 'dadoBL', 'dadoBR'])
</script>
<template>
    <div class="flex flex-col case">
        <div class="flex w-full justify-between">
            <span class="dado-1">{{ dadoTL }}</span>
            <span class="dado-2">{{ dadoTR }}</span>
        </div>
        <div class="flex w-full justify-between">
            <span class="dado-3">{{ dadoBR }}</span>
            <span class="dado-4">{{ dadoBL }}</span>
        </div>
    </div>
</template>
<style scoped>
    .case{
        height: 40px;
        border-left: 2px solid black;
        border-right: 2px solid black;
        padding: 0px 10px;
    }
    .dado-1, .dado-2{
        font-weight: 600;
    }
    .dado-3, .dado-4{
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
    }
</style>
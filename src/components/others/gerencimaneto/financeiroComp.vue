<script setup>
import inputTextComp from '@/components/inputs/inputTextComp.vue';
import dadosDivComp from '@/components/others/dadosDivComp.vue';

</script>
<template>
    <div class="w-full graphic h-4/5 mt-10 p-10 flex">
        <div class="flex bg-white w-full flex-col p-10">
            <div>Saidas</div>
            <div class="mt-20">
                <inputTextComp content="buscar por data, tipo, nome ou valor" />
            </div>
            <div class="flex flex-col gap-6">
                <dadosDivComp />
                <dadosDivComp />
                <dadosDivComp />
                <dadosDivComp />
            </div>
        </div>
        <div class="flex w-full"></div>
    </div>
</template>
<style scoped>
.gray-color {
    color: rgba(0, 0, 0, 0.5);
}

.subtitulo {
    font-size: 14px;
    font-weight: 600;
}

.filter {
    color: #A7DAFF;
}

.button-filter {
    background-color: #A7DAFF;
    padding: 10px 30px;
    color: white;
}

.graphic {
    background-color: rgba(167, 218, 255, 0.25);
}

.withdrawals {
    margin: 20px;
    padding-top: 30px;
    background-color: white;
}
</style>
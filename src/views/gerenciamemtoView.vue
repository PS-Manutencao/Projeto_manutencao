<script setup>
import navbarComp from '../components/nav/navbarComp.vue'
import equipamentoComp from '@/components/others/gerencimaneto/equipamentoComp.vue';
import financeiroComp from '@/components/others/gerencimaneto/financeiroComp.vue';
import relatorioComp from '@/components/others/gerencimaneto/relatorioComp.vue';

import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const link = computed(() => {
    return route.fullPath
})

const page = ref(0)
function funcao1() {
    page.value = 0
}
function funcao2() {
    page.value = 1
}
function funcao3() {
    page.value = 2
}

console.log(link)
const dados = computed(() => {
    return link.value.slice(1)
})
</script>

<template>
    <div class="flex">
        <navbarComp @click="updateDados()" />
        <div class="px-16 pt-24 w-full">
            <div class="flex justify-between">
                <div>
                    <div>
                        <h1 class="text-5xl font-semibold">{{dados}}</h1>
                    </div>
                    <div class="flex gap-24 mt-7">
                        <span @click="funcao1">Equipamento</span>
                        <span @click="funcao2">Financeiro</span>
                        <span @click="funcao3">Relatorios</span>
                    </div>
                </div>
                <div class="filter">
                    filtrar por: <button class="button-filter">saida</button>
                </div>
            </div>
            <equipamentoComp v-if="page == 0" />
            <financeiroComp v-else-if="page == 1"/>
            <relatorioComp v-else/>
        </div>
    </div>
</template>
<style scoped>
.gray-color{
    color: rgba(0, 0, 0, 0.5);
}
.subtitulo{
    font-size: 14px;
    font-weight: 600;
}
.filter{
    color: #A7DAFF;
}
.button-filter{
    background-color: #A7DAFF;
    padding: 10px 30px;
    color: white;
}
.graphic{
    background-color: rgba(167, 218, 255, 0.25);
}
.withdrawals{
    margin: 20px;
    padding-top: 30px;
    background-color: white;
}
</style>
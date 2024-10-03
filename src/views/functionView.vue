<script setup>
import navbarComp from '../components/nav/navbarComp.vue'
import inputTextComp from '@/components/inputs/inputTextComp.vue';
import dadosDivComp from '@/components/others/dadosDivComp.vue';
import cardCreateComp from '@/components/others/cardCreateComp.vue'
import functionViewButtonComp from '@/components/buttons/functionViewButtonComp.vue';

import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import axios from 'axios';

const route = useRoute()
const link = computed(() => {
    return route.fullPath
})
const tema = computed(() => {
    if(link.value == '/clientes'){ return 'cliente'}
    else if(link.value == '/orcamentos'){ return 'orcamento'}
    else if(link.value == '/servicos'){ return 'servico'}
    else if(link.value == '/pecas'){ return 'peca'}
    else if(link.value == '/fornecedores'){ return 'fornecedor'}
    else if(link.value == '/acessorios'){ return 'acessorio'}
})

console.log(link)
const dados = computed(() => {
    return link.value.slice(1)
})
console.log(dados.value)
const results = ref()
axios.get(`http://localhost:3000/${dados.value}`)
    .then((response) => {
        results.value = response.data
    })
function updateDados() {
    axios.get(`http://localhost:3000/${dados.value}`)
    .then((response) => {
        results.value = response.data
    })
}

const foco = ref()
function focar(e) {
    foco.value = e
}

const componenteFilhoRef = ref(null);

function chamarMetodoDoFilho() {
  if (componenteFilhoRef.value) {
    componenteFilhoRef.value.abrirCadastro();
  }
}
</script>

<template>
    <div class="flex">
        <navbarComp @click="updateDados()" />
        <div class="flex justify-between w-full pt-14 px-16 pb-10">
            <div class="flex flex-col justify-start w-2/5">
                <div><h1 class="text-4xl font-semibold">Buscar {{tema}}</h1></div>
                <inputTextComp content="buscar por codigo, nome, CPF ou numero" max=50 class="w-full mt-16" />
                <span class="subtitulo mt-10 mb-4">{{ link.replace('/', '') }}</span>
                <div class="flex flex-col gap-5 itens">
                    <dadosDivComp v-for="(result, index) in results" :key="index"
                    :dadoTL="result.dadoPrimario"
                    :dadoTR="result.dadoSecundario"
                    :dadoBL="result.dadoTerciario"
                    :dadoBR="result.dadoQuartenario"
                    @click="focar(index)"
                    class="cursor-pointer"/>
                </div>
            </div>
            <div class="flex flex-col w-1/3">
                <div class="self-end"><functionViewButtonComp :word="tema" @click="chamarMetodoDoFilho" /></div>
                <div>
                    <div class="flex flex-col gap-3 mt-40 font-semibold">
                        <div class="self-end gray-color">{{tema}}</div>
                        <ul class="flex flex-col gap-3 items-end">
                            <li v-for="item in results[foco]">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <cardCreateComp :link="link" ref="componenteFilhoRef" />
    </div>

</template>
<style scoped>
.itens{
    overflow-y: scroll;
    padding-right: 10px;
    height: 600px;
}
::-webkit-scrollbar {
    padding: 3px;
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
    border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #A7DAFF;
    border-radius: 5px;
    width: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #7AC6FD;
}
.gray-color{
    color: rgba(0, 0, 0, 0.3);
}
.subtitulo{
    font-size: 14px;
    font-weight: 600;
}
</style>
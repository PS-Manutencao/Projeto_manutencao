<script setup>
import navbarComp from '../components/nav/navbarComp.vue'
import inputTextComp from '@/components/inputs/inputTextComp.vue';
import dadosDivComp from '@/components/others/dadosDivComp.vue';
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

const pecaRegister = ref(false)
const acessorioRegister = ref(false)
const clienteRegister = ref(false)
const orcamentoRegister = ref(false)
const fornecedorRegister = ref(false)
const servicoRegister = ref(false)
const registerStatus = ref(false)
function abrirCadastro(){
    if(link.value == '/clientes'){ clienteRegister.value = !clienteRegister.value }
    else if(link.value == '/orcamentos'){ orcamentoRegister.value = !orcamentoRegister.value }
    else if(link.value == '/servicos'){ servicoRegister.value = !servicoRegister.value }
    else if(link.value == '/pecas'){ pecaRegister.value = !pecaRegister.value }
    else if(link.value == '/fornecedores'){ fornecedorRegister.value = !fornecedorRegister.value }
    else if(link.value == '/acessorios'){ acessorioRegister.value = !acessorioRegister.value}

    registerStatus.value = !registerStatus.value
}
</script>

<template>
    <div class="flex">
        <navbarComp @click="updateDados()" />
        <div class="flex justify-between w-full pt-14 px-16 pb-10">
            <div class="flex flex-col justify-between w-2/5">
                <div><h1 class="text-4xl font-semibold">Buscar {{tema}}</h1></div>
                <inputTextComp content="buscar por codigo, nome, CPF ou numero" max=50 class="w-full" />
                <div class="flex flex-col gap-5">
                    <span class="subtitulo">{{ link.replace('/', '') }}</span>
                    <dadosDivComp v-for="(result, index) in results.slice(0, 10)" :key="index"
                    :dadoTL="result.dadoPrimario"
                    :dadoTR="result.dadoSecundario"
                    :dadoBL="result.dadoTerciario"
                    :dadoBR="result.dadoQuartenario"
                    @click="focar(index)"/>
                    <div class="self-end" v-show="(results.length - 10) > 0">+{{ results.length - 10 }}</div>
                </div>
            </div>
            <div class="flex flex-col w-1/3">
                <div class="self-end"><functionViewButtonComp :word="tema" @click="abrirCadastro" /></div>
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
    </div>
    <div class="background-add" v-if="registerStatus">
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="clienteRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Cliente</h1>
                <span @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Nome">
                <input type="text" placeholder="CPF">
                <input type="text" placeholder="Numero">
                <input type="text" placeholder="Endereco">
                <input type="button" value="Cadastrar">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="orcamentoRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Orcamento</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Tipo">
                <input type="text" placeholder="Codigo do Cliente">
                <input type="text" placeholder="Valor">
                <input type="text" placeholder="Pecas Usadas">
                <input type="button" value="Cadastrar">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="servicoRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Servico</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Tipo">
                <input type="text" placeholder="Codigo do Cliente">
                <input type="text" placeholder="Valor">
                <input type="text" placeholder="Codigo Orcamento">
                <input type="text" placeholder="Tempo estimado">
                <input type="button" value="Cadastrar">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="pecaRegister">
            <div class="flex justify-between w-full">
                <h1>Nova Peca</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Modelo">
                <input type="text" placeholder="Quantidade">
                <input type="text" placeholder="Fornecedor">
                <input type="text" placeholder="Valor">
                <input type="button" value="Cadastrar">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="acessorioRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Acessorio</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between" >
                <input type="text" placeholder="Nome">
                <input type="text" placeholder="Numero">
                <input type="text" placeholder="Tipo">
                <input type="text" placeholder="Peca">
                <input type="button" value="Cadastrar">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="fornecedorRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Fornecedor</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Nome">
                <input type="text" placeholder="Fornecedor">
                <input type="text" placeholder="Valor">
                <input type="text" placeholder="Estoque">
                <input type="button" value="Cadastrar">
            </div>
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
.background-add{
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    backdrop-filter: blur(6px);
}
.background-add input{
    background-color: transparent;
    border: 1px solid #5890B9;
    padding: 5px;
}
.background-add input[type="button"]{
    background-color: #7AC6FD;
    border: none;
    color: white;
    padding: 5px 50px;
}
.background-add h1{
    color: #364752;
    font-weight: 600;
}
.card-add{
    width: 600px;
    background-color: #A7DAFF;
}
</style>
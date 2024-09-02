<script setup>
const props = defineProps(['link'])
import { defineExpose } from 'vue';
import { ref } from 'vue'
const link = ref(null)
const pecaRegister = ref(false)
const acessorioRegister = ref(false)
const clienteRegister = ref(false)
const orcamentoRegister = ref(false)
const fornecedorRegister = ref(false)
const servicoRegister = ref(false)
const registerStatus = ref(false)

function abrirCadastro(){
    link.value = props.link
    if(link.value == '/clientes'){ clienteRegister.value = !clienteRegister.value }
    else if(link.value == '/orcamentos'){ orcamentoRegister.value = !orcamentoRegister.value }
    else if(link.value == '/servicos'){ servicoRegister.value = !servicoRegister.value }
    else if(link.value == '/pecas'){ pecaRegister.value = !pecaRegister.value }
    else if(link.value == '/fornecedores'){ fornecedorRegister.value = !fornecedorRegister.value }
    else{ acessorioRegister.value = !acessorioRegister.value}

    registerStatus.value = !registerStatus.value
}

defineExpose({ abrirCadastro })
</script>

<template>
    <form class="background-add" @submit.prevent="abrirCadastro" v-if="registerStatus">
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
    </form>
</template>
<style>

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
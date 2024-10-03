<script setup>
const props = defineProps(['link'])
import axios from 'axios';
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
const cliente = ref({
    dadoPrimario: "",
    dadoQuartenario: "",
    dadoTerciario: "",
    dadoSecundario: "",
    data_de_cadastro: new Date(),
    endereco: "",
    codigo_orcamento: ""
})
const orcamento = ref({
    dadoPrimario: "",
    dadoQuartenario: "",
    dadoTerciario: '',
    dadoSecundario: "",
    data_de_cadastro: new Date(),
    id_cliente: "",
    pecas_usadas: ""
})
const servico = ref({
    dadoPrimario: "",
    codigo_cliente: "",
    dadoTerciario: "",
    dadoSecundario: "",
    id_orcamento: "",
    tempo_estimado: "",
    dadoQuartenario: ""
})
const acessorio = ref({
    dadoPrimario: "",
    dadoTerciario: "",
    dadoSecundario: "",
    id: "",
    valor: "",
    dadoQuartenario: ""
})
const peca = ref({
    dadoPrimario: "",
    dadoQuartenario: 0,
    dadoTerciario: "",
    dadoSecundario: "",
    id: ""
})
const fornecedor = ref({
    dadoPrimario: "",
    dadoQuartenario: '',
    dadoTerciario: "",
    dadoSecundario: "",
    numero: ""
})
function enviarCadastro(){
    link.value = props.link
    if(link.value == '/clientes'){ axios.post(`http://localhost:3000/clientes`, cliente.value) }
    else if(link.value == '/orcamentos'){ axios.post(`http://localhost:3000/orcamentos`, orcamento.value) }
    else if(link.value == '/servicos'){ axios.post(`http://localhost:3000/servicos`, servico.value) }
    else if(link.value == '/pecas'){ axios.post(`http://localhost:3000/pecas`, peca.value) }
    else if(link.value == '/fornecedores'){ axios.post(`http://localhost:3000/fornecedores`, fornecedor.value) }
    else{ axios.post(`http://localhost:3000/acessorios`, acessorio.value) }

    if(link.value == '/clientes'){ clienteRegister.value = !clienteRegister.value }
    else if(link.value == '/orcamentos'){ orcamentoRegister.value = !orcamentoRegister.value }
    else if(link.value == '/servicos'){ servicoRegister.value = !servicoRegister.value }
    else if(link.value == '/pecas'){ pecaRegister.value = !pecaRegister.value }
    else if(link.value == '/fornecedores'){ fornecedorRegister.value = !fornecedorRegister.value }
    else{ acessorioRegister.value = !acessorioRegister.value}

    registerStatus.value = !registerStatus.value

    cliente.value = ''
    orcamento.value = ''
    servico.value = ''
    peca.value = ''
    fornecedor.value = ''
    acessorio.value = ''    
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
                <input type="text" placeholder="Nome" v-model="cliente.dadoPrimario">
                <input type="text" placeholder="ID" v-model="cliente.dadoQuartenario">
                <input type="text" placeholder="CPF" v-model="cliente.dadoTerciario">
                <input type="text" placeholder="Numero" v-model="cliente.dadoSecundario">
                <input type="text" placeholder="Endereco" v-model="cliente.endereco">
                <input type="text" placeholder="vincular orçamento" v-model="cliente.codigo_orcamento">
                <input type="button" value="Cadastrar" @click="enviarCadastro">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="orcamentoRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Orcamento</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Tipo" v-model="orcamento.dadoPrimario">
                <input type="text" placeholder="Codigo do Cliente" v-model="orcamento.id_cliente">
                <input type="text" placeholder="Valor" v-model="orcamento.dadoSecundario">
                <input type="text" placeholder="Pecas Usadas" v-model="orcamento.pecas_usadas">
                <input type="text" placeholder="Nome Cliente" v-model="orcamento.dadoTerciario">
                <input type="text" placeholder="Codigo do orçamento" v-model="orcamento.dadoQuartenario">
                <input type="button" value="Cadastrar" @click="enviarCadastro">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="servicoRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Servico</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Tipo" v-model="servico.dadoPrimario">
                <input type="text" placeholder="Codigo do Cliente" v-model="servico.codigo_cliente">
                <input type="text" placeholder="Valor" v-model="servico.dadoSecundario">
                <input type="text" placeholder="Nome do Cliente" v-model="servico.dadoTerciario">
                <input type="text" placeholder="Tempo estimado" v-model="servico.tempo_estimado">
                <input type="text" placeholder="Codigo do orçamento" v-model="servico.id_orcamento">
                <input type="text" placeholder="Status" v-model="servico.dadoQuartenario">
                <input type="button" value="Cadastrar" @click="enviarCadastro">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="pecaRegister">
            <div class="flex justify-between w-full">
                <h1>Nova Peca</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Modelo" v-model="peca.dadoPrimario">
                <input type="text" placeholder="Quantidade" v-model="peca.dadoQuartenario">
                <input type="text" placeholder="Fornecedor" v-model="peca.dadoTerciario">
                <input type="text" placeholder="Valor" v-model="peca.dadoSecundario">
                <input type="button" value="Cadastrar" @click="enviarCadastro">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="acessorioRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Acessorio</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between" >
                <input type="text" placeholder="Nome" v-model="acessorio.dadoSecundario">
                <input type="text" placeholder="Fornecedor" v-model="acessorio.dadoPrimario">
                <input type="text" placeholder="Tipo" v-model="acessorio.dadoTerciario">
                <input type="text" placeholder="Quantidade" v-model="acessorio.dadoQuartenario">
                <input type="text" placeholder="ID" v-model="acessorio.id">
                <input type="text" placeholder="Valor" v-model="acessorio.valor">
                <input type="button" value="Cadastrar" @click="enviarCadastro">
            </div>
        </div>
        <div class="card-add flex flex-wrap gap-3 p-10" v-if="fornecedorRegister">
            <div class="flex justify-between w-full">
                <h1>Novo Fornecedor</h1>
                <span  @click="abrirCadastro">X</span>
            </div>
            <div class="flex flex-wrap gap-5 justify-between">
                <input type="text" placeholder="Nome" v-model="fornecedor.dadoPrimario">
                <input type="text" placeholder="Numero" v-model="fornecedor.numero">
                <input type="text" placeholder="Tipo" v-model="fornecedor.dadoTerciario">
                <input type="text" placeholder="ID" v-model="fornecedor.dadoQuartenario">
                <input type="text" placeholder="Fornece" v-model="fornecedor.dadoSecundario">
                <input type="button" value="Cadastrar" @click="enviarCadastro">
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
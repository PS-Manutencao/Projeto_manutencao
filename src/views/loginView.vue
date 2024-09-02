<script setup>
import inputPasswordComp from '@/components/inputs/inputPasswordComp.vue';
import inputTextComp from '@/components/inputs/inputTextComp.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter()
const user = ref({
    code: '',
    password: '',
})
const errorMsg = ref('')
const acess = ref('')
axios.get(`http://localhost:3000/acess`)
    .then((response) => {
        acess.value = response.data
    })
function verificar(){
    console.log(acess.value.password)
    console.log(user.value.password)
    if(user.value.code == acess.value.code && user.value.password == acess.value.password){
        route.push('/clientes')
    }else{
        errorMsg.value = 'usuario invalido'
    }
}
</script>

<template>
    <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    </head>
    <div class="flex w-screen h-screen justify-center">
        <div class="absolute top-5 left-5 font-bold"><img src="/src/assets/logo/logo (2).png" alt=""></div>
        <form @submit.prevent="verificar" class="w-1/3 flex flex-col gap-24">
            <div class="text-center my-28">
                <h1 class="font-bold text-5xl">Entrar</h1>
            </div>
            <inputTextComp content="Código do profissional" max=10 v-model="user.code" />
            <inputPasswordComp v-model="user.password"/>
            <span class="error">{{ errorMsg }}</span>
            <div class="self-end">
                <input type="submit" value="Acessar" class="submitButton">
            </div>
        </form>
    </div>
</template>

<style scoped>
.error{
    transform: translateY(-100px);
    line-height: 0px;
    background-color: black;
    font-size: 12px;
    color: red;
}
.submitButton{
    background-color: #A7DAFF;
    color: white;
    font-weight: 500;
    padding: 10px 100px;
    border-radius: 3rem;
}
</style>

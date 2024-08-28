<script setup>
import inputPasswordComp from '@/components/inputs/inputPasswordComp.vue';
import inputTextComp from '@/components/inputs/inputTextComp.vue';
import { useRouter } from 'vue-router';
const route = useRouter()
function verificar(){
    route.push('/clientes')
}
</script>

<template>
    <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    </head>
    <div class="flex w-screen h-screen justify-center">
        <div class="absolute top-5 left-5 font-bold"><img src="/src/assets/logo/logo (2).png" alt=""></div>
        <form @submit.prevent="" class="w-1/3 flex flex-col gap-24">
            <div class="text-center my-28">
                <h1 class="font-bold text-5xl">Entrar</h1>
            </div>
            <inputTextComp content="Código do profissional" />
            <inputPasswordComp/>
            <div class="self-end">
                <input type="submit" value="Acessar" class="submitButton" @click="verificar()">
            </div>
        </form>
    </div>
</template>

<style scoped>
.submitButton{
    background-color: #A7DAFF;
    color: white;
    font-weight: 500;
    padding: 10px 100px;
    border-radius: 3rem;
}
</style>

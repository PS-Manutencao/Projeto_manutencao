<script setup>
import 'boxicons'
import { ref, computed } from 'vue';
const show = ref(false)
const typeInput = computed(() => {
  return show.value ? 'Text' : 'Password'
})
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
            <div class="flex flex-col gap-10">
                <div class="flex flex-col input-area h-full">
                    <input type="text" id="" maxlength="10" required />
                    <span>Codigo do profissional</span>
                </div>
            </div>
            <div class="flex flex-col gap-10 relative">
                <div class="flex flex-col input-area h-full">
                    <input :type="typeInput" id="" required />
                    <span>Senha</span>
                    <div class="absolute right-5 z-10 cursor-pointer">
                        <i class='bx bx-show-alt bx-sm' v-if="show" @click="show = !show"/>
                        <i class='bx bx-hide bx-sm' v-else @click="show = !show" />
                    </div>
                </div>
            </div>
            <div class="self-end">
                <input type="submit" value="Acessar" class="submitButton">
            </div>
        </form>
    </div>
</template>

<style scoped>
.input-area{
    height: 50px;
    display: flex;
}
.input-area input {
    background-color: transparent;
    z-index: 2;
    border-bottom: 1px solid black;
    padding: 0px 50px 0px 5px;
    outline: none;
    font-weight: 500;
}
.input-area span{
    z-index: 1;
    transform: translate(5px, -30px);
    font-weight: 500;
}
.input-area input:focus + span,
.input-area input:valid + span {
    transform: translate(5px, -45px);
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    transition: .2s ease;
}
.submitButton{
    background-color: #A7DAFF;
    color: white;
    font-weight: 500;
    padding: 10px 100px;
    border-radius: 3rem;
}
</style>

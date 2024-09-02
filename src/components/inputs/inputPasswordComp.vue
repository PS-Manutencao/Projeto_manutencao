<template>            
    <div class="flex flex-col gap-10 relative">
        <div class="flex flex-col input-area h-full">
            <input :type="typeInput" id="" required v-model="inputValue" />
            <span>Senha</span>
            <div class="absolute right-5 z-10 cursor-pointer">
                <i class='bx bx-show-alt bx-sm' v-if="show" @click="show = !show"/>
                <i class='bx bx-hide bx-sm' v-else @click="show = !show" />
            </div>
        </div>
    </div>
</template>
<script setup>
    import 'boxicons'
    import { ref, computed, defineModel } from 'vue';
    const show = ref(false)
    const typeInput = computed(() => {
    return show.value ? 'Text' : 'Password'
    })
    const inputValue = defineModel()
</script>
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
</style>
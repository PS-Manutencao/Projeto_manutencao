
<template>            
    <div class="flex flex-col gap-10">
        <div class="flex flex-col input-area h-full">
            <input type="text" id="" :maxlength="max" required />
            <span>{{ content }}</span>
        </div>
    </div>
</template>
<script setup>
defineProps({
    content: {
        type: String,
        required: true
    },
    max: {
        type: Number,
        required: true
    }
})
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

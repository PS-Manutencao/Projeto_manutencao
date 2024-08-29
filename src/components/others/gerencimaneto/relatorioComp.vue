<script setup>
import inputTextComp from '@/components/inputs/inputTextComp.vue';
import dadosDivComp from '@/components/others/dadosDivComp.vue';

</script>
<template>
    <div class="w-full gap-10 h-4/5 mt-10 p-10 flex flex-wrap">
        <div class="card flex items-end">
            <div class="card-disc flex flex-col justify-between">
                <div class="flex flex-col">
                    <span>Relatorio de Vendas</span>
                    <span>10/07 - 10/08</span>
                </div>
                <div>
                    <button>Gerar Relatorio</button>
                </div>
            </div>
        </div>
        <div class="card flex items-end">
            <div class="card-disc flex flex-col justify-between">
                <div class="flex flex-col">
                    <span>Relatorio de Clientes</span>
                    <span>10/07 - 10/08</span>
                </div>
                <div>
                    <button>Gerar Relatorio</button>
                </div>
            </div>
        </div>
        <div class="card flex items-end">
            <div class="card-disc flex flex-col justify-between">
                <div class="flex flex-col">
                    <span>Relatorio de Servicos</span>
                    <span>10/07 - 10/08</span>
                </div>
                <div>
                    <button>Gerar Relatorio</button>
                </div>
            </div>
        </div>
        <div class="card flex items-end">
            <div class="card-disc flex flex-col justify-between">
                <div class="flex flex-col">
                    <span>Relatorio de Equipamento</span>
                    <span>10/07 - 10/08</span>
                </div>
                <div>
                    <button>Gerar Relatorio</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card{
    width: 450px;
    height: 250px;
    background-color: rgba(167, 218, 255, 0.25);
}
.card-disc{
    width: 100%;
    height: 60%;
    padding: 15px;
    background-color: #A7DAFF;
}
.card-disc button{
    padding: 10px 50px;
    background-color: #7AC6FD;
}
.card-disc span{
    color: white;
}


</style>
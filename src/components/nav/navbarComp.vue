<script setup>
import navlinks from '@/components/nav/navlinksComp.vue'
const titles = [
  {
    text: 'serviços',
    link: '/servicos'
  },
  {
    text: 'clientes',
    link: '/clientes'
  },
  {
    text: 'orçamentos',
    link: '/orcamentos'
  },
  {
    text: 'peças',
    link: '/pecas'
  },
  {
    text: 'gerenciamento',
    link: '/gerenciamento'
  },
  {
    text: 'fornecedores',
    link: '/fornecedores'
  },
  {
    text: 'acessórios',
    link: '/acessorios'
  }
]
</script>
<template>
  <!-- Menu navegavel -->
    <header class="bg-Black">
    <ul class="menu color-gray">
        <span class="divisor"></span>
        <navlinks
            class="router-link navlink"
            v-for="(text, index) in titles"
            :key="index"
            :title="text.text"
            :link="text.link"
        />
    </ul>
  </header>
</template>
<style scoped>
.menu {
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100vh;
    font-weight: 600;
    text-align: center;
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;
    background-color: #A7DAFF;
}
.divisor{
    display: flex;
    background-color: #7AC6FD;
    width: 80%;
    height: 5px;
}
</style>
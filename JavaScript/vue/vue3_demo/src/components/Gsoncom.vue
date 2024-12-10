<script setup>
    import { inject } from 'vue';
    const sayHello = inject('sayHello')
    const provideName = inject('provideName')
</script>

<template>
    <div class="gsoncom" style="background-color: pink">
        <h1>这是孙组件</h1>
        <h1>祖先组件person的数据：{{ sayHello }}</h1>
        <h1>祖先组件provideName的数据：{{ provideName }}</h1>
    </div>
</template>

<style scoped>

</style>
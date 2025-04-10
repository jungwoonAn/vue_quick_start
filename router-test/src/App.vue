<template>
    <Header />
    <div class="container pt-3">   
        <router-view />
    </div>
</template>

<script setup>
    import Header from '@/components/Header.vue'
</script>
<template>
    <Layout>
        <template v-slot:header>
            <h2>헤더 영역</h2>
        </template>
        <template v-slot:sidebar>
            <h3>사이드</h3>
            <h3>사이드</h3>
            <h3>사이드</h3>
        </template>
        <template v-slot:default>
            <h2>컨텐트 영역</h2>
            <h2>컨텐트 영역</h2>
            <h2>컨텐트 영역</h2>
            <h2>컨텐트 영역</h2>
            <h2>컨텐트 영역</h2>
            <h2>컨텐트 영역</h2>
        </template>
        <template v-slot:footer>
            <h2>풋터 영역</h2>
        </template>

    </Layout>
</template>

<script>
    import Layout from './components/Layout.vue';

    export default {
        name: 'App2',
        components: {Layout},
    }
</script>

<style></style>
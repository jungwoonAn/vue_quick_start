<template>
    <div class="modal">
        <div class="box">
            처리중
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
    }
</script>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.4);
    }

    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 80px;
        background-color: aqua;
        border: double 3px gray;
        text-align: center;
        line-height: 80px;
    }
</style>
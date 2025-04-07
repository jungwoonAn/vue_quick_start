<template>
    <div class="sender">
        <h2>Sender</h2>
        <button @click="sendMessage">이벤트 발신</button>
    </div>
</template>

<script>
    export default {
        name: 'Sender',
        methods: {
            sendMessage() {
                this.emitter.emit('message', Date.now() + '에 발신된 메시지')
            }
        }
    }
</script>

<style>
    .sender {
        border: 1px solid gray;
        margin: 5px;
        padding: 5px;
    }
</style>
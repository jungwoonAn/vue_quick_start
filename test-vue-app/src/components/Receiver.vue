<template>
    <div class="receiver">
        <h2>Receiver</h2>
        <hr>
        <h2>전송된 테스트 : {{ textMessage }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Receiver',
        created() {
            this.emitter.on('message', this.receiveHandler)
        },
        data() {
            return {
                textMessage: ''
            }
        },
        methods: {
            receiveHandler(msg) {
                this.textMessage = msg;
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
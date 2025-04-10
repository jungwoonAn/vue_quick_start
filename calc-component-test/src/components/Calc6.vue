<template>
    <div>
        X : <input type="text" v-model.number="state.x"><br>
        <p>결과 : {{ state.result }}</p>
    </div>
</template>

<script>
    import { watch, reactive } from 'vue';

    export default {
        name: 'Calc6',
        setup(){
            const state = reactive({x:0, result:0});
            
            watch(()=>state.x, (current, old) => {
                console.log(`${old.x} ==> ${current}`);
                state.result = current * 2;
            })
            return {state}
        }
    }
</script>

<style></style>
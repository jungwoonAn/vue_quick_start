<template>
    <div>
        X : <input type="text" v-model.number="x"><br>
        Y : <input type="text" v-model.number="y"><br>
        <p>결과 : {{ result }}</p>
    </div>
</template>

<script>
    import { ref, watchEffect } from 'vue';

    export default {
        name: 'Calc8',
        setup(){
            const x = ref(10);
            const y = ref(20);
            const result = ref(0);

            watchEffect(() => {
                result.value = x.value + y.value;
                console.log(`${x.value} + ${y.value} = ${result.value}`)
            })
            return {x, y, result}
        }
    }
</script>

<style></style>
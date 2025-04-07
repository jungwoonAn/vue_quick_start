<template>
    <div>
        <h3>당신이 경험한 프론트엔드 기술은?(세번째:named slot)</h3>
        <CheckBox3 v-for="item in items" :key="item.id" :id="item.id" 
        :checked="item.checked" @check-changed="CheckBoxChanged">
            <template v-slot:icon>
                <i v-if="item.checked" class="fa-regular fa-face-grin-beam"></i>
                <i v-else class="fa-solid fa-face-frown"></i>
            </template>
            <template v-slot:label>
                <span v-if="item.checked === true" style="color: blue; text-decoration: underline;">
                    <em>{{ item.label }}</em>
                </span>
                <span v-else style="color: gray;">{{ item.label }}</span>
            </template>            
        </CheckBox3>
    </div>
</template>

<script>
    import CheckBox3 from './CheckBox3.vue';

    export default {
        name: 'NamedSlotTest',
        components: {CheckBox3},
        data() {
            return {
                items: [
                    {id: 'V', checked: true, label: 'Vue'},
                    {id: 'A', checked: false, label: 'Angular'},
                    {id: 'R', checked: false, label: 'React'},
                    {id: 'S', checked: false, label: 'Svelte'},
                ]
            }
        },
        methods: {
            CheckBoxChanged(e) {
                let item = this.items.find(item => item.id === e.id)
                item.checked = e.checked
            }
        }
    }
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v6.0.0/css/all.css");
</style>
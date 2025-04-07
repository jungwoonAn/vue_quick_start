<template>
    <div>
        <h3>당신이 경험한 프론트엔드 기술은?(네번째:scoped slot)</h3>
        <CheckBoxList :items="items" @check-changed="CheckBoxChanged">
            <template v-slot:icon="p1">
                <i v-if="p1.checked" class="fa-regular fa-face-grin-beam"></i>
                <i v-else class="fa-solid fa-face-frown"></i>
            </template>
            <template v-slot:default="p2">
                <span v-if="p2.checked === true" style="color: blue; text-decoration: underline;">
                    <em>{{ p2.label }}</em>
                </span>
                <span v-else style="color: gray;">{{ p2.label }}</span>
            </template>
        </CheckBoxList>
    </div>
</template>

<script>
    import CheckBoxList from './CheckBoxList.vue';

    export default {
        name: 'ScopedSlotTest',
        components: {CheckBoxList},
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
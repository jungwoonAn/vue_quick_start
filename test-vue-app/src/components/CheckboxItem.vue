<template>
    <li>
        <input type="checkbox" :checked="checked"> {{ id }} - {{ name }}
    </li>
</template>

<script>
    export default {
        name: 'CheckboxItem',
        props: {
            id: [Number, String],
            // name: String,
            name: {
                validator(value) {
                    return typeof(value) !== 'string' ?
                        false : 
                        value.trim().length >= 4 ? true : false
                }
            },
            checked: {
                type: Boolean,
                required: false,
                default: false
            }
        },
    }
</script>
<template>
    <Header />
    <div class="container pt-3">   
        <router-view />
    </div>
</template>

<script setup>
    import Header from '@/components/Header.vue'
    import { provide } from 'vue';

    provide('videos', [
        { "id":"t0BHhqw_Ecc", "title":"범 내려온다", "category":"official" },
        { "id":"FrCkLMxnlMI", "title":"좌우나졸", "category":"official" },
        { "id":"5U3gX9Qk4yk", "title":"별주부가 울며 여짜오되", "category":"official" },
        { "id":"MJD_fAdqNQc", "title":"어류도감", "category":"official" },
        { "id":"SmTRaSg2fTQ", "title":"범 내려온다", "category":"온스테이지2.0" },
        { "id":"B_X7n0AaLqA", "title":"범 내려온다(서울)", "category":"관광공사" },
        { "id":"sV1jq6RFSXc", "title":"어류도감(부산)", "category":"관광공사" },
        { "id":"dInPs_VHqSM", "title":"좌우나졸(전주)", "category":"관광공사" }
    ])
</script>

<style>
    @import url('https://use.fontawesome.com/releases/v6.0.0/css/all.css');

    .fa-brands {
        padding: 7px;
        width: 30px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        color: white;
        border-radius: 50%;
    }
    .fa-instagram {background-color: #125688;}
    .fa-youtube {background-color: #bb0000;}
    .fa-facebook {background-color: #3b5998;}
</style>
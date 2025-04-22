<template>
    <div class="card card-body align-items-center">
        <img :src="member.photo" class="img-thumbnail mb-3">
        <h4>{{ member.name }}({{ member.role}})</h4>
        <p>{{ member.desc }}</p>
        <div class="sns mb-5">
            <a v-if="member.insta && member.insta !==''" 
            class="fa-brands fa-instagram m-1" :href="member.insta"></a>
            <a v-if="member.facebook && member.facebook !==''" 
            class="fa-brands fa-facebook m-1" :href="member.facebook"></a>
            <a v-if="member.youtube && member.youtube !==''" 
            class="fa-brands fa-youtube m-1" :href="member.youtube"></a>
        </div>        
        <router-link :to="{name: 'members'}">멤버 목록으로</router-link>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import members from '@/members.json'
    
    const currentRoute = useRoute()
    const id = parseInt(currentRoute.params.id, 10);
    const member = members.find(m => m.id===id)
</script>

<style scoped>
    img {width: 30%;}
</style>
<template>
    <div>
        <h2>로그인</h2>
        사용자 : <input type="text" v-model="info.userid"><br>
        암호 : <input type="password" v-model="info.password"><br>
        <br>
        <button @click="login">로그인</button>
    </div>
</template>

<script setup>
import { loginProcess } from '@/utils/AuthUtil';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = useRoute();
const fromname = currentRoute.query.fromname;

const info = reactive({userid: '', password: ''})

const successCallback = () => {
    if(fromname) router.push({path: fromname})
    else router.push({name: 'home'})
}

const failCallback = () => {
    alert('로그인 실패');
}

const login = () => {
    loginProcess(info.userid, info.password, successCallback, failCallback)
}
</script>
<template>
    <div>
        <h2>콘솔을 확인합니다.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = async () => {
    const url = '/api/todolist_long/gdhong';

    axios.get(url, {timeout: 900})
        .then(response => {
            console.log('# 응답 객체 : ', response);
        })
        .catch(error => {
            console.log('## 다음 오류가 발생했습니다.');
            if(error instanceof Error) console.log(error.message);
            else console.log(error);
        })    
}

requestAPI();
</script>
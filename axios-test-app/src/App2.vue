<template>
    <div>
        <h2>콘솔을 확인합니다.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const listUrl = '/api/todolist_long/gdhong';

const requestAPI = async () => {
    let todoList;

    try {
        let response = await axios.get(listUrl);
        todoList = response.data;
        console.log('# TodoList : ', todoList);
        
        for(let i=0; i<todoList.length; i++){
            response = await axios.get(listUrl + '/' + todoList[i].id);
            console.log(`# ${i+1}번째 Todo : `, response.data);
        }
    }catch(error) {
        if(error instanceof Error) console.log(error.message);
        else console.log(error);
    }    
}

requestAPI();
</script>
<template>
    <div class="row">
        <div class="col p-3">
            <h2>할일 수정</h2>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="mb-3">
                <label for="todo" class="form-label">할일 : </label>
                <input type="text" id="todo" class="form-control" v-model="todoItem.todo">   
            </div>           
            <div class="mb-3">
                <label for="desc" class="form-label">설명 : </label>
                <textarea id="desc" class="form-control" rows="3" v-model="todoItem.desc"></textarea>
            </div> 
            <div class="mb-3">
                <label for="done" class="form-label">완료여부 : </label>
                <input type="checkbox" id="done" v-model="todoItem.done" />
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-primary m-1" @click="updateTodoHandler">수정</button>
                <button type="button" class="btn btn-primary m-1" @click="router.push('/todos')">취소</button>
            </div>      
        </div>
    </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = useRoute();

const {todoList, updateTodo} = useTodoListStore()

const matchedTodoItem = todoList.find(item => item.id === parseInt(currentRoute.params.id));
if(!matchedTodoItem){
    router.push('/todos');
}

const todoItem = reactive({...matchedTodoItem});

const updateTodoHandler = () => {
    let {todo} = todoItem;
    if(!todo || todo.trim()===''){
        alert('할일은 반드시 입력해야 합니다.');
        return;
    }
    updateTodo({...todoItem}, () => {  // successCallback에 들어갈 함수
        router.push('/todos');
    });
}
</script>
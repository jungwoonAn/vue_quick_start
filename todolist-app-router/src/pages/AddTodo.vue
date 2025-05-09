<template>
    <div class="row">
        <div class="col p-3">
            <h2>할일 추가</h2>
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
                <button type="button" class="btn btn-primary m-1" @click="addTodoHandler">추가</button>
                <button type="button" class="btn btn-primary m-1" @click="router.push('/todos')">취소</button>
            </div>      
        </div>
    </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const {addTodo} = useTodoListStore()
const todoItem = reactive({todo: '', desc: ''});

const addTodoHandler = () => {
    let {todo} = todoItem;
    if(!todo || todo.trim()===''){
        alert('할일은 반드시 입력해야 합니다.');
        return;
    }
    addTodo({...todoItem}, () => {  // successCallback에 들어갈 함수
        router.push('/todos');
    });
}
</script>
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

// 옵션 API 방식의 todoList1 스토어
export const useTodoList1Store = defineStore('todoList1', {
    state: () => ({
        todoList : [
            {id:1, todo: 'ES6학습', done: false},
            {id:2, todo: 'React학습', done: false},
            {id:3, todo: 'ContextAPI학습', done: true},
            {id:4, todo: '야구경기 관람', done: false},
        ]
    }),
    getters: {
        doneCount : state => {
            return state.todoList.filter(todoItem => todoItem.done === true).length;
        }
    },
    actions : {
        addTodo(todo) {
            this.todoList.push({id: new Date().getTime(), todo, done: false})
        },
        deleteTodo(id) {
            let idx = this.todoList.findIndex(todo => todo.id === id)
            this.todoList.splice(idx, 1)

        },
        toggleDone(id) {
            let idx = this.todoList.findIndex(todo => todo.id === id)
            this.todoList[idx].done = !this.todoList[idx].done;
        }
    }
})

// 컴포지션 API 방식의 todoList2 스토어
export const useTodoList2Store = defineStore('todoList2', () => {
    const state = reactive({
        todoList: [
            {id:1, todo: 'ES6학습', done: false},
            {id:2, todo: 'React학습', done: false},
            {id:3, todo: 'ContextAPI학습', done: true},
            {id:4, todo: '야구경기 관람', done: false},
        ]    
    })

    const addTodo = (todo) => {
        state.todoList.push({id: new Date().getTime(), todo, done: false})
    }
    
    const deleteTodo = id => {
        let idx = state.todoList.findIndex(todo => todo.id === id)
        state.todoList.splice(idx, 1)
    }
    
    const toggleDone = id => {
        let idx = state.todoList.findIndex(todo => todo.id === id)
        state.todoList[idx].done = !state.todoList[idx].done;
    }
    
    const doneCount = computed(() => 
        state.todoList.filter(todoItem => todoItem.done === true).length)

    const todoList = computed(() => state.todoList);

    return {todoList, doneCount, addTodo, deleteTodo, toggleDone};
})
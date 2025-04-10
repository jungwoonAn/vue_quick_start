<template>
  <div id="app" class="container">
        <div class="card card-body bg-light">
            <div class="title">:: Todolist App</div>
        </div>
        <div class="card card-body card-borderless">
            <div class="card-body">
                <InputTodo />
                <TodoList :todoList="todoList" />
            </div>
        </div>
    </div>
</template>

<script>
    import InputTodo from './components/InputTodo.vue';
    import TodoList from './components/TodoList.vue';
    
    let ts = new Date().getTime()

    export default {
        name: 'App',
        components: {InputTodo, TodoList},  // 지역 컴포넌트로 등록
        created() {  // 생명주기 메서드
            this.emitter.on('add-todo', this.addTodo)
            this.emitter.on('delete-todo', this.deleteTodo)
            this.emitter.on('toggle-completed', this.toggleCompleted)
        },
        data() {
            return {  // 데이터 정의
                todoList: [
                    {id: ts, todo: '자전거 타기', completed: false},
                    {id: ts+1, todo: '딸과 공원 산책', completed: true},
                    {id: ts+2, todo: '일요일 애견 카페', completed: false},
                    {id: ts+3, todo: 'Vue 원고 집필', completed: false},
                ]
            }
        }, 
        methods: {  // 메서드 정의
            addTodo(todo) {
                if(todo.length >= 2){
                    this.todoList.push({id: new Date().getTime(),
                        todo: todo, completed: false})
                }
            },
            deleteTodo(id) {
                let index = this.todoList.findIndex(item => id === item.id)
                this.todoList.splice(index, 1)
            },
            toggleCompleted(id) {
                let index = this.todoList.findIndex(item => id === item.id)
                this.todoList[index].completed = !this.todoList[index].completed
            }
        }
    }
</script>
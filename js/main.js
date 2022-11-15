const { createApp } = Vue

createApp({
    data() {
      return {
        newTodo:"",
        todoList:[
            {
                text:"prova",
                done: false
            },
        ],
      }
    },
    methods:{
        addTask(){
            if (!(this.newTodo==='')) {
                this.todoList.push({text:`${this.newTodo}`, done:false})
                this.newTodo=''
            }
        }
    }
  }).mount('#app')

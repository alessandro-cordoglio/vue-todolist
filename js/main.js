const { createApp } = Vue

createApp({
    data() {
      return {
        newTodo:"",
        todoList:[
            {
                text:"prova",
                done: true
            },
        ]
      }
    },
    methods:{
        addTask(){
            this.todoList.push({text:`${this.newTodo}`, done:false})
        }
    }
  }).mount('#app')

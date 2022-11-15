const { createApp } = Vue

createApp({
    data() {
      return {
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
            this.push(todo.text)
        }
    }
  }).mount('#app')

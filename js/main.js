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
        ],
      }
    },
    methods:{
        addTask(){
            if (!(this.newTodo==='')) {
                this.todoList.push({text:`${this.newTodo}`, done:false})
                this.newTodo=''
            }
        },
        removeTask(i){
            this.todoList.splice(i,1)
        },
        taskDone(todo){
           if (todo.done==true) {
            todo.done=false
           }else{
            todo.done=true
           }
        } 
    }
  }).mount('#app')

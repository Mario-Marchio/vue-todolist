console.log(`vue ok`);
const { createApp } = Vue;

const app = createApp({
    data() {
        return{
            newTask: ``,
            tasks: [
                {text: `comprare il latte`, done: false, },
                {text: `comprare il pane`, done: false,},
                {text: `comprare il miele`, done: false, },
                {text: `comprare il cocco`, done:false, }
            ],
        }
    },
    methods:{
        deleteTask(targetedIndex){
            this.tasks.splice(targetedIndex, 1);
        },
        addTask(){
            const newTask ={text:this.newTask, done:false};
            this.tasks.push(newTask);
            this.newTask= ``,
            this.$refs.addInput.focus();
        }
    }
 });

app.mount(`#root`);
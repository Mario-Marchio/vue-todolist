console.log(`vue ok`);
const { createApp } = Vue;

const app = createApp({
    data: {
        tasks: [
            {text: `comprare il latte`, done:false, },
            {text: `comprare il pane`, done:false,},
            {text: `comprare il miele`, done:false, },
            {text: `comprare il cocco`, done:false, }
        ],
    },
 });

app.mount(`#root`);
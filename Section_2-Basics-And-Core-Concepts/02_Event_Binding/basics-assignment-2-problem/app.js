const app = Vue.createApp({
    data() {
        return {
            outPut: "",
            enterValue: ""
        }
    },
    methods: {
        onAlert(){
            alert("Hello there!")
        },
        setOutPut(event){
            this.outPut = event.target.value;
        },
        setEnterValue(event){
            this.enterValue = event.target.value;
        }
    },
}).mount("#assignment")
const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      isShow: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleList() {
        this.isShow = !this.isShow;
    }
  },
}).mount("#assignment");

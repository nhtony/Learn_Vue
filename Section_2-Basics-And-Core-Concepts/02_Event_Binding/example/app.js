const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
  // Use to output value with dependencies
  computed: {
    fullname() {
      console.log("Running...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Hao";
    },
  },
  // Not used directly in template, allows to run any code in reaction to some changed data
  watch: {
    counter(value, oldValue) {
      console.log("value", value);
      console.log("oldValue", oldValue);
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
});

app.mount("#events");

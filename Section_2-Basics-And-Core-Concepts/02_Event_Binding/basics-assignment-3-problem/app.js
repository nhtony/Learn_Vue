const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(val) {
      this.number = this.number + val;
    },
  },
  computed: {
    text() {
      if (this.number > 37) {
        return "Too much!";
      } else {
        return "Not there yet";
      }
    },
  },
  watch: {
    number() {
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
}).mount("#assignment");

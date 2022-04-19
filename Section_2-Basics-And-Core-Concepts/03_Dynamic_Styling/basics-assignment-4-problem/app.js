const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      isShow: true,
      background: "",
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
}).mount("#assignment");

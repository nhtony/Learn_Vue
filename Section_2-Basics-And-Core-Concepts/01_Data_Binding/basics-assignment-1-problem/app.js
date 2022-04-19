const app = Vue.createApp({
  data() {
    return {
      age: 23,
      name: "Hao",
      imageUrl:
        "https://i.picsum.photos/id/716/200/200.jpg?hmac=IF3XZCw6rDCs7xOWawb1RJaXLQ6ajQuqxQcbwZM1rbE",
    };
  },
  methods: {
    randomNumber() {
      let y = Math.random();
      if (y < 0.5) return 0;
      else return 1;
    },
    changeName(event) {
      this.name = event.target.value;
    }
  },
}).mount("#assignment");

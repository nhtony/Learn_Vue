const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enterdGoalValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterdGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");

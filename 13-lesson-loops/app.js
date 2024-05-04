const { createApp } = Vue;
createApp({
  data() {
    return {
      karakterler: ["burak", "zafer", "özcan"],
      ozellikler: [
        {
          name: "burak",
          age: 23,
        },
        {
          name: "zafer",
          age: 24,
        },
        {
          name: "özcan",
          age: 25,
        },
      ],
    };
  },
  methods: {},
  computed: {},
}).mount("#app");

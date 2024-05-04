const { createApp } = Vue;
createApp({
  data() {
    return {
      name: "burak",
      job: "front-end developer",
      website: "https://www.burakzaferozcan.com",
      websiteTag:
        "<a href='https://www.burakzaferozcan.com'>bu da html tag eklenerek benim sitem</a>",
    };
  },
  methods: {},
}).mount("#app");

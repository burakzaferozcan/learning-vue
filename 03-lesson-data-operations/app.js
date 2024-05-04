const { createApp } = Vue;
createApp({
  // instance
  data() {
    return {
      name: "Burak",
      job: "Front-end Developer",
      age: 23,
      giyim: {
        ceket: true,
        pantolon: true,
        kazak: true,
        elbise: true,
      },
      yetenekler: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vue",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    };
  },
  methods: {},
  // instance
}).mount("#ilk-uygulama");

<template>
  <h1>slotlar</h1>
  <altBilesen>
    <template #baslik>
      <h2>bu alt bileşene gönderilecek başlıktır</h2>
    </template>
    <template #icerik>
      <p>bu alt bileşene gönderilecek içeriktir</p>
    </template>
    <template #baslik2>
      <h2>{{ title }}</h2>
    </template>
    <template #icerik2>
      <p>{{ desc }}</p>
    </template>
  </altBilesen>
</template>

<script>
import altBilesen from "./components/alt-bilesen.vue";
export default {
  components: {
    altBilesen,
  },
  data() {
    return {
      title: "bu alt bileşene gönderilecek başlıktır2",
      desc: "bu alt bileşene gönderilecek içeriktir2",
    };
  },
};
</script>

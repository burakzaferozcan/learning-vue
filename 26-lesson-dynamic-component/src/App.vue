<template>
  <!-- keep alive silinmemesini sağlar -->
  <keep-alive>
    <component v-bind:is="component"></component>
  </keep-alive>
  <button v-on:click="component = 'formOne'">form 1'i göster</button>
  <button v-on:click="component = 'formTwo'">form 2'yi göster</button>
  <button v-on:click="component = ''">formları kapat</button>
</template>

<script>
import formOne from "./components/form-one.vue";
import formTwo from "./components/form-two.vue";

export default {
  components: {
    formOne,
    formTwo,
  },
  data() {
    return {
      component: "",
    };
  },
};
</script>
<style scoped>
:deep(button) {
  height: 35px;
  border: 1px solid #e2e2e2;
  padding: 0 15px;
}
:global(h3) {
  color: red;
}
</style>
<style module>
.blue {
  color: blue;
}
</style>
<style module="xbileseni">
.pink {
  color: purple;
}
</style>

<template>
  <base-nav></base-nav>
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    BaseNav: Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

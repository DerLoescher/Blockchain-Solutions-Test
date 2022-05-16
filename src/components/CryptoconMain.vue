<template>
  <div class="cryptocon_wrapper">
    <CryptoconHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import CryptoconHeader from "./CryptoconHeader.vue";

export default {
  name: "cryptoconMain",
  components: {
    CryptoconHeader,
  },
  mounted() {
    this.$store.dispatch("getCurrencyRatios");
  },
};
</script>

<style scoped>
.cryptocon_wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
p {
  margin: 0;
}
</style>
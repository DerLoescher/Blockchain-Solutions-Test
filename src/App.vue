<template>
  <div class="app">
    <CryptoconMain />
  </div>
</template>

<script>
import CryptoconMain from "./components/CryptoconMain";

export default {
  name: "App",

  components: {
    CryptoconMain,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
body {
  height: 100vh;
}
#app {
  height: 100%;
  width: 100%;
}
.app {
  height: 100%;
  width: 100%;
}
</style>

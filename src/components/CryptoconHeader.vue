<template>
  <header class="header_wrapper">
    <div class="logo_wrapper">
      <img src="../assets/logo.png" alt="" class="logo_pic" />
    </div>
    <div class="app_name">crypto converter</div>
    <NavigationBar />
  </header>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";

export default {
  name: "CryptoconHeader",
  components: {
    NavigationBar,
  },
};
</script>

<style scoped>
.header_wrapper {
  background-color: #fff1d5;
  width: 100%;
  height: 9%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.logo_wrapper {
  width: 12%;
}
.logo_pic {
  max-width: 50px;
  max-height: 50px;
}
.header_link {
  text-decoration: none;
  color: black;
}
.app_name {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
@media screen and (max-width: 650px) {
  .app_name {
    font-size: 22px;
  }
  .logo_wrapper {
    width: 150px;
  }
}
@media screen and (max-width: 1200px) {
  .app_name {
    font-size: 22px;
  }
  .logo_wrapper {
    width: 23%;
  }
}
</style>

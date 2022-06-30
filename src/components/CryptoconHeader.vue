<template>
  <header class="header_wrapper">
    <div class="nav_links">
      <router-link to="/converter"
        ><div class="logo_wrapper">
          <img src="../assets/logo.png" alt="" class="logo_pic" /></div
      ></router-link>
      <NavigationBar class="nav_bar" />
    </div>

    <h2 class="page_name">{{ pageName }}</h2>
  </header>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";

export default {
  name: "CryptoconHeader",
  components: {
    NavigationBar,
  },
  computed: {
    pageName() {
      const name = `${this.$route.name}`;
      return name.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.header_wrapper {
  background-color: $secondary-color;
  width: 100%;
  height: 9%;
}
.nav_links {
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
.page_name {
  font-size: 30px;
  top: 0;
  margin-top: 10px;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
}
@media screen and (max-width: 1200px) {
  .app_name {
    font-size: 22px;
  }
  .logo_wrapper {
    width: 23%;
  }
}
@media screen and (max-width: 650px) {
  .app_name {
    font-size: 22px;
  }
  .logo_wrapper {
    width: 150px;
  }
  .nav_links {
    padding-left: 1%;
    padding-right: 1%;
  }
  .page_name {
    font-size: 20px;
  }
}
@media screen and (max-width: 215px) {
  .logo_wrapper {
    display: none;
  }
  .nav_links {
    justify-content: flex-start;
    align-items: flex-end;
  }
  .page_name {
    font-size: 15px;
  }
}
</style>

<template>
  <nav>
    <ul class="nav_links">
      <router-link class="link" to="/converter"><li>Converter</li></router-link>
      <router-link class="link" to="/wallet"><li>Wallet</li></router-link>
    </ul>
  </nav>
</template>

<style lang='scss' scoped>
.nav_links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  color: black;
  &:hover {
    opacity: 50%;
    text-decoration: underline;
  }
  &:active {
    color: gray;
  }
  li {
    height: 20%;
    font-family: "Baloo 2";
    font-weight: 500;
  }
}
@media screen and (max-width: 800px) {
  .nav_links {
    flex-direction: column;
  }
}
@media screen and (max-width: 450px) {
  .nav_links {
    width: 100%;
  }
  .link {
    li {
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 215px) {
  .nav_links {
    flex-direction: row;
  }
  .link:first-child {
    margin-right: 38%;
  }
}
</style>
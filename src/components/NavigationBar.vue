<template>
  <nav>
    <ul class="nav_links">
      <router-link class="link" to="/"><li>Converter</li></router-link>
      <router-link class="link" to="/wallet"><li>Wallet</li></router-link>
    </ul>
  </nav>
</template>

<style scoped>
.nav_links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
@media screen and (max-width: 800px) {
  .nav_links {
    flex-direction: column;
  }
}
@media screen and (max-width: 450px) {
  .nav_links {
    width: 100px;
  }
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  color: black;
}
.link:hover {
  opacity: 50%;
}
.link:active {
  font-size: 17px;
}
li {
  height: 20%;
}
</style>
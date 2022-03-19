<template>
  <NavbarComponent></NavbarComponent>
  <router-view></router-view>
</template>

<script>
import NavbarComponent from "@/components/header/NavbarComponent";

export default {
  name: 'App',
  components: {
    NavbarComponent,
  }
}
</script>

<style>
#app {
  /*font-family: 'Montserrat', sans-serif;*/
  /*font-family: 'Titillium Web', sans-serif;*/
  margin: 0;
  padding: 0;
}

</style>

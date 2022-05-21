<template>

  <NavbarComponent></NavbarComponent>
  <NavbarComponentNonAuthorized v-show="false"></NavbarComponentNonAuthorized>
  <router-view></router-view>
</template>

<script>
import NavbarComponent from "@/components/header/NavbarComponentAuthorized";
import NavbarComponentNonAuthorized from "@/components/header/NavbarComponentNonAuthorized";

export default {
  name: 'App',
  components: {
    NavbarComponent,
    NavbarComponentNonAuthorized
  },
  data() {
    return {
      token: localStorage.getItem('authToken')
    }
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
.multiselect-tags-search {
  background: #D79C9C;
}

</style>

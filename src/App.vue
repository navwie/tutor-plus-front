<template>
  <NavbarComponent></NavbarComponent>
  <CreateAnnouncement></CreateAnnouncement>
</template>

<script>
import CreateAnnouncement from './components/announcement/CreateAnnouncement.vue'
import NavbarComponent from "@/components/header/NavbarComponent";

export default {
  name: 'App',
  components: {
    NavbarComponent,
    CreateAnnouncement
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

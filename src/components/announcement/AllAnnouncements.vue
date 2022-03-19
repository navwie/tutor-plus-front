<template>
  <div class="text-center">
    <h2>Announcements</h2>
    <AnnouncementSingle
      v-for="announcement in this.announcements"
      :key="announcement.id"
      :title="announcement.title"
      :description="announcement.description"
      :duration="announcement.duration"
      :price="announcement.price"
      :schedule=Array(JSON.parse(announcement.schedule))
    />
  </div>
</template>

<script>
import {getAnnouncements} from "@/api";
import AnnouncementSingle from "@/components/announcement/AnnouncementSingle";

export default {
  name: "AllAnnouncements",
  components: {
    AnnouncementSingle
  },

  data() {
    return {
      announcements: []
    }
  },
  beforeMount() {
    if (localStorage.getItem('authToken') === null) {
      this.$router.push('/login');
      return;
    }
    getAnnouncements(localStorage.getItem('authToken'))
      .then(responce => {
        this.announcements = responce.data;
        console.log(responce.data);
      })
      .catch(responce => console.log(responce.data))
  }
}
</script>

<style scoped>

</style>
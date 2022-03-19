<template>
  <div class="d-flex flex-row  document col-3 mt-5 project justify-content-between">
    <div class="d-flex flex-row justify-content-between">
      <div class="flex-grow-1 flex-shrink-0">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>Длительность: {{ duration }}</p>
        <p>Стоимость: {{ price }}</p>
        <ul>
          <li v-for="item in this.schedule" :key="item.message">
            {{ Object.keys(item)[0]}}: {{ Object.values(item)[0] }}
          </li>
        </ul>
      </div>
      <!--      <div class="d-block align-items-end align-self-end remove">
              <a href="#" class="btn btn-outline-danger h-auto" @click="deleteDocument">Remove</a>
              <a :href="editUrlId" class="btn btn-outline-secondary">Edit</a>
            </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AnnouncementSingle",
  props: {
    title: String,
    description: String,
    price: String,
    duration: String,
    schedule: Array
  }
}
</script>

<style scoped>

</style>
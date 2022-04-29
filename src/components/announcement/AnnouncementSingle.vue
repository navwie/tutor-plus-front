<template>
  <div class="d-flex flex-row  document col-3 mt-5 project announcement main-div">
      <div class="icon-div">
        <img src="../../image/teacher.png" alt="teacher" class="icon">
        <h4>Викладач</h4>
      </div>
    <div class="d-flex flex-row justify-content-between text-div">
      <div class="flex-grow-1 flex-shrink-0">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>Тривалість: {{ duration }}</p>
        <p>Вартість: {{ price }}</p>
        <ul>
          <li v-for="item in this.schedule" :key="item.message">
            {{ Object.keys(item)[0]}}: {{ Object.values(item)[0] }}
          </li>
        </ul>
      </div>
    </div>
    <a class="buttons answer">Відгукнутися</a>
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
.announcement {
  background: #DBB1AF;
  border-radius: 14px;
  height: fit-content;
  width: 900px;
  padding-left: 29px;
  display: flex;
}
.answer {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
}
.icon {
  width: 125px;
  height: 125px;

  margin-top: 10px;
}
.icon-div {
  width: 25%;
  text-align: center;
}
.text-div {
  width: 60%;
  padding-left: 30px;
}
.main-div {
  padding-top: 20px;
}
</style>
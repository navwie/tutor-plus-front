<template>
  <div class="page">
    <div class="create-announcement">
      <div class=" d-flex  col-12  container justify-content-center align-content-center">
        <div class="form">
          <input type="hidden" name="_token">
          <h1 class="h3 mb-3 fw-normal ">Додати оголошення</h1>
          <div class="form-elements">
            <div class="form-group mt-4">
              <label for="title">Заголовок оголошення:</label>
              <input v-model="title" type="text" id="title" name="title"
                     placeholder="Введіть заголовок">
            </div>
            <div class="form-group mt-4">
              <label for="price">Введіть бажану ціну за годину:</label>
              <input v-model="price" type="number" id="price" name="price"
                     placeholder="Ціна ">
            </div>
            <div class="form-group mt-4">
              <label for="duration">Тривалість заннятя в годинах:</label>
              <input v-model="duration" type="number" id="duration" name="duration"
                     placeholder="Тривалість заняття">
            </div>
            <div class="form-group mt-4">
            <textarea v-model="description" id="description" placeholder="Опишіть ваш рівень знань та досвід"
                      name="description">
            </textarea>
            </div>
            <h5>Дні та час комфортні для навчання:</h5>
            <div class="form-group mt-4">
              <div style="width: 700px;" id="schedule_container">
                <div class="form-group">
                  <select v-model="dayOfWeek">
                    <option disabled value="">Оберіть дні тижня</option>
                    <option>Понеділок</option>
                    <option>Вівторок</option>
                    <option>Середа</option>
                    <option>Четвер</option>
                    <option>П'ятниця</option>
                    <option>Субота</option>
                    <option>Неділя</option>
                  </select>
                  <input v-model="time" type="time" id="time" name="time" class="time-model"
                         min="06:00" max="24:00" required>
                  <a class="button" @click=this.addDayToSchedule>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor"
                         class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group  mt-4">
            <button class="btn btn-primary" @click=storeAnnouncement>Cтворити</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {storeAnnouncement} from "@/api";

export default {
  name: "CreateAnnouncement",
  data() {
    return {
      title: "",
      description: "",
      price: "",
      duration: "",
      dayOfWeek: "",
      time: ""
    }
  },
  methods: {
    storeAnnouncement() {
      storeAnnouncement({
        'title': this.title,
        'description': this.description,
        'price': this.price,
        'duration': this.duration,
        'schedule': JSON.stringify({[this.dayOfWeek]: this.time})
      }, localStorage.getItem('authToken'))
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            console.log(e)
          })
    },
    addDayToSchedule: function () {
      let schedule_container = document.getElementById('schedule_container');
      let picker = document.createElement('div');
      picker.classList.add("form-group");
      picker.innerHTML = '<select v-model="dayOfWeek"' +
          'style="border-radius: 20px;\n' +
          '  background-color: #fff;\n' +
          '  padding: 10px; ' +
          ' margin-bottom:20px;">\n' +
          '          <option disabled value="">Выберите день недели</option>\n' +
          '          <option>Понедельник</option>\n' +
          '          <option>Вторник</option>\n' +
          '          <option>Среда</option>\n' +
          '          <option>Четверг</option>\n' +
          '          <option>Пятница</option>\n' +
          '          <option>Субота</option>\n' +
          '          <option>Воскресенье</option>\n' +
          '        </select> ' +
          '<input v-model="time" type="time" id="time" name="time" class="time-model"\n' +
          '                       min="06:00" max="24:00" required style="width: 200px;' +
          'border:none; border-bottom:1px solid black; margin-left: 88px; font-size:18px;"> '

      //alert(picker);
      schedule_container.appendChild(picker);
    }
  },
  beforeMount() {
    // if (localStorage.getItem('authToken') === null) {
    //   this.$router.push('/login')
    // }
  }
}
</script>

<style scoped>
.create-announcement {
  font-family: 'Montserrat', sans-serif;
}

.form {
  margin: 80px auto;
  max-width: 800px;
  width:750px;
  border:1px solid rgba(220, 162, 159);
  background-color: rgb(224, 188, 186);
  padding: 40px 20px;
  border-radius: 10px;
  z-index: 32;
  position: relative;
  text-shadow: none;
  margin-bottom: 90px;
}

.form h5 {
  margin-top: 50px;
  margin-left: 140px;
}

.form h1 {
  margin-left: 170px;
  margin-bottom: 100px;
}

.form-group {
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
  justify-content: space-between;
}

.form-elements {
  margin-top: 50px;
}

.form-group input {
  border: none;
  font-size: 18px;
  border-bottom: 1px solid black;
}

textarea {
  width: 800px;
  height: 100px;
}

select {
  border-radius: 20px;
  background-color: #fff;
  padding: 10px;
}

.form-group .time-model {
  width: 200px;
}

.btn {
  margin-left: 260px;
  margin-top: 30px;
  width: 150px;
  border-radius: 30px;
  font-size: 22px;
}

.page {
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  z-index: -1;
  overflow-x: hidden;
  background: transparent url("../../image/image1.png") repeat;
  background-attachment: fixed !important;
}
</style>
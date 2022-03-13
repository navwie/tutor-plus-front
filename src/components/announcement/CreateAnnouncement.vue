<template>
  <div class="create-announcement">
    <div class=" d-flex  col-12  container justify-content-center align-content-center">
      <div class="form">
        <input type="hidden" name="_token">
        <h1 class="h3 mb-3 fw-normal ">Добавить объявление</h1>
        <div class="form-elements">
          <div class="form-group mt-4">
            <label for="title">Заголовок объявления:</label>
            <input v-model="title" type="text" id="title" name="title"
                   placeholder="Введите заголовок">
          </div>
          <div class="form-group mt-4">
            <label for="price">Введите желаемую цену за час:</label>
            <input v-model="price" type="number" id="price" name="price"
                   placeholder="Цена ">
          </div>
          <div class="form-group mt-4">
            <label for="duration">Длительность занятия в часах:</label>
            <input v-model="duration" type="number" id="duration" name="duration"
                   placeholder="Длительность занятия">
          </div>
          <div class="form-group mt-4">
            <textarea v-model="description" id="description" placeholder="Опишите ваш уровень знания и опыт"
                      name="description">
            </textarea>
          </div>
          <h5>Дни и время комфортное для обучения:</h5>
          <div class="form-group mt-4">
            <div style="width: 700px;" id="schedule_container">
              <div class="form-group">
                <select v-model="dayOfWeek">
                  <option disabled value="">Выберите день недели</option>
                  <option>Понедельник</option>
                  <option>Вторник</option>
                  <option>Среда</option>
                  <option>Четверг</option>
                  <option>Пятница</option>
                  <option>Субота</option>
                  <option>Воскресенье</option>
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
          <button class="btn btn-primary" @click=createAnnouncement>Cоздать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
    createAnnouncement() {
      axios.post(`http://0.0.0.0/api/announcements`, {
        'title': this.title,
        'description': this.description,
        'price': this.price,
        'duration': this.duration,
        'schedule': JSON.stringify({[this.dayOfWeek]: this.time})
      })
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
  }
}
</script>

<style scoped>
.create-announcement {
  font-family: 'Montserrat', sans-serif;
}

.form {
  margin-top: 50px;
  width: 700px;
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
</style>
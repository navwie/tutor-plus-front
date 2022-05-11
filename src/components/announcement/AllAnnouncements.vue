<template>
  <div class="page">
    <div class="flex-blocks">
      <div class="filters-block">
        <div class="search-block">
          <input type="text" placeholder="Search" class="search-input">
          <a class="search-button btn btn-outline-success">Пошук</a>
        </div>

        <h2>Ціна за годину</h2>
        <div class="slidecontainer">
          <input type="range" min="100" max="1500" value="750" class="slider" id="myRange" list="prices" name="price">
          <datalist id="prices">
            <option value="100">100 грн</option>
            <option value="1500">1500 грн</option>
          </datalist>
        </div>

        <h2>Ціль занять</h2>
        <div class="checkboxes-block">
          <div><input type="checkbox" id="zno" class="checkboxes-el">
            <label for="zno">Підготовка до ЗНО</label>
          </div>
          <div>
            <input type="checkbox" id="school-program" class="checkboxes-el">
            <label for="school-program">Шкільна програма</label>
          </div>
          <div>
            <input type="checkbox" id="international-exam" class="checkboxes-el">
            <label for="international-exam">Підготовка до міжнародних екзаменів</label>
          </div>
        </div>

        <h2>Предмети</h2>
        <div class="checkboxes-block">
          <div><input type="checkbox" id="ukr-lan-and-lit" class="checkboxes-el">
          <label for="ukr-lan-and-lit">Українська мова та література</label>
        </div>
          <div>
            <input type="checkbox" id="math" class="checkboxes-el">
            <label for="math">Математика</label>
          </div>
          <div>
            <input type="checkbox" id="english" class="checkboxes-el">
            <label for="english">Англійська мова</label>
          </div>
          <div><input type="checkbox" id="physics" class="checkboxes-el">
          <label for="physics">Фізика</label>
        </div>
          <div>
            <input type="checkbox" id="chemistry" class="checkboxes-el">
            <label for="chemistry">Хімія</label>
          </div>
          <div>
            <input type="checkbox" id="german" class="checkboxes-el">
            <label for="german">Німецька мова</label>
          </div>
          <div><input type="checkbox" id="french" class="checkboxes-el">
          <label for="french">Французська мова</label>
        </div>
          <div>
            <input type="checkbox" id="spanish" class="checkboxes-el">
            <label for="spanish">Іспанська мова</label>
          </div>
          <div>
            <input type="checkbox" id="history-of-ukraine" class="checkboxes-el">
            <label for="history-of-ukraine">Історія України</label>
          </div>
        </div>
        <h2>Кого шукаю</h2>
        <div class="radio-buttons">
          <div>
            <input type="radio" id="teacher" class="checkboxes-el" name="who-to-search">
            <label for="teacher">Вчителя</label>
          </div>
          <div>
            <input type="radio" id="student" class="checkboxes-el" name="who-to-search">
            <label for="student">Студента</label>
          </div>
        </div>
        <a class="btn btn-outline-success use-filters-button">Застосувати фільтри</a>
    </div>
      <div class="announcements">

      </div>
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
      announcements: [
          {
          title: "Викладач з математики шукає студентів",
          description: "10 років досвіду роботи вчителем математики старших класів. Готую до ЗНО,",
          price: "250 грн",
          duration: "1,5 часа",
          schedule: JSON.stringify({["Понедельник"]: "18:00"})
        }
      ]
    }
  },
  beforeMount() {
    // if (localStorage.getItem('authToken') === null) {
    //   this.$router.push('/login');
    //   return;
    // }
    getAnnouncements()
      .then(response => {
        // this.announcements = response.data;
         console.log(response.data);
      })
      .catch(response => console.log(response.data))
   }
}
</script>

<style>
@import url("//db.onlinewebfonts.com/c/1a5c2d8bbd4e28d99a6efcbb9a5b378f?family=JejuMyeongjo");

.page {
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  z-index: -1;
  overflow-x: hidden;
  background: transparent url("../../image/image1.png") repeat;
  background-attachment: fixed !important;
  font-family: 'JejuMyeongjo',serif;
}
.filters-block {
  background: #FBE4E3;
  border-radius: 14px;
  padding: 17px 19px 14px 28px;
  margin-left: 14px;
}
.flex-blocks {
  display: flex;
  margin-top: 32px;
  justify-content: space-around;
}
.search-button {
  margin-left: 8px;
}
.buttons {
  border: 1px solid #2EA690;
  box-sizing: border-box;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* identical to box height */
  color: #34957E;
  text-decoration: none;
  padding: 3px 10px;
  height: fit-content;
}
.search-block {
  margin-bottom: 19px;
  display: flex;
}
h2 {
  font-family: 'JejuMyeongjo',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
}
.search-input {
  display: block;
  width: 250px;
  height: 27px;
  font-family: 'JejuMyeongjo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */
  color: #A9AFAE;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
.slidecontainer {
  margin-bottom: 28px;
  margin-top: 24px;
}
.checkboxes-el {
  margin-right: 10px;
}
.checkboxes-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;
}
.radio-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 22px;
}
.use-filters-button {
  display: block;
  margin: 0 auto;
  width: fit-content;
}
datalist {
  display: flex;
  justify-content: space-between;
}

</style>
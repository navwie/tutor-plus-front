<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light #eaafa9">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tutor Plus</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Головна</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Профіль</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/createAnnouncement">Додати оголошення</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Реєстрація</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Вхід</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/announcements">Оголошення</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Пошук</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

import {getUsers} from "@/api";

export default {
  name: "NavbarComponent",
  methods: {
    getUsers() {
     getUsers(this.$root.token)
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            console.log(e)
          })
    }
  }
}
</script>

<style scoped>
header {
  background-color: rgba(220, 162, 159, 0.91);
  font-weight: 400;
  font-family: 'Montserrat', sans-serif
}

.navbar-brand {
  font-size: 32px;
}

.nav-link {
  font-size: 22px;
}

.nav-link:hover {
  text-decoration: underline;
}

</style>
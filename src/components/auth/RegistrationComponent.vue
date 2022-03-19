<template>
  <div class="page">
    <div class="SignPage">
      <div class="d-flex col-12 form-signin container justify-content-center">
        <div>
          <h1 class="title text-center">Зарегистрироваться</h1>
          <div class="form-group mt-4">
            <label for="Name">
              Имя
            </label>
            <input v-model="name" type="text" :class="'form-control ' + formErrors.name" id="name" name="name"
                   placeholder="Введіть ім'я">
          </div>
          <div class="form-group mt-4">
            <label for="surname">Фамилия</label>
            <input v-model="surname" type="text" :class="'form-control ' + formErrors.surname" id="surname"
                   name="surname" placeholder="Введіть прізвище">
          </div>
          <div class="form-group mt-4">
            <label for="email">Почта</label>
            <input v-model="email" type="email" :class="'form-control ' + formErrors.email" id="email" name="email"
                   placeholder="name@example.com">
          </div>
          <div class="form-group mt-4">
            <label for="phone">Номер телефона</label>
            <input v-model="phone" type="phone" :class="'form-control ' + formErrors.phone" id="phone" name="phone"
                   placeholder="Введіть номер телефону">
          </div>
          <div class="form-group mt-4">
            <label for="password">Пароль</label>
            <input v-model="password" type="password" :class="'form-control ' + formErrors.password" id="password"
                   name="password" placeholder="Введіть пароль">
          </div>
          <div class="form-group mt-4">
            <label>Выберите кем вы являетесь:</label>
            <select name="role" id="role" class="form-select" v-model="role">
              <option value="tutor" selected>Учитель</option>
              <option value="student">Ученик</option>
            </select>
          </div>
          <div class="form-group text-center mt-4">
            <button @click=register class="btn btn-primary" type="submit" :disabled="active">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegistrationComponent",
  data: () => ({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    formErrors: {
      name: "is-invalid",
      surname: "is-invalid",
      email: "is-invalid",
      phone: "is-invalid",
      password: "is-invalid"
    },
    active: true
  }),
  methods: {
    register() {
      axios.post(`http://0.0.0.0/api/register`, {
        'name': this.name,
        'surname': this.surname,
        'email': this.email,
        'phone': this.phone,
        'password': this.password,
        'role': this.role,
      })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            console.log(e)
          })
    }
  },
  updated() {
    let errors = Object.values(this.formErrors);
    this.active = errors.includes("is-invalid")
  },
  watch: {
    name() {
      this.formErrors.name = "is-valid";
      if (this.name.length < 3 || this.name.length > 32) {
        this.formErrors.name = "is-invalid";
      }
    },
    surname() {
      this.formErrors.surname = "is-valid";
      if (this.surname.length < 4 || this.surname.length > 32) {
        this.formErrors.surname = "is-invalid";
      }
    },
    email() {
      this.formErrors.email = "is-valid";
      if (!(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
        this.formErrors.email = "is-invalid";
      }
    },
    phone() {
      this.formErrors.phone = "is-valid";
      if (!(/[+][0-9]{4,}/.test(this.phone))) {
        this.formErrors.phone = "is-invalid";
      }
    },
    password() {
      this.formErrors.password = "is-valid";
      if ((this.password.length < 5) || !(/[a-zA-Z0-9]/.test(this.password))) {
        this.formErrors.password = "is-invalid";
      }
    },
  },
}
</script>
<style>
html, body {
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Titillium+Web:ital,wght@0,400;0,600;0,700;1,600&display=swap');
  background-color: #faf0e6;
  height: 100vh;
  margin: 0;
  background-attachment: fixed;
}
</style>

<style scoped>
h3 {
  margin-top: 20px;
  letter-spacing: 3px;
  color: #000;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-style: italic;
}

.title {
  letter-spacing: 3px;
  margin-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
}

.SignPage {
  margin: 40px auto;
  max-width: 650px;
  padding: 40px 20px;
  border-radius: 40px;
  position: relative;
  text-shadow: none;
  margin-bottom: 90px;
}

.form-group {
  display: flex;
  justify-content: space-between;
}

.form-group label {
  color: #2C3531;
  top: 5px;
  letter-spacing: 3px;
  position: relative;
  right: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
}

.form-group button {
  position: relative;
  margin-left: 180px;
  width: 350px;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  letter-spacing: 3px;
  border-radius: 10px;
}

input {
  margin-bottom: 18px;
  width: 300px;
  position: relative;
  left: 20px;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
}

.form-select {
  position: relative;
  left: 20px;
  height: 51px;
  width: 400px;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
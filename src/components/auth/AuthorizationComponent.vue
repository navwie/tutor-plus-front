<template>
  <div class="page">
    <div class="SignPage">
      <div class="d-flex justify-content-center  signIn">
        <div>
          <h1 class="h3  fw-normal text-center">Вхід</h1>
          <div class="form-group mt-4">
            <label for="email">Електронна пошта</label>
            <input v-model="email" type="email" id="email" name="email"
                   placeholder="name@example.com">
          </div>
          <div class="form-group mt-4">
            <label for="password">Пароль</label>
            <input v-model="password" type="password" id="password"
                   name="password" placeholder="Пароль">
          </div>
          <div class="form-group text-center">
            <button @click=login class="btn btn-primary" type="submit" :disabled="active">Увійти</button>
          </div>
          <div class="form-group text-center">
            <a href="">Ще не зареєстровані?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from "@/api";

export default {
  name: "AuthorizationComponent",
  data: () => ({
    email: "",
    password: "",
    formErrors: {
      email: 'is-invalid',
      password: 'is-invalid'
    },
    active: 'true'
  }),
  updated() {
    let errors = Object.values(this.formErrors);
    this.active = errors.includes("is-invalid")
  },
  methods: {
    login() {
      login({
        'email': this.email,
        'password': this.password,
      })
          .then(response => {
            this.$root.user = response.data.user;
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('authTokenDate', new Date().toISOString());
          })
          .catch(e => {
            console.log(e)
          })
    }
  },
  watch: {
    email() {
      this.formErrors.email = "is-valid";
      if (!(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
        this.formErrors.email = "is-invalid";
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

<style scoped>
h1 {
  margin-top: 20px;
  margin-bottom: 40px;
  letter-spacing: 3px;
  color: #000;
  font-size: 38px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

.SignPage {
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

.form-group {
  display: flex;
  justify-content: space-between;
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

.form-group label {
  color: #2C3531;
  top: 5px;
  position: relative;
  letter-spacing: 3px;
  right: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
}

.form-group button {
  margin-top: 20px;
  position: relative;
  margin-left: 180px;
  width: 40%;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  border-radius: 10px;
}

.form-group a {
  margin-top: 20px;
  position: relative;
  margin-left: 150px;
  color: #000;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
}

input {
  margin-bottom: 18px;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  left: 20px;
  letter-spacing: 3px;
  border: 1px solid rgba(220, 162, 159, 0.91);
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
}
</style>
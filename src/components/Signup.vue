<template>
  <div class="signin">
    <h3>Sign Up</h3>
    <b-container>
      <b-row>
        <b-col sm="4"></b-col>
        <b-col sm="4">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-3"
              v-model="email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
            <b-form-input
              id="input-4"
              v-model="password"
              type="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
          <b-button variant="outline-primary" @click="signUp">Sign Up</b-button>
          <br />
          <br />
          <p>{{error.message}}</p>
          <router-link to="/signin">Already a user? Sign In</router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { firebaseApp } from "../firebaseApp";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => (this.error = error));
    }
  }
};
</script>


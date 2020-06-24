<template>
  <div class="signin">
    <h3>Sign In</h3>
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
              id="input-1"
              v-model="email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
            <b-form-input
              id="input-2"
              v-model="password"
              type="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
          <b-button variant="outline-primary" @click="signIn">Sign In</b-button>
          <br />
          <br />
          <p>{{error.message}}</p>

          <router-link to="/signup">Not a user? Sign Up</router-link>
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
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => (this.error = error));
    }
  }
};
</script>


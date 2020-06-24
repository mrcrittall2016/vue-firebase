<template>
  <div class>
    <h5>
      Add Event
      <b-form-checkbox id="check-form-show" v-model="showForm"></b-form-checkbox>
    </h5>
    <b-form @reset="onReset" v-if="showForm">
      <b-form-group id="addEvent-title" label="Title">
        <b-form-input
          id="input-title"
          v-model="event.title"
          type="text"
          required
          placeholder="Title"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="addEvent-description" label="Description">
        <b-form-input
          id="input-description"
          v-model="event.description"
          type="text"
          required
          placeholder="Description"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="addEvent-date" label="Date">
        <b-form-input id="input-date" v-model="event.date" type="date" required placeholder="Date"></b-form-input>
      </b-form-group>
      <b-form-group id="addEvent-location" label="Location">
        <b-form-input
          id="input-location"
          v-model="event.location"
          type="text"
          required
          placeholder="Location"
        ></b-form-input>
      </b-form-group>
      <b-button variant="outline-primary" @click="addEvent">Add Event</b-button>
      <br />
      <br />
    </b-form>
  </div>
</template>

<script>
import { eventsRef } from "../firebaseApp";

export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm: false
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    },
    onReset() {
      console.log("Form reset");
      // TODO : wipe all form contents once event is submitted
    }
  }
};
</script>

<style>
</style>
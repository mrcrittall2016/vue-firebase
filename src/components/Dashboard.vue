<template>
  <div class="dashboard">
    <b-container>
      <b-row>
        <b-col sm="4"></b-col>
        <b-col sm="4">
          <h3>Events Dashboard</h3>
          <br />
          <AddEvent />
        </b-col>
        <b-col sm="2">
          <b-button id="sign-out" variant="outline-primary" @click="signOut">Sign Out</b-button>
        </b-col>
      </b-row>
      <b-row>
        <EventItem v-for="(event, index) in $store.state.events" :event="event" :key="index" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut"); // Can either do like this, or use mapActions
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    // While component is alive, listen for any live updates in firebase
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      //console.log(events);
      // Instead of just logging events in the console, let's save in the vuex store for later use
      this.$store.dispatch("addEvents", events);
    });
  }
};
</script>

<style>
</style>
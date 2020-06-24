<template>
  <b-col md="4">
    <b-card :title="event.title" tag="article" class="mb-2">
      <b-card-text>{{event.description}}</b-card-text>
      <b-list-group>
        <b-list-group-item>Location: {{event.location}}</b-list-group-item>
        <b-list-group-item>Date: {{event.date}}</b-list-group-item>
        <b-list-group-item>Email: {{event.email}}</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["event"]
};
</script>

<style>
</style>
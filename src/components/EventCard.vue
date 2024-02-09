<script>
export default {
  name: "EventCard",
  props: ["item"]
}
</script>

<template>
  <div class="container">
    <div class="row g-3">
      <div class="card col-4" v-for="event in this.store.eventlist">
        <h3 class="card-title">{{ event.name }}</h3>
        <h5>{{ event.date }}</h5>
        <h6 class="border">Tickets restanti: {{ event.available_tickets }}</h6>
      </div>
    </div>
  </div>
  <button class="btn btn-primary">
    <font-awesome-icon icon="fa-solid fa-home" class="me-1" />
    <span>Primary button</span>
  </button>
</template>
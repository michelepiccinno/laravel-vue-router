<script>
import { store } from "../store.js" //state management
import EventCard from "../components/EventCard.vue";

export default {
    name: "EventList",
    components: {
        EventCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Eventlist.vue</h1>
            <EventCard v-for="evento in store.eventList" :item="evento" />
        </div>
    </div>
</template>
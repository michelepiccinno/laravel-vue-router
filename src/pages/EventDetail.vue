<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
    name: "EventDetail",
    props: ["id"],
    data() {
        return {
            store,
            evento: null
        }
    },
    mounted() {
        console.log("Eventi: ", this.store.eventList);
        console.log('stampo id: ' + this.id)
        console.log("Evento dettaglio: " + JSON.stringify(this.store.eventList[this.id - 1]));
        console.log('contenuto dello store: ' + JSON.stringify(this.store))

        this.getEventDetail();
    },
    methods: {
        /* Per recuperare i dati del singolo evento possiamo prenderi dallo store che attualmente contiene tutta l'array di eventi (EventList).
        In alternativa facciamo come sotto:  rifacciamo una chiamata api passando this.id e otteniamo i dati del singolo evento.
        in questo modo abbiamo dei dati piu aggiornati perchè nel frattempo potrebbero essere cambiati (ovviamente non in questa semplice app ma in caso di app piu' complessa) */
        getEventDetail() {

            let url = this.store.apiUrl + this.store.apiEventEndpoint + this.id;
            console.log('stampo url: ' + url);

            axios.get(url).then(risultato => {
                if (risultato.status === 200 && risultato.data.success) {
                    console.log('risultato.data.payload: ' + risultato.data.payload);
                    this.evento = risultato.data.payload;
                } else {
                    //ToDo: distinguere il motivo dell'else.
                    //es. controllare statusCode, presenza e veridicità di data.success
                    console.error("Ops... qualcosa è andato storto");
                }
            }).catch(errore => {
                console.error(errore);
            });
        },
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Dettaglio evento {{ id }}</h1>
            <!-- <pre>{{ this.store.eventList[0] }}</pre> -->
            <p v-if="!evento" @click="toggle_condizione" class="loading_text">Attendere.................</p>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ evento?.name }}</h5>
                    <p class="card-text text-muted">{{ evento?.date }}</p>
                    <p class="card-text">Biglietti disponibili: {{ evento?.available_tickets }}</p>
                    <p class="card-text">Sei loggato come: {{ evento?.user ? evento?.user.name : "Utente sconosciuto" }}</p>
                    <span v-for="tag in evento?.tags" class="badge text-bg-warning m-1">{{ tag.name }}</span>
                </div>
                <router-link :to="{ name: 'events' }" class="btn btn-primary mb-1">
                    <span>Torna indietro</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loading_text {
    font-size: 5rem;
    color: yellow;
    background-color: blue;
}
</style>
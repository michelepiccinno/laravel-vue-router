<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import TheHeader from "./components/TheHeader.vue"
import EventCard from "./components/EventCard.vue"

export default {
	components: {
		TheHeader
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventList();

	},
	methods: {
		getEventList() {
			//facciamo chiamata api e stampiamo i dati in consolle (manca il controllo errori)
			let url = this.store.apiUrl + this.store.apiEventEndpoint;
			axios.get(url).then(risultato => {
				//console.log(risultato);
				console.log(risultato.data.results);
				this.store.eventlist = risultato.data.results;
			}).catch(errore => {
				console.error(errore);
			});
		}
	}
}

</script>

<template>
	<TheHeader></TheHeader>

	<main>

	<router-view></router-view>


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
	</main>

	<TheFooter></TheFooter>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>
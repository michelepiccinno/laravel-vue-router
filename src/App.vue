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
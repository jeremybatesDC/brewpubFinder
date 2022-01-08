<template>
  <div :class="$style.wrapper">
    <!-- yes, you can map state so you donT have to write store.state -->
		<!-- but I've been taught to believe that explicitly communicating where somethingS coming from is valuable, from a measureable developer time and $ perspective-->
		<p>My favorite brewpubs include {{$store.state.favoriteBrewery}}</p>

		<label>
			Search brewpub by city
			<input type="search" v-model.trim="city" autocomplete="address-level2" placeholder="City" @input="fetchBreweries">
		</label>
		<section aria-live="polite">
			<span v-if="city !== '' && breweries.length">
			<h3>Brewpubs</h3>
				<div v-for="brewery in brewpubs" :key="brewery.id">
				{{ brewery.name }}
				</div>
			</span>
			<span v-else>
				<img loading="lazy" encoding="async" width="100" height="100" alt="Homer Simpson freaking out over lack of beer"/>
			</span>
		</section>
		
</div>
</template>

<script>
export default {
  name: "BreweryList",
  data(){
    return {
			city: '',
      breweries: [],
    }
  },
	computed: {
		cityNoSpaces(){
			return this.city.replace(' ', '_');
		},
		brewpubs(){
			return this.breweries.filter(brewery => brewery.brewery_type === 'brewpub');
		},
	},
  methods: {
		async fetchBreweries() {
			const breweriesResponse = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${this.cityNoSpaces}`);
			this.breweries = await breweriesResponse.json();
		}
  },
  mounted() {
    this.fetchBreweries().then((breweries) => {
					console.log(breweries);
			}).then(() =>{
					this.$store.commit('setFavoriteBrewery','Duff Gardens');
			}).catch(error => {
			// /breweries  request failed
					console.log(error);
			// show funny pic i suupose 
			});
  },
};
</script>

<!-- module creates unique classname. Write in BEM. Get collision-free unique classNames for free -->
<style module>

.wrapper {
  color: #222;
	/* filter: invert(100%); */
}
</style>

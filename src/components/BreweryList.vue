<template>
  <div :class="$style.wrapper">
    <p>My favorite brewery is {{$store.state.favoriteBrewery}}</p>

    <div v-for="brewery in breweries" :key="brewery.id">
     {{ brewery.name }} : {{ brewery.brewery_type }}
  </div>
</div>
</template>

<script>
export default {
  name: "BreweryList",
  data(){
    return {
      breweries: null,
    }
  },
  methods: {
		async fetchBreweries() {
			const breweriesResponse = await fetch('https://api.openbrewerydb.org/breweries?by_city=philadelphia')
			const breweries = await breweriesResponse.json();
			return breweries;
		}
  },
  mounted() {
    this.fetchBreweries().then((breweries) => {
					this.breweries = breweries.filter(brewery => brewery.brewery_type === 'brewpub');
					//this.randomUser = randomUser.results[0];
			}).then(() =>{
					this.$store.commit('setFavoriteBrewery','Meowmix Brewery');
			}).catch(error => {
			// /breweries or /randomUser request failed
					console.log(error);
			// show funny pic i suupose 
			});
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>

.wrapper {
  color: rebeccapurple;
}
</style>

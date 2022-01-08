<template>
	<!-- in vue3, even though 1 root node still seems like a good practice, now you may have multiple root nodes-->
	
  <article :class="$style.wrapper">
    <!-- yes, you can map state so you donT have to write store.state -->
		<!-- but I've been taught to believe that explicitly communicating where somethingS coming from is valuable, from a measureable developer time and $ perspective-->
		<!-- trying to decide whether implementing this feature is a good idea -->
		<!-- <p :class="$style.p">My favorite brewpubs include {{$store.state.favoriteBrewery}}</p> -->
		
		<label :class="$style.label">
			<span :class="$style.labelText">Find brewpubs in your city</span>
			<input type="search" v-model.trim="city" autocomplete="address-level2" placeholder="City" @input="fetchBreweries">
		</label>
		<section aria-live="polite">
			<span v-if="city !== '' && brewpubs.length">
			<h3>Brewpubs</h3>
			<ul>
				<li class="result" v-for="brewery in brewpubs" :key="brewery.id">
					<span>{{ brewery.name }}</span>
				</li>
			</ul>
			
			</span>
			<span v-else>
				<figure>
					<img loading="lazy" encoding="async" width="240" height="240" alt="Homer Simpson freaking out over lack of beer" src="https://i1.sndcdn.com/artworks-000300317373-1mbyd0-t500x500.jpg"/>
					<figcaption>Homer says please find beer</figcaption>
				</figure>
			</span>
		</section>
		
</article>
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
};
</script>

<!-- module creates unique classname. Write in BEM. Get collision-free unique classNames for free -->
<style module>

h3 {
	padding-bottom: .5rem;
}

[type="search"]{
	padding: .25rem .5rem;
	width: 100%;
}

.wrapper {
	/* max-width: 18rem; */
	min-height: calc(100vh - var(--headerHeight));
	margin: 0 auto;
  color: #111;
	background: #fff;
	padding: 2rem;
}

.p {
	color: inherit;
}

.label {
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;
	align-items: flex-start;
}

.labelText {
	font-weight: bold;
}
</style>

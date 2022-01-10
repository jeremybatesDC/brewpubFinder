<template>	
  <article :class="$style.wrapper">
		<label :class="$style.label">
			<span :class="$style.labelText">Find brewpubs in your city</span>
			<input :class="$style.search" type="search" v-model.trim="data.city" autocomplete="address-level2" placeholder="City" @input.passive="callFetchBreweriesAndDoMoreStuff">
		</label>
		<section aria-live="polite">
			<!-- using v-show instead of v-if for performance reasons -->
			<span v-show="thereAreSomeBrewPubs">
				<h3 :class="$style.h3">Brewpubs</h3>
				<ul class="results__list">
					<li class="results__listItem" v-for="brewery in brewpubs" :key="brewery.id">
						<span>{{ brewery.name }}</span>
					</li>
				</ul>
			</span>
			<span v-show="!thereAreSomeBrewPubs">
				<figure>
					<img loading="lazy" encoding="async" width="240" height="240" alt="Homer Simpson freaking out over lack of beer" :src="data.imgSrc"/>
					<figcaption>Homer says please find beer</figcaption>
				</figure>
			</span>
		</section>	
	</article>
</template>

<script>

import { computed, reactive } from "vue";
export default {
  name: "BreweryList",
  setup(){
	const data = reactive({
		city: '',
		breweries: [],
		imgSrc:'https://i1.sndcdn.com/artworks-000300317373-1mbyd0-t500x500.jpg'
    })

	const cityNoSpaces = computed(() => {
		return data.city.replace(' ', '_');
	})

	const brewpubs = computed(() => {
		return data.breweries.filter(brewery => brewery.brewery_type === 'brewpub');
	})

	const thereAreSomeBrewPubs = computed(() =>{
		return brewpubs.value.length > 0 && data.city !== '';
	})

	async function fetchBreweries() {
		const breweriesResponse = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityNoSpaces.value}`);
		data.breweries = await breweriesResponse.json();
		return breweriesResponse;
	}
	async function callFetchBreweriesAndDoMoreStuff(){
		console.log('test');
		fetchBreweries().then((breweriesRes) => {
			// this console log is just for this demo
			// could chain whatever promise(s) here
			console.log(breweriesRes)
		}).catch(error => {
			console.log(error);
			data.imgSrc = 'https://cdn.quotesgram.com/img/82/68/690673749-homersimpsondoh.png';
			// show funny pic i suupose 
		});
	}
	return {data, cityNoSpaces, brewpubs, thereAreSomeBrewPubs, fetchBreweries, callFetchBreweriesAndDoMoreStuff}
	},	

};
</script>

<!-- module creates unique, collision-free classnames -->
<style module>

.h3 {
	padding-bottom: .5rem;
}

.search {
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

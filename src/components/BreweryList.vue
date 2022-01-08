<template>
  <div :class="$style.wrapper">
    <h2>This app is pretending you're logged in as {{randomUser.name.first}}</h2>
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
      randomUser: {
        name: {
          first: '',
        }
      }
    }
  },
  methods: {
    getData(){
      async function fetchStuff() {
        const [breweriesResponse, userResponse] = await Promise.all([
            fetch('https://api.openbrewerydb.org/breweries?by_city=philadelphia'),
            fetch('https://randomuser.me/api/?')
        ]);
            const breweries = await breweriesResponse.json();
            const randomUser = await userResponse.json();
            return [breweries, randomUser];
        }
        fetchStuff().then(([breweries, randomUser]) => {
            this.breweries = breweries;
            this.randomUser = randomUser.results[0];
        }).then(
        () =>{
            console.log('hey');
            this.$store.commit('setFavoriteBrewery','Meowmix Brewery');
        }
        ).catch(error => {
        // /breweries or /randomUser request failed
            console.log(error);
        // show funny pic i suupose 
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>

.wrapper {
  color: red;
}
</style>

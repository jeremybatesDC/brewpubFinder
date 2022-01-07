<template>
  <div :class="$style.wrapper">
    <h1>{{ msg }}</h1>
    <h2>If you were a random user, your name might be {{randomUser.name.first}}</h2>
    <div v-for="brewery in breweries" :key="brewery.id">
     {{ brewery.name }}
  </div>
</div>
</template>

<script>
export default {
  name: "BreweryList",
  props: {
    msg: String,
  },
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
            fetch('https://api.openbrewerydb.org/breweries?by_dist=38.8977,77.0365'),
            fetch('https://randomuser.me/api/?')
        ]
      );
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

# vueminiapp

------

## Notes

- I wrote a magical Cypress test here as a basic sanity check to see whether search results are being added to the page. Is this just testing the api you ask? I don't think so, but this api going down would indeed make the test fail. Team could decide if that's desireable or if that API should be monitored some other way and have the test use mock data

- Saving isDarkMode in store for a couple reasons. First, I wanted a straightforward way to show Vuex pattern. Second, I think important UI state belongs in the store, maybe in itS own module


------

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



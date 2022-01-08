# vueminiapp

------

## Notes from Jeremy

- Saving isDarkMode in store for a couple reasons. First, I wanted a straightforward way to show Vuex pattern. Second, I think important UI state belongs in the store (maybe in it's own module). Dark mode feature is imperfect, but hopefully works for the purposes of this test.

- I wrote a magical Cypress test [run it with `yarn test:e2e`] here as a basic sanity check to see whether search results are being added to the page. Is this just testing the api you ask? I don't think so, but this api going down would indeed make the test fail. Team could decide if that's desireable or if that API should be monitored some other way and have the test use mock data

- Re accessibility, inputs are inside labels for simplest screen reader association, semantic elements are used throughout, and the search results section has the aria-live attribute so screen readers will know that content is dynamic.

- Used Vue CLI for scaffolding.

- For a real product, I'd bang on the API less frequently/more conservatively than on each keystroke (could use the .lazy Vue modifier and keep user visually engaged with a super sexy spinner heh)

- I use scss but just wrote flat css here for this test. I threw in a CSS custom property just to show that I know and love them.

- I used Vue's CSS modules feature (more powerful than scoped). 

- I could keep coding and making this prettier, but hoping I've demonstrated the necessary core competencies.

- Please don't visit more than 12 brewpubs per day.

------


## Vue CLI Project setup
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





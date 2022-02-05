# React Giphy

**In this deliverable we will practice the following:**
* Sharing data through prop drilling
* Updating and lifting state
* Calling APIs w/ fetch

- *Before getting started:* Take a look at the [completed app here](https://react-giphy-app.herokuapp.com/).

## Part 1
In part 1, you will be creating an app that mirrors the app above, but before we integrate the Giphy API, we'll stub out the application skeleton and use placeholder JSON data to make mock API calls.

### App Structure
Build an app with the following component hierarchy: 
```
|--Home
-----SearchContainer
---------Search
---------Results
```

The components should do the following: 
- `Home`: Render header and visual layout + child `SearchContainer` component;
- `SearchContainer`: Render Search and Results child components; 
- `Search`: Render input tag for user to search for gifs. 
- `Results`: Represents the container for all result gifs.


### Data and Data Search:
Your app should take a user input and "query" the API.

We haven't actually connected the API yet, so instead use the following sample JS object to mockup your JSX.

<details><summary>Click for js object</summary>

```js
{
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
}
```

</details>

## Building the App
In building this app you will have to consider the following: 
* How to capture user input data in a form/input field in React. 
* Using `state` in React to keep tracking of changing data values. 
* Rendering data in child components through prop drilling. 
* "Lifting" state to belong to the most common ancestor component, `SearchContainer`

In the second part of our app we will update our search to query the Giphy API proper, not our static JS object. 

## Part 2

### Search the Giphy API

- With the API we're using, you will need to [register for an API key](https://developers.giphy.com/). The API key is free, and only takes a minute or two to setup.
- Browse through the [API documentation](https://developers.giphy.com/docs/api#quick-start-guide) to determine which endpoints are best suited for our use case, as well as how to use them.
- We're going to be searching the Giphy API based on a word or phrase to return a collection of results.
- Use `fetch` to make an HTTP request to the API search endpoint with the user's query.
- Pass the data to the `Results` component to be displayed.

## Hungry for more?

- What if instead of querying the Giphy API by clicking on the 'Submit' button, we could instead have the app query the API right as we type into the search bar?

- Lets get rid of Search button and call the external API whenever User enters a string to search. (Hint: you may have to make some changes in `onChange`).

- Once you have that working, now notice that the your app is now querying the API literally EVERY time you type, making many many more API requests than you may want to.

- Look into the terms "Trottle" and "Debounce". How might we limit the number of API requests we make, such that we only query the API once the user is finished typing?


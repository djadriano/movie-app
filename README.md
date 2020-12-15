# Movie App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Basic React application that shows information about a TV Show and your episodes.

The app retrieve the data from TV Maze API (http://www.tvmaze.com/api)

## How to set a TV Show

By default the `APP` it's using the "Powerpuff Girls" as a TV Show, but you can use any other ID from (http://www.tvmaze.com/shows).
Just set the new id in `src/utils/constants.js`

```js
export const SHOW_ID = 6771; // Powerpuff Girls ID
```

## Stack
- React
- Sass
- Eslint/Prettier
- Husky/lint-staged
- Commitizen
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
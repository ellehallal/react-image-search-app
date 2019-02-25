# Image Search App - Imagy

## What is Imagy?
- A web application, created using React, which allows the user to enter a query to search the Unsplash API for images.

## Preview

coming soon

## Features:
- The user can enter a query and view up to 30 images matching the query
- The user can download any of the images displayed


## Install

Note: You can download node and npm from [here](https://www.npmjs.com/get-npm), if not already installed.

```
git clone https://github.com/itsellej/react-image-search-app.git 
cd react-image-search-app
```

You'll need an API key from [Unsplash](https://unsplash.com/developers). Create an `.env` file in the root directory and add your key to it, e.g.: 
```
REACT_APP_ACCESS_KEY=39880032123APIKEYetc
```

```
npm install
npm start
```

Navigate to `http://localhost:3000` in your browser.

## Testing

[Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) are used for testing. 

Note: mocks are in place for functions which initiate a request to the Unsplash API.

#### To run tests:

Type `npm t` in the terminal.

## To Do
- Deploy to Heroku
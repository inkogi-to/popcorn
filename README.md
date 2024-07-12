# Movie Search App

A React application that allows users to search for movies, view movie details, and manage a list of watched movies. The app fetches data from the OMDB API.

## Features

- Search for movies using the OMDB API.
- Display a list of search results.
- View detailed information about a selected movie.
- Add movies to a "watched" list.
- Remove movies from the "watched" list.
- Show summary information about watched movies.

## Components

- **App**: The main component that manages the state and renders the child components.
- **NavBar**: Contains the search bar and the number of results.
- **Search**: Allows users to input search queries.
- **NumResults**: Displays the number of movies found.
- **Main**: Layout component for displaying content.
- **MovieList**: Renders a list of movie results.
- **MovieDetails**: Shows detailed information about a selected movie.
- **WatchedSummary**: Displays summary information about watched movies.
- **WatchedMoviesList**: Lists watched movies with delete functionality.
- **Box**: Container component for layout purposes.
- **Loader**: Shows a loading spinner during API calls.
- **ErrorMessage**: Displays error messages when API calls fail.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.

## API Key

This app uses the OMDB API to fetch movie data. You need to obtain an API key from [OMDB API](http://www.omdbapi.com/apikey.aspx) and replace the `KEY` variable in the `App` component with your API key.

```javascript
const KEY = "your_api_key_here";
```


# R5 Movies

R5 Movies is a movie and TV show discovery platform, similar to IMDb. It provides detailed information about movies, TV shows, and celebrities. The app also highlights trending and popular content, offering an easy way for users to explore what’s hot in entertainment.



## Features
- Browse details about movies, TV shows, and actors. 
- View trending and popular movies/TV shows.
- Watch trailers for movies and TV shows.
- Get personalized recommendations based on your preferences.
- Stay updated with the latest in entertainment.

## API

# Any additional information goes here
R5 Movies utilizes an external API to fetch movie, TV, and person data. Below are some of the key API functionalities:

- Fetch movie and TV details
- Get trending and popular movies/TV shows
- Retrieve actor and celebrity information
- Watch trailers via embedded YouTube links
- Get recommendations based on movies or TV shows
For more information, refer to the documentation of the API used 
https://www.themoviedb.org .
## API Reference

#### Get all 

```http
  GET https://api.themoviedb.org/3/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get 

```http
  GET https://api.themoviedb.org/3/${media_type}/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  |



## Dependencies

- React.js
- Vercel for hosting
- External API (e.g., TMDb API)

## License
This project is licensed under the MIT License.

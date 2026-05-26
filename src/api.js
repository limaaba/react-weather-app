export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};
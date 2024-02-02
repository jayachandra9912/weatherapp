export const GeoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ca127cdd39msh9fe83beada93a20p10315ajsn7466126c5cf0',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }

};
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/'

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
export const WEATHER_API_KEY = '24e1300d298e9713ac5c337ad944a5d5'



try {
    const response = await fetch(GEO_API_URL, GeoApiOptions);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
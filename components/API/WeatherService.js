import axios from "axios";

const OPENWEATHERMAP_API_KEY = 'YOUR_OWN_API';

const weatherService = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    headers: {
        'Content-Type' : 'application/json',
    },
});

export const getWeatherData = async (city) => {
    try{
        const response = await weatherService.get('/weather', {
            params: {
                q: city,
                appid: OPENWEATHERMAP_API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    }catch(error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

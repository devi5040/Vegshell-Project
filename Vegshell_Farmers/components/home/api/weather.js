import axios from 'axios';

const apiKey = '9baa062a7d294d54892151144240103';

const forecastEndPoint =
  params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no
`;

const apiCall = async endpoint => {
  const options = {
    method: 'GET',
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    console.log('====================================');
    console.log(response.data.forecast);
    console.log('====================================');
    return response.data;
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    return null;
  }
};

export const fetchWeatherForecast = params => {
  return apiCall(forecastEndPoint(params));
};

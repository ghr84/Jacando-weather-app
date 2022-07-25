import { useEffect, useState } from 'react';
import axios from 'axios';

// Interface

import { WeatherApiConfig } from './types/WeatherApiConfig';
import { WeatherApiForecastData } from './types/WeatherApiForecastData';
import { ForecastWeatherData } from './types/ForecastWeatherData';
import { CurrentWeatherData } from './types/CurrentWeatherData';

// Hooks

import {
	formatMinMaxTemp,
	truncateNumber,
	addCelcius,
	addDegree,
} from '../shared/utils/FormatData';

// import jsonApiData from '../../../assets/weatherData.json';

export default function useWeatherApiData() {
	// ! Api-key is still visible in bundle.js that is served in the browser.
	// ! Create a small back-end?

	const [isLoading, setIsLoading] = useState(true);
	const [currentWeatherData, setCurrentWeatherData] =
		useState<CurrentWeatherData>();
	const [forecastWeatherData, setForecastWeatherData] =
		useState<ForecastWeatherData[]>();

	const fetchData = async () => {
		try {
			const config: WeatherApiConfig = {
				lat: 43.173134,
				lon: 16.446329,
				lang: 'sp, es',
				exclude: 'minutely,hourly,alerts',
				getUrl: function () {
					return `https://api.openweathermap.org/data/2.5/onecall?lat=${config.lat}&lon=${config.lon}&units=metric&exclude=${config.exclude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
				},
			};
			const res = await axios.get(config.getUrl());
			// Get the current{} and the daily[]
			const { current, daily } = res.data;

			// * current
			// Get the weather[] from the current {}.
			const { weather } = current;
			// Get the {} from the weather[]
			const [currentWeatherDesc] = weather;

			// * daily
			// Remove the first object from the daily[],
			// since we just need the forecast for the rest of the week.
			const [, ...upComingWeek] = daily;

			// * Build objects with the data needed for the UI.
			const currentWeatherData = {
				temp: addCelcius(truncateNumber(current.temp)),
				icon: currentWeatherDesc.icon,
			};
			const forecastWeatherData = upComingWeek.map(
				({ dt, temp, weather }: WeatherApiForecastData) => {
					const [forecastWeatherDesc] = weather;
					return {
						timestamp: dt,
						min_max_temp: formatMinMaxTemp(
							addDegree(truncateNumber(temp.min)),
							addDegree(truncateNumber(temp.max))
						),
						icon: forecastWeatherDesc.icon,
					};
				}
			);
			setCurrentWeatherData(currentWeatherData);
			setForecastWeatherData(forecastWeatherData);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return { currentWeatherData, forecastWeatherData, isLoading };
}

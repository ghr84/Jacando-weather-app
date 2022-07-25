export interface WeatherApiForecastData {
	dt: number;
	temp: {
		min: number;
		max: number;
	};
	weather: {
		icon: any;
		description: string;
	}[];
}

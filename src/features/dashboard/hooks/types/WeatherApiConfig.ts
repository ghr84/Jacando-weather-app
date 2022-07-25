export interface WeatherApiConfig {
	lat: number;
	lon: number;
	lang: string;
	exclude: string;
	getUrl: () => string;
}

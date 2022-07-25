export function formatMinMaxTemp(minTemp: string, maxTemp: string) {
	return minTemp + '-' + maxTemp;
}
export function truncateNumber(temp: number) {
	return Math.trunc(temp);
}
export function addCelcius(temp: number) {
	return temp + '°C';
}
export function addDegree(temp: number) {
	return temp + '°';
}

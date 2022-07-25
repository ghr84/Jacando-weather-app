// Comps

import CurrentWeatherComp from './components/current-weather/index';
import ForecastComp from './components/forecast/index';

// Layout

import Layout from './components/layout/Layout';

export default function Dashboard() {
	return (
		<>
			<Layout>
				<CurrentWeatherComp />
				<ForecastComp />
			</Layout>
		</>
	);
}

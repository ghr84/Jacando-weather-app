// Styles

import './index.scss';

// Comps

import Header from './components/header/Header';
import GraphComp from './components/graph-comp/index';
import Forecast from './components/weekly-forecast-comp/WeeklyForecast';
import ZoneControls from './components/zone-controls';

// Hooks

import useGetWindowSize from '../../hooks/useGetWindowSize';

const ForecastComp = () => {
	const { dimensions } = useGetWindowSize();
	return (
		<article
			id='forecast-component'
			className={dimensions.width < 890 ? 'forecast-centered' : ''}
		>
			<div>
				<Header />
				<GraphComp />
				<Forecast />
			</div>
			<ZoneControls />
		</article>
	);
};

export default ForecastComp;

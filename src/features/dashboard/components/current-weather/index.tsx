// Styles

import './index.scss';

// Comps

import DateTime from './components/date-time/DateTime';
import Header from './components/header/Header';
import TempLocation from './components/temp-location/TempLocation';
import LocationControl from './components/location-controls/LocationControls';

// Hooks

import useGetWindowSize from '../../hooks/useGetWindowSize';

const CurrentWeatherComp = () => {
	const { dimensions } = useGetWindowSize();

	return (
		<div
			className={
				dimensions.width < 890 ? 'hidden' : 'current-weather-container'
			}
		>
			<Header />
			<div className='widget-container'>
				<TempLocation />
				<DateTime />
				<LocationControl />
			</div>
		</div>
	);
};

export default CurrentWeatherComp;

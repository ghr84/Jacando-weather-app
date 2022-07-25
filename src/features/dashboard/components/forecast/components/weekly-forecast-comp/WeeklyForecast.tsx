import './WeeklyForecast.scss';

// Comps

import Icon from '../../../../shared/components/icon/Icon';

// Hooks

import useWeatherApiData from '../../../../hooks/useWeatherApiData';
import { getWeekDay } from '../../../../shared/utils/HandleDateTime';

const Forecast = () => {
	const { forecastWeatherData } = useWeatherApiData();
	return (
		<article id='weekly-forecast-container'>
			{forecastWeatherData?.map((singleForecast, i) => {
				return (
					<div className='forecast-item' key={i}>
						{getWeekDay(singleForecast.timestamp)}
						<Icon iconName={singleForecast.icon} iconClass='icon-sm' />
						<span className='body-text-small min-max-temp'>
							{singleForecast.min_max_temp}
						</span>
					</div>
				);
			})}
		</article>
	);
};

export default Forecast;

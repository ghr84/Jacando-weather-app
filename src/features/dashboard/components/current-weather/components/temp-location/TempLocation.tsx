// Styles

import './TempLocation.scss';

// Comps

import Icon from '../../../../shared/components/icon/Icon';

// Hooks

import useWeatherApiData from '../../../../hooks/useWeatherApiData';

// Types

const TempLocation = () => {
	const { currentWeatherData, isLoading } = useWeatherApiData();
	return (
		<article id='temp-location-component'>
			{isLoading ? (
				<div className='skeleton-container'>
					<div className='loading-skeleton'></div>
					<div className='loading-skeleton'></div>
				</div>
			) : (
				<div id='icon-temp-container'>
					<Icon iconClass='icon-lg' iconName={currentWeatherData?.icon} />
					<h2 className='hero-heading-large'>{currentWeatherData?.temp}</h2>
				</div>
			)}
			<section id='place-info-container'>
				<h2 className='hero-heading-med'>Hvar</h2>
				<span className='body-text-reg'>Croatia</span>
			</section>
		</article>
	);
};

export default TempLocation;

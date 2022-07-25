import Icon from '../../../../shared/components/icon/Icon';
const GraphHeader = () => {
	return (
		<header id='graph-header'>
			<div id='title-button-container'>
				<h2 className='heading-reg'>Caribe Sur</h2>
				<button className='widget-handlebar'>
					<div className='button-handle'></div>
					<div className='button-handle'></div>
				</button>
			</div>
			<div id='weather-temp-container'>
				<Icon iconName='01d' iconClass='icon-med' />
				<span className='body-text-med'>14°-30°C</span>
			</div>
		</header>
	);
};

export default GraphHeader;

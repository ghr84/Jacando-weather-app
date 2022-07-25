const GraphMenu = () => {
	// One btn component that takes in a label props and has an activeState.
	// Which renders a active class:active-underline, when true.
	return (
		<menu id='forecast-nav'>
			{/* Button comp */}
			<li className='nav-item'>
				<button className='body-text-med'>Temperature</button>
				<span className='active-underline'></span>
			</li>
			{/* Button comp */}
			<li className='nav-item'>
				<button className='body-text-med'>Precipitaciones</button>
				<span className='underline'></span>
			</li>
			{/* Button comp */}
			<li className='nav-item'>
				<button className='body-text-med'>Viento</button>
				<span className='underline'></span>
			</li>
			<div id='bottom-border'></div>
		</menu>
	);
};

export default GraphMenu;

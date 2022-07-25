import ZoneBtn from './zone-btn/ZoneBtn';
import './index.scss';
const ZoneControls = () => {
	return (
		<div id='zone-controls'>
			<div id='zone-buttons-container'>
				<ZoneBtn
					iconName='arrow-left'
					iconClass='icon-smaller'
					label='Zona Norte'
				/>

				<ZoneBtn
					iconName='arrow-right'
					iconClass='icon-smaller'
					label='Caribe Norte'
				/>
			</div>
		</div>
	);
};

export default ZoneControls;

import Icon from '../../../../../shared/components/icon/Icon';
import './ZoneBtn.scss';
interface ButtonProps {
	iconName: string;
	iconClass: string;
	label: string;
}
const ZoneBtn = ({ iconName, iconClass, label }: ButtonProps) => {
	return (
		<button id='zone-btn'>
			<Icon iconName={iconName} iconClass={iconClass} />
			<span className='body-text-small-bold'>{label}</span>
		</button>
	);
};

export default ZoneBtn;

import {
	WiDayCloudy,
	WiDaySunny,
	WiCloudy,
	WiNightRain,
	WiThunderstorm,
	WiSnowflakeCold,
	WiMoonFull,
	WiNightAltCloudy,
	WiCloud,
} from 'react-icons/wi';
import { BsCloudDrizzle } from 'react-icons/bs';
import { TbMist } from 'react-icons/tb';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// * Possible weather codes
// Thunderstorm - WiThunderstorm
//  11d
// Drizzle - BsCloudDrizzle
// 09d
// Rain - WiNightRain
// 10d
// Freeze - WiSnowflakeCold
// 13d
// Atmosphere  - TbMist
// 50d
// clear sky day - WiDaySunny
// 01d
// clear sky night - WiMoonFull
// 01n
// Clouds day - WiDayCloudy
// 02d
// Clouds night - WiNightAltCloudy
// 02n
// Scattered clouds - WiCloud
// 03d/03n
// Broken clouds - WiCloudy
// 04d/04n
interface IconProps {
	iconName: string | undefined;
	iconClass: string;
}
const Icon = ({ iconName, iconClass }: IconProps) => {
	if (iconName === 'arrow-right') return <BsArrowRight className={iconClass} />;
	if (iconName === 'arrow-left') return <BsArrowLeft className={iconClass} />;
	if (iconName === '11d') return <WiThunderstorm className={iconClass} />;
	if (iconName === '09d') return <BsCloudDrizzle className={iconClass} />;
	if (iconName === '10d') return <WiNightRain className={iconClass} />;
	if (iconName === '13d') return <WiSnowflakeCold className={iconClass} />;
	if (iconName === '50d') return <TbMist className={iconClass} />;
	if (iconName === '01d') return <WiDaySunny className={iconClass} />;
	if (iconName === '01n') return <WiMoonFull className={iconClass} />;
	if (iconName === '02d') return <WiDayCloudy className={iconClass} />;
	if (iconName === '02n') return <WiNightAltCloudy className={iconClass} />;
	if (iconName === '03d' || '03n') return <WiCloud className={iconClass} />;
	if (iconName === '04d' || '04n') return <WiCloudy className={iconClass} />;
	else return null;
};

export default Icon;

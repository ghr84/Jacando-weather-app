// Utils

import { getFutureDate } from '../../../../shared/utils/HandleDateTime';
const Header = () => {
	return (
		<>
			<header id='forecast-header'>
				<h2 className='heading-small'>Pronóstico Regional del Tiempo</h2>
				<time className='body-text-reg'>{getFutureDate()}</time>
			</header>
		</>
	);
};

export default Header;

// Hooks

import { getTimeDate } from '../../../../shared/utils/HandleDateTime';

// Scss

import './DateTime.scss';

const DateTime = () => {
	return <div className='date-time-comp'>{getTimeDate()}</div>;
};

export default DateTime;

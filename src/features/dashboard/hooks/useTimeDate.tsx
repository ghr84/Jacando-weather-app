import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/es';
// Set spanish as the default lang for moment.js
moment.locale('es');
// .split() separates the month/day string after every '_', into an array of single capitilized strings.
const months =
	'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
		'_'
	);
const weekdays = 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split(
	'_'
);
const weekdaysMin = 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_');

// Update the locale to use the capitilized version of the months/days
moment.updateLocale('es', {
	months: months,
	weekdays: weekdays,
	weekdaysMin: weekdaysMin,
});

export default function useGetTimeDate() {
	function getTimeDate() {
		const currentDateTime = moment();
		return (
			<div className='date-time-comp'>
				<Moment
					className='body-text-reg time-date-comp'
					format='h:mm a [—] dddd D [de] MMMM, YYYY'
				>
					{currentDateTime}
				</Moment>
			</div>
		);
	}

	function getWeekDay(timestamp: number) {
		return (
			<Moment className='body-text-med-bold' format='dd' unix>
				{timestamp}
			</Moment>
		);
	}

	function getFutureDate(days = 4) {
		// One day = 86400s
		const futureDate = days * 86400;
		return (
			<Moment className='body-text-med-bold' format='M MMM YYYY' unix>
				{futureDate}
			</Moment>
		);
	}
	return { getTimeDate, getWeekDay, getFutureDate };
}

import { Line } from '@nivo/line';
import { linearGradientDef } from '@nivo/core';
const GraphFrame = () => {
	const commonProperties = {
		width: 400,
		height: 180,
		margin: { top: 20, right: 20, bottom: 60, left: 20 },
		animate: true,
	};
	const theme = {
		grid: {
			line: {
				strokeWidth: 0.5,
			},
		},
		axis: {
			ticks: {
				line: {
					stroke: '#767676',
				},
				text: {
					fill: '#f2f3f2',
					fontSize: 10,
				},
			},
		},
	};

	return (
		<div id='graph-frame'>
			<Line
				{...commonProperties}
				colors={{ scheme: 'greys' }}
				lineWidth={1.5}
				theme={theme}
				curve='monotoneX'
				data={[
					{
						id: 'Time & Weather',
						data: [
							{ x: '06:00', y: 0 },
							{ x: '08:00', y: 15 },
							{ x: '10:00', y: 18 },
							{ x: '12:00', y: 20 },
							{ x: '14:00', y: 25 },
						],
					},
				]}
				defs={[
					linearGradientDef('gradientA', [
						{ offset: 60, color: '#ffffff' },
						{ offset: 90, color: '#ffffff', opacity: 0.45 },
					]),
				]}
				fill={[{ match: '*', id: 'gradientA' }]}
				xScale={{
					type: 'time',
					format: '%H:%M',
					precision: 'hour',
					useUTC: false,
				}}
				// xFormat for hover tooltip
				xFormat='time:%H:%M'
				axisBottom={{
					format: '%H:%M',
					tickValues: 'every 2 hours',
				}}
				axisLeft={null}
				enableGridY={false}
				enablePoints={false}
				enableArea={true}
				useMesh={true}
			/>
		</div>
	);
};

export default GraphFrame;

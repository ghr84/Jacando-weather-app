import { useEffect, useState } from 'react';

export default function useGetWindowSize() {
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}
		window.addEventListener('resize', handleResize);
		return () => {
			// Clean up listener every time dimensions is set.
			window.removeEventListener('resize', handleResize);
		};
	}, [dimensions]);
	return {
		dimensions,
	};
}

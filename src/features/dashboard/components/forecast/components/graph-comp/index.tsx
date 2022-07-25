import './GraphComp.scss';

// Comps

import GraphFrame from './GraphFrame';
import GraphHeader from './GraphHeader';
import GraphMenu from './GraphMenu';
const GraphComp = () => {
	return (
		<article id='graph-widget'>
			<GraphMenu />
			<GraphHeader />
			<GraphFrame />
		</article>
	);
};

export default GraphComp;

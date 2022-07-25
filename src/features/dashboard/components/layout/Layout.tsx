import './Layout.scss';
const Layout = ({ children }: any) => {
	return (
		<>
			<div
				id='dashboard-wrapper'
				className='backdrop-image'
				role='img'
				aria-label='Backdrop image of a lighthouse with mountains in the background'
			>
				<div id='background-overlay'>
					<main>{children}</main>
				</div>
			</div>
		</>
	);
};

export default Layout;

import React from 'react';
import './Header.scss';
const Header = () => {
	return (
		<header id='dashboard-header'>
			<h1 className='logo'>IMN</h1>
			<button id='main-burger-menu'>
				<div className='burger-handle'></div>
				<div className='burger-handle'></div>
			</button>
		</header>
	);
};

export default Header;

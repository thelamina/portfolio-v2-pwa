import React from 'react';
import { Header, Logo } from '../components';
import { MenuItems } from '../fixtures';

const HeaderContainer = () => {
	// console.log(MenuItems);
	return (
		<Header>
			<Header.Logo>
				<Logo />
			</Header.Logo>
			<Header.Menu data={MenuItems} />
		</Header>
	);
};

export default HeaderContainer;

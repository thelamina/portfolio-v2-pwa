import React from 'react';
import { Container, Inner, Logo, Menu, MenuItem, MenuLink } from './styles';
// import { Container } from '../../elements';

const containerVariants = {
	start: {
		// opacity: 0,
		y: '-100vh',
	},
	end: {
		// opacity: 1,
		y: 0,
		transition: {
			duration: 0.1,
			delay: 1.0,
			type: 'spring',
			stiffness: 40,
		},
	},
};

const Header = ({ children, ...restProps }) => {
	return (
		<Container variants={containerVariants} animate='end' initial='start'>
			<Inner {...restProps}>{children}</Inner>
		</Container>
	);
};
Header.Logo = ({ children, ...restProps }) => {
	return <Logo {...restProps}>{children}</Logo>;
};

Header.Menu = ({ data, ...restProps }) => {
	return (
		<Menu {...restProps}>
			{data.map((dt) => (
				<Header.MenuItem key={dt.key}>
					<Header.MenuLink url={dt.url} text={dt.title} />
				</Header.MenuItem>
			))}
		</Menu>
	);
};

Header.MenuItem = ({ children, ...restProps }) => {
	return (
		<MenuItem whileHover={{ scale: 1.1, y: -3 }} {...restProps}>
			{children}
		</MenuItem>
	);
};

Header.MenuLink = ({ text, url, ...restProps }) => {
	return (
		<MenuLink to={url} exact {...restProps}>
			{text}
		</MenuLink>
	);
};

export default Header;

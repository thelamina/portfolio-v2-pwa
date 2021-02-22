import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heading1 } from '../elements';
import { COLORS, FONTS } from '../constants';
import { MenuItems } from '../fixtures';
const SideNavContainer = () => {
	return (
		<Container
			animate={{ x: 0, opacity: 1 }}
			initial={{ x: '-100vw', opacity: 0 }}
			transition={{
				duration: 1.2,
				delay: 0.2,
				type: 'tween',
				// stiffness: 120,
			}}
		>
			<div>
				<H1>ITUNU LAMINA</H1>
				<H2>Front-end Engineer</H2>
			</div>
			<nav>
				<List>
					{MenuItems.map((item) => (
						<li key={item.key}>
							<Link exact to={item.url}>
								{item.title}
							</Link>
						</li>
					))}
				</List>
			</nav>
		</Container>
	);
};

export default SideNavContainer;

const Container = styled(motion.div)`
	color: #000;
	width: 20%;
	width: 25.7291666667%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 40px;
	padding-bottom: 40px;
	z-index: 1;
	// @media (max-width: 600px) {
	// 	display: none;
	// }
`;

const List = styled.ul`
	list-style: none;
	li {
		padding: 5px;
		font-family: ${FONTS.Bold};
		text-transform: uppercase;
		font-size: 14px;
	}
`;

const Link = styled(NavLink)`
	color: #000;
	text-decoration: none;
`;

const H1 = styled(Heading1)`
	color: #000;
	font-size: 16px;
	color: ${COLORS.lemon};
`;

const H2 = styled(Heading1)`
	// color: #000;
	font-size: 30px;
	max-width: 160px;
	mix-blend-mode: difference;
	z-index: 900;
`;

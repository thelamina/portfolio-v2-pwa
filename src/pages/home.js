import React from 'react';
import { Container, Background } from '../elements';
import { COLORS } from '../constants';
import styled from 'styled-components';
import { HeaderContainer, HeroContainer } from '../containers';

const backgroundVariant = {
	hidden: {
		opacity: 0,
		scale: 2,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			ease: 'easeInOut',
		},
	},
};

const Home = () => {
	return (
		<Background>
			<HeaderContainer />
			<Content
				variants={backgroundVariant}
				animate='visible'
				initial='hidden'
				exit='exit'
			>
				<HeroContainer />
			</Content>
		</Background>
	);
};

const Content = styled(Container)`
	display: flex;
	// justify-content: center;
	align-items: center;
	height: 100vh;
	flex-wrap: wrap;
	overflow: hidden;
	background-color: ${COLORS.black};
`;

export default Home;

import React from 'react';
import { Container, Background } from '../elements';
import { COLORS } from '../constants';
import styled from 'styled-components';
import {
	AboutContainer,
	HeaderContainer,
	SkillsContainer,
} from '../containers';

const backgroundVariant = {
	hidden: {
		opacity: 0,
		// scale: 2,
	},
	visible: {
		opacity: 1,
		// scale: 1,
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

const About = () => {
	return (
		<Background>
			<HeaderContainer />

			<Content
				variants={backgroundVariant}
				animate='visible'
				initial='hidden'
				exit='exit'
			>
				<AboutContainer />
				<SkillsContainer />
			</Content>
		</Background>
	);
};

const Content = styled(Container)`
	padding-top: 16vh;
	padding-bottom: 16vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	// align-items: center;
	// height: 100vh;
	// flex-wrap: wrap;
	// overflow: auto;
	background-color: ${COLORS.black};
`;

export default About;

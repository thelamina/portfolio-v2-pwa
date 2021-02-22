import React from 'react';
import { Background } from '../elements';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SideNavContainer, ProjectContainer } from '../containers';

const backgroundVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0,
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

const Works = () => {
	return (
		<Background
			variants={backgroundVariant}
			animate='visible'
			initial='hidden'
			exit='exit'
		>
			<Container>
				<SideNavContainer />
				<ProjectContainer />
			</Container>
			{/* <WorksContainer /> */}
		</Background>
	);
};

export default Works;

const Container = styled(motion.div)`
	padding: 50px 0px 50px 60px;
	padding: 0 0 0 4.1666666667%;
	display: flex;
	justify-content: space-between;
	height: 100vh;
	overflow: hidden;
	background-color: #fafafa;
	// z-index: 3;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 20vw;
		padding-top: 40vw;
		background: #f9f9f9;
		transform: rotate(-31deg) translate3d(-3.5%, -63.6%, 0);
		z-index: 0;
	}
`;

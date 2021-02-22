import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants';
import { ContactDetails } from '../fixtures';
import { HeaderContainer } from '../containers';
import { Container, Background, Paragraph2 } from '../elements';

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

const Contact = () => {
	return (
		<Background>
			<HeaderContainer />
			<Inner
				variants={backgroundVariant}
				animate='visible'
				initial='hidden'
				exit='exit'
			>
				<Paragraph2>You can reach me</Paragraph2>
				<Content>
					{ContactDetails.map((item) => (
						<div style={{ margin: '20px' }}>
							<a href={item.url} target='_blank' rel='noreferrer'>
								{item.icon}
							</a>
						</div>
					))}
				</Content>
			</Inner>
		</Background>
	);
};

const Inner = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: ${COLORS.black};
	// padding-top: 20vh;
`;

const Content = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

export default Contact;

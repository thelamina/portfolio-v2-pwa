import React from 'react';
import { Container, Background, Paragraph2 } from '../elements';
import { COLORS } from '../constants';
import styled from 'styled-components';

const NotFound = () => {
	return (
		<Background>
			<Content>
				<Paragraph2>404 | Page not found</Paragraph2>
			</Content>
		</Background>
	);
};

const Content = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: ${COLORS.black};
`;

export default NotFound;

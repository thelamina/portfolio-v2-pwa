import React from 'react';
import styled from 'styled-components';
import { Heading2, Paragraph2, Background } from '../elements';

const AboutContainer = () => {
	return (
		<Background>
			<H2>About</H2>
			<P>Yo!</P>
			<P>
				I'm Itunu Lamina, a Software Engineer from Nigeria. I enjoy
				creating things that works on the web, whether that be websites,
				applications, or anything in between
			</P>
		</Background>
	);
};

const H2 = styled(Heading2)``;
const P = styled(Paragraph2)`
	max-width: 800px;
`;
export default AboutContainer;

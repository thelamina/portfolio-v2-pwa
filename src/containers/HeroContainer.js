import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Heading2, Paragraph2 } from '../elements';
import { ROUTES, FONTS, COLORS } from '../constants';

const HeroContainer = () => {
	return (
		<div>
			<H2
				animate={{ x: 0, scale: 1, rotate: 0, opacity: 1 }}
				initial={{ x: '70', scale: 2, rotate: 270, opacity: 0 }}
				transition={{
					duration: 0.2,
					delay: 0.2,
					type: 'spring',
					stiffness: 50,
				}}
			>
				Hey! I am Itunu
			</H2>
			<P
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: '20vh', opacity: 0 }}
				transition={{
					duration: 1.2,
					delay: 1.5,
					type: 'spring',
					stiffness: 420,
				}}
			>
				Frontend developer who loves the artistic combination of code
				and design, I like building user centered applications so I am
				passionate in making the web easily accessible for everyone.
			</P>

			<Btn
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: '20vh', opacity: 0 }}
				transition={{
					duration: 0.7,
					delay: 2.1,
					type: 'spring',
					stiffness: 120,
					// yoyo: 'Infinity',
				}}
				// whileHover={{ x: 20 }}
				type='primary'
				to={ROUTES.ABOUT}
			>
				About me
			</Btn>
		</div>
	);
};

const Btn = styled(Link)`
	margin-top: 40px;
	font-family: ${FONTS.Regular};
	// line-height: 30px;
	font-size: 14px;
	outline: none;
	display: inline-block;
	padding: 12px 20px;
	cursor: pointer;
	text-align: center;
	min-width: 140px;
	text-decoration: none;
	min-height: 50px;
	color: ${({ type }) => (type === 'primary' ? COLORS.color2 : COLORS.black)};
	background-color: transparent;
	border: 2px solid
		${({ type }) => (type === 'primary' ? COLORS.color2 : COLORS.black)};
	border-radius: 40px;
`;
const H2 = styled(Heading2)``;
const P = styled(Paragraph2)`
	max-width: 800px;
`;
export default HeroContainer;

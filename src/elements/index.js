import styled from 'styled-components';
import { COLORS, FONTS } from '../constants';
import { motion } from 'framer-motion';

export const Heading1 = styled.h1`
	font-family: ${FONTS.Bold};
	padding-bottom: 16px;
`;
export const Heading2 = styled(motion.h2)`
	font-family: ${FONTS.Regular};
	line-height: 60px;
	font-size: 30px;
	padding-bottom: 16px;
`;
export const Heading3 = styled.h3``;

export const Paragraph1 = styled.p``;
export const Paragraph2 = styled(motion.p)`
	font-family: ${FONTS.Light};
	line-height: 30px;
	font-size: 16px;
`;
export const Paragraph3 = styled.p``;

export const Container = styled(motion.div)`
	width: 90%;
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	color: #fff;
`;

export const Background = styled(motion.div)`
	background-color: ${COLORS.black};
	overflow: hidden;
`;

export const Button = styled.button`
	font-family: ${FONTS.Medium};
	// line-height: 30px;
	font-size: 14px;
	outline: none;
	display: inline-block;
	padding: 12px 20px;
	cursor: pointer;
	min-width: 140px;
	min-height: 50px;
	color: ${({ type }) => (type === 'primary' ? COLORS.color2 : COLORS.black)};
	background-color: transparent;
	border: 2px solid
		${({ type }) => (type === 'primary' ? COLORS.color2 : COLORS.black)};
	border-radius: 40px;
`;

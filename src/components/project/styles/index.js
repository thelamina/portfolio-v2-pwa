import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Heading1, Paragraph2 } from '../../../elements';
import { FONTS, COLORS } from '../../../constants';

export const Container = styled(motion.div)`
	color: #fff;
	flex-basis: 80%;
	min-height: 101vh;
	padding-top: 40px;
	padding-bottom: 40px;
	width: 100%;
	z-index: 1;
	// @media (max-width: 600px) {
	// 	flex-basis: 100%;
	// 	margin: auto;
	// 	padding-left: 20px;
	// }
`;

export const Inner = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	box-shadow: 0 30px 60px rgb(0 0 0 / 35%);
`;

export const Controls = styled.nav`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 50%;
	background: #fff;
	z-index: 4;
	transform: translateY(-50%);
	width: 40px;
	height: 128px;
	left: -35px;
	// z-inde: 1;
`;

export const ControlButton = styled.button`
	border: none;
	color: #808080;
	cursor: pointer;
	display: inline-block;
	background: transparent;
	height: 44px;
	width: 100%;
`;

export const List = styled.ul`
	list-style: none;
	li {
		padding: 5px;
		font-family: ${FONTS.Bold};
		text-transform: uppercase;
		font-size: 14px;
	}
`;

export const Link = styled(NavLink)`
	color: #000;
	text-decoration: none;
`;

export const Title = styled(Heading1)`
	color: #000;
	font-size: 14px;
	color: ${COLORS.light};
	padding-bottom: 0px;
	text-transform: uppercase;
	padding-top: 12px;
`;

export const Description = styled(Paragraph2)`
	max-width: 800px;
	color: #fff;
	// font-size: 14px;
	line-height: 26px;
`;
export const Stack = styled(Paragraph2)`
	display: inline-block;
	color: #000;
	background: #fff;
	font-weight: bold;
	border-radius: 20px;
	padding: 0px 14px;
	font-size: 12px;
	text-transform: uppercase;
	margin-right: 10px;
	margin-bottom: 10px;
`;
export const Paging = styled.aside`
	position: absolute;
	overflow: hidden;
	z-index: 5;
	left: -47px;
	bottom: 20px;
	// background: #000

	color: #fff;
	width: 150px;
	height: 100px;
`;

export const PagingList = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
	margin-top: -7px;
`;

export const PagingListItem = styled.li`
	position: absolute;
	display: block;
	left: 0;
	font-weight: 900;
	font-style: italic;
	font-family: 'museo-sans', sans-serif;
	transform: ${({ active }) =>
		active === true ? 'translateY(0%)' : 'translateY(110%)'};
	transition: all 0.6s cubic-bezier(0.15, 0.005, 0.155, 1);
	top: -10px;
	letter-spacing: -10px;
	font-size: 100px;
	line-height: 120px;
`;

export const ProjectSlider = styled.div`
	width: 100%;
	height: 100%;
`;

export const ProjectList = styled.ul`
	position: relative;
	height: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const ProjectListItem = styled(motion.li)`
	padding: 0;
	width: 100%;
	height: 100%;
	background: ${COLORS.black};
`;

export const ProjectLink = styled(motion.a)`
	position: relative;
	display: inline-block;
	height: 100%;
	background: ${COLORS.black};
	overflow: hidden;
	width: 100%;
`;

export const ProjectDetail = styled(motion.div)`
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 30px;
	transform: translateY(-50%);
	color: #ffffff;
	letter-spacing: 1px;
	font-family: 'adobe-garamond-pro', 'times new roman';
	font-size: 14px;
	line-height: 30px;
`;

export const ProjectImage = styled(motion.img)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	// z-index: 1;
	transform: scale(1.2);
	object-fit: cover;
	filter: brightness(0.3);
	object-position: center;
	transition: all 0.8s cubic-bezier(0.37, 0.045, 0.105, 0.8);
	&:hover {
		transform: scale(1);
	}
`;

export const ProjectLogo = styled.img`
	position: absolute;
	left: 50%;
	top: 80%;
	padding: 0;
	text-align: center;
	transform: translate3d(-50%, -50%, 0);
`;

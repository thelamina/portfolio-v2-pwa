import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { Heading1, Paragraph2 } from '../../../elements';
import { FONTS, COLORS, ICONS } from '../../../constants';

export const Container = styled(motion.div)``;

export const Inner = styled.div`
	display: flex;
	// align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 3vh;
`;

export const Pitch = styled.div`
	flex: 1;
	padding: 36px 40px;
	@media (max-width: 600px) {
		flex-basis: 100%;
	}
`;

export const Main = styled(motion.div)`
	flex: 1;
`;

export const ListGroup = styled.ul`
	display: inline-block;
	list-style: none;

	& > li {
		& > h1 {
			cursor: pointer;
		}
		padding: 0px 5px;
		::before {
			content: '';
			display: inline-block;
			background: url(${ICONS.logo}) no-repeat center center/ cover;

			padding: 20px 8px 0px 24px;
			margin: 0;
			cursor: pointer;

			background-size: 20px;
		}
	}
`;

export const List = styled(motion.ul)`
	// list-style: none;
	padding-left: 50px;
`;

export const Title = styled(Heading1)`
	color: #000;
	font-size: 14px;
	color: ${COLORS.light};
	display: inline-block;
	padding-bottom: 16px;
	text-transform: uppercase;
	padding-top: 12px;
`;

export const Description = styled(Paragraph2)`
	max-width: 800px;
	color: #fff;
	font-size: 22px;
	line-height: 36px;
`;
export const Stack = styled(Paragraph2)`
	display: inline-block;
	color: #000;
	background: #fff;
	border-radius: 20px;
	padding: 2px 14px;
	font-size: 12px;
	text-transform: uppercase;
	margin-right: 10px;
`;

export const ListItem = styled(motion.li)`
	font-family: ${FONTS.Regular};
	line-height: 20px;
	font-size: 16px;
	padding: 5px 10px;
	color: #fff;
`;

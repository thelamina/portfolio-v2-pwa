import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Container as Con } from '../../../elements';

export const Header = styled.header``;

export const Container = styled(motion.div)`
	position: fixed;
	width: 100%;
	background-color: #1d1313;
`;

export const Inner = styled(Con)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled(motion.div)`
	flex: 1;
`;

export const LogoImage = styled.img``;

export const Menu = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;
`;

export const MenuItem = styled(motion.li)`
	list-style: none;
	padding: 10px;
`;
export const MenuLink = styled(NavLink)`
	color: #fff;
	text-decoration: none;
`;

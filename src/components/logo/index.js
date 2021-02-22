import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const svgVariants = {
	init: {
		rotate: -180,
	},
	end: {
		rotate: 0,
		transition: {
			duration: 1,
		},
	},
};

const pathVariants = {
	init: {
		opacity: 0,
		pathLength: 0,
	},
	end: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: 'easeInOut',
			delay: 2,
		},
	},
};
const Logo = () => {
	return (
		<Link to={ROUTES.HOME}>
			<motion.svg
				width='52'
				height='57'
				viewBox='0 0 52 57'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				variants={svgVariants}
				initial='init'
				animate='end'
				style={{ marginTop: '20px' }}
			>
				<motion.path
					d='M24.2029 1.44766L37.366 12.1272L30.2767 31.6457L49.2209 43.4438L39.5918 14.1911L29.0405 43.2597L24.7532 54.5842L3.73003 43.0287L9.62887 13.9177L24.2029 1.44766Z'
					stroke='white'
					stroke-width='10'
					variants={pathVariants}
				/>
				<motion.line
					x1='26.6303'
					y1='54.9018'
					x2='48.2679'
					y2='45.2319'
					stroke='white'
					stroke-width='4'
					variants={pathVariants}
				/>
				<motion.path
					d='M14.7717 28.7424L28.9538 35.2608L24.2041 47.471'
					stroke='white'
					stroke-width='4'
					variants={pathVariants}
				/>
			</motion.svg>
		</Link>
	);
};
export default Logo;

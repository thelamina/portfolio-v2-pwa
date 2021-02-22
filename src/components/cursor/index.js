import React, { useEffect, useRef } from 'react';
import { Container } from './styles';

const Cursor = () => {
	const cursorRef = useRef(null);
	useEffect(() => {
		const action = (e) => {
			const { clientX, clientY } = e;
			const mouseX = clientX - cursorRef.current.clientWidth / 2;
			const mouseY = clientY - cursorRef.current.clientHeight / 2;
			cursorRef.current.setAttribute(
				'style',
				`top: ${mouseY}px; left:${mouseX}px`
			);
		};

		window.addEventListener('mousemove', action);

		return () => {
			window.removeEventListener('mousemove', action);
		};
	});

	return <Container ref={cursorRef} />;
};

export default Cursor;

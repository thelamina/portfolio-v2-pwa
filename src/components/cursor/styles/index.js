import styled, { keyframes } from 'styled-components/macro';

const cursorAnim = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.7)
    }
`;

const cursorAnim2 = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.4)
    }
`;

export const Container = styled.div`
	// z-index: 0;
	width: 30px;
	height: 30px;
	border: 1px solid #fff;
	border-radius: 50%;
	position: absolute;
	transition-duration: 200ms;
	transition-timing-function: ease-out;
	animation: ${cursorAnim} 0.5s infinite alternate;

	&::after {
		content: '';
		width: 30px;
		height: 30px;
		position: absolute;
		border: 8px solid gray;
		border-radius: 50%;
		opacity: 0.5;
		top: -9px;
		left: -9px;
		animation: ${cursorAnim2} 0.5s infinite alternate;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

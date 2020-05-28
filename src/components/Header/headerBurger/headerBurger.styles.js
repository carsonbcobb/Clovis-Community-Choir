import styled from "styled-components";

const BurgerContainer = styled.div`
	width: 2em;
	height: 2em;
	position: absolute;
	top: 4em;
	right: 2.5em;
	z-index: 101;
	display: none;
	@media (max-width: 414px) and (max-height: 896px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		top: 2.75em;
		right: 1.75em;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? "#faf7ed" : "#373737")};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export default BurgerContainer;

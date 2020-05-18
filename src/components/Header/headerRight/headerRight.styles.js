import styled from "styled-components";

export const OptionsLinkContainer = styled.div`
	width: 80vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-size: 2rem;

	a {
		cursor: pointer;
		color: black;
		transition: 0.5s ease;

		&:hover {
			transition: 0.5s ease;

			color: #4183c4;
		}
	}

	.dropdown {
		cursor: pointer;
		color: black;
		transition: 0.5s ease;
		transform: translateY(8%);
		z-index: 5000;

		&:hover {
			color: #4183c4;
		}
		.dropdown-menu {
			transform: translateY(15%);
			padding: 15px;
			a {
				padding: 15px;
			}
		}
	}
	.item-link {
		font-size: 1.3rem;
		padding: 5%;
	}

	@media (max-width: 450px) {
		flex-flow: column nowrap;
		background-color: #ff7878;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
		padding-top: 8em;
		justify-content: flex-start;
		transition: transform 0.3s ease-in-out;
		z-index: 15;
	}
`;

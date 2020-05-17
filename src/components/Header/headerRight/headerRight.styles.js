import styled from "styled-components";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

export const OptionsLinkContainer = styled.div`
	width: 80vw;
	height: 100%;
	display: flex;
	align-items: center;
	margin-right: 20px;
	justify-content: space-evenly;

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

export const OptionsLink = styled(Link)`
	font-size: 3.5rem;
	padding: 30px;
	cursor: pointer;
	color: black;
	transition: 0.5s ease;
	&:hover {
		color: #eba7a7;
	}

	@media (max-width: 850px) {
		font-size: 4.5em;
		padding: 1.5rem 1.5rem;
		color: white;
	}
	@media (max-height: 670px) {
		font-size: 3.5rem;
	}
	@media (max-height: 570px) {
		font-size: 3rem;
		padding-bottom: 10px;
	}
	@media (min-height: 1024px) and (max-width: 768px) {
		font-size: 5rem;
		margin: 30px;
	}
`;

export const StyledPopup = styled(Popup)``;

export const Dropdown = styled.div`
	font-size: 3.5rem;
	padding: 30px;
	cursor: pointer;
	color: black;
	transition: 0.5s ease;

	&:hover {
		color: #eba7a7;
	}
`;

export const DropdownMenu = styled.ul`
	list-style: none;
	transform: translateX(-10%);
`;

export const DropdownItems = styled.li`
	font-size: 2.3rem;
	padding: 15px;
	width: 10vw;
	text-align: center;

	a {
		transition: 0.5s ease;

		&:hover {
			color: #eba7a7;
		}
	}
`;

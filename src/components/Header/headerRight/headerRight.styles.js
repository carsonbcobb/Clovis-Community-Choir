import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 80vw;
	height: 100%;
	z-index: 80;
	@media (max-width: 414px) and (max-height: 896px) {
		flex-flow: column nowrap;
		background-color: #2e3d36;
		position: absolute;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
		padding-top: 10em;
		justify-content: center;
		transition: transform 0.3s ease-in-out;
		z-index: 100;
	}
`;

export const MainNav = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	padding: 0;
	margin: 0;
	background: none;
	width: 60vw;
	align-items: center;
	z-index: 101;

	p {
		transform: translateY(55%);
	}

	li {
		display: block;
		position: relative;
		float: left;
		background: none;
		padding: 5%;
		font-size: 2rem;
		transform: translateY(-15%);
		transition: 0.75s ease;
		&:hover {
			color: #4183c4;
			li {
				float: none;
				background: #f1cfb6;
			}
			p {
				background: none;

				&:hover {
					background: none;
				}
			}
		}
		&:hover > ul {
			display: block;
			position: absolute;
		}

		li:hover li:hover li:hover li p:hover .main-navigation li ul li {
			border-top: 0;
		}
	}

	@media (max-width: 414px) and (max-height: 896px) {
		flex-direction: column;
		transform: translateX(35%);
		transition: 1s ease;

		li {
			font-size: 3.5rem;
			padding: 20px;
			color: #faf7ed;

			&:hover {
				color: #f1cfb6;
			}

			a {
				color: #faf7ed;
				padding: 20px;
			}
		}
	}
`;

export const SubMenu = styled.ul`
	display: none;
	transform: translateX(-40%);

	li {
		justify-content: center;
		transform: translateY(0%);
		text-align: center;
		padding: 25px;

		&:hover {
			border-top: 0;
		}

		a {
			padding: 25px;
			display: block;
			word-spacing: 2px;
			text-decoration: none;
			white-space: nowrap;
			color: #373737;
			font-size: 1.5rem;
			transition: 0.75s ease;

			&:hover {
				background: #2e3d36;
				border-top: 0;
				color: #faf7ed;
			}
		}
	}
	@media (max-width: 414px) and (max-height: 896px) {
		transform: translate(-90%, -35%);

		li {
			writing-mode: vertical-rl;
			margin: 1px;
			transform: translateX(-100%);
			padding: 5px;
		}

		a {
			padding: 5px;
		}
	}
`;

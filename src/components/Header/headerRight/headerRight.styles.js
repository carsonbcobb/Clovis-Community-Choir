import styled from "styled-components";

export const HeaderContainer = styled.div `
	width: 80vw;
	height: 100%;
	z-index: 80;
	@media (max-width: 414px) and (max-height: 896px) {
		flex-flow: column nowrap;
		background-color: #2e3d36;
		position: fixed;
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
	@media (max-width: 320px) and (max-height: 568px) {
		overflow: hidden;
	}
`;

export const MainNav = styled.ul `
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
	@media (max-width: 375px) and (max-height: 812px) {
		li {
			padding: 10px;


			a {
				padding: 10px;
			}
		}
	}
	@media (max-width: 414px) and (max-height: 736px) {
		li {
			padding: 5px;

			a {
				padding: 5px;
			}
		}
	}
	@media (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		transform: translate(35%, -10%);
		


		li {
			padding: 2px;
			

			

			a {
				padding: 2px;
			}
		}
	}
	@media only screen and (min-width: 1024px) and (max-height: 768px) and (-webkit-device-pixel-ratio: 2) {
		transform: translate(10%, 20%);
		li{
			padding: 3%;
		}
	}
	
	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2) {
		transform: translate(10%, 20%);
		li{
			padding: 2%;
			font-size: 3rem;
		}
			
	}
	
	@media (min-width: 1920px) and (max-height: 1080px){
		transform: translate(0%, 10%);
		li{
			padding: 2%;
			font-size: 4rem ;
		}
	}
	@media (min-width: 1366px) and (max-height: 768px){
		transform: translate(0%, 10%);
		li{
			padding: 3%;
			font-size: 2.5rem ;
		}
	}
	@media (min-width: 800px) and (max-height: 600px){
		transform: translate(0%, 25%);
		li{
			padding: 2%;
			font-size: 1.5rem ;
		}
	}
`;

export const SubMenu = styled.ul `
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
		transform: translate(-130%, -40%);

		li {
			writing-mode: vertical-rl;
			margin: 1px;
			transform: translateX(-150%);
			padding: 1px;
		}

		a {
			padding: 1px;
			font-size: 1rem !important;
		}
	}
	@media (max-width: 375px) and (max-height: 812px) {
		transform: translate(-72%, -40%);
		li {
			a {
				font-size: 1.2rem;
			}
		}
	}
	
	@media (max-width: 375px) and (max-height: 667px) {
		transform: translate(-95%, -55%);
		li {
			padding: 1px;
			a {
				font-size: 1.1rem;
				padding: 15px;
			}
		}
	}
	@media (max-width: 320px) and (max-height: 568px) {
		transform: translate(-85%, -55%);
		li {
			transform: translateX(-205%);

			padding: 1px;
			margin: 1px;

			a {
				font-size: 1rem;
				padding: 5px;
				margin: 2px;
			}
		}
	}
`;
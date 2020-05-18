import styled from "styled-components";

export const HomepageContainer = styled.div`
	width: 100vw;
	height: 250vh;
	overflow-y: hidden;
`;

export const SliderContainer = styled.div`
	.slider {
		width: 100vw;
		height: 87vh;

		.previousButton,
		.nextButton {
			polygon {
				fill: rgba(236, 239, 238, 0.8);
			}
		}

		.slider-content {
			.inner {
				padding: 0 70px;
				box-sizing: border-box;
				position: absolute;
				width: 100%;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
				h1 {
					font-weight: 900;
					margin: 0 auto;
					max-width: 840px;
					color: #faf7ed;
					font-size: 64px;
					line-height: 1;
				}
				p {
					color: #faf7ed;
					font-size: 1.5rem;
					line-height: 1.5;
					margin: 20px auto 30px;
					max-width: 640px;
				}
			}
		}
	}
`;

export const About = styled.div`
	height: 60vh;
	background: #f1cfb6;
	display: flex;
	.image-container {
		width: 40vw;
		align-self: center;
		padding-left: 5%;
		img {
			width: 90%;
		}
	}
	.text-container {
		width: 60vw;
		align-self: center;
		padding: 10%;
		p {
			font-size: 1.5rem;
		}
	}
	.button-container {
		display: flex;
		justify-items: center;
		flex-direction: column;
		button {
			font-size: 1.5rem;
			padding: 1.5%;
			cursor: pointer;
			width: 25%;
			align-self: center;
			border-radius: 10%;
			background: rgba(250, 250, 250, 0.8);
			transition: 0.5s ease-in-out;
			&:hover {
				background: rgba(200, 200, 200, 0.9);
			}
		}
	}
`;

export const Sponsors = styled.div`
	height: 50vh;
	background: #bdccd0;
	display: flex;
	.image-container {
		width: 40vw;
		align-self: center;
		img {
			width: 90%;
		}
	}
	.text-container {
		width: 60vw;
		align-self: center;
		padding: 10%;
		p {
			font-size: 1.8rem;
		}
	}
`;

export const Info = styled.div`
	height: 40vh;
	background: #faf7ed;
	display: flex;
	align-items: center;
	flex-direction: column;

	.info-header {
		h2 {
			font-size: 2rem;
		}
	}
	.text-container {
		p {
			font-size: 1.3rem;
			margin: 0;
		}
	}
	.button-container {
		button {
			display: flex;
			font-size: 1.2rem;
			padding: 10px;
			margin: 15px;
			border-radius: 10%;
			background: rgba(250, 250, 250, 0.8);
			transition: 0.5s ease-in-out;
			&:hover {
				background: rgba(200, 200, 200, 0.9);
			}
		}
	}
`;

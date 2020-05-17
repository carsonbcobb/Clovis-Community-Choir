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
					color: #ffffff;
					font-size: 64px;
					line-height: 1;
				}
				p {
					color: #ffffff;
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
	background: #bfd1fd;
	display: flex;
	.head {
		padding: 5%;

		h2 {
			font-size: 4rem;
		}
	}

	.body {
		padding: 3%;
		margin: 1%;
		p {
			font-size: 1.6rem;
			justify-self: flex-start;
		}
	}
	.button-container {
		display: flex;
		justify-items: center;
		flex-direction: column;
		button {
			font-size: 1.8rem;
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
	background: #d1bffd;
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
	background: #f0f8ff;
	display: flex;
	align-items: center;
	flex-direction: column;
	h2 {
		font-size: 2.5rem;
	}
	p {
		font-size: 1.5rem;
	}
	button {
		display: flex;
		font-size: 1.2rem;
		padding: 1%;
		border-radius: 10%;
		background: rgba(250, 250, 250, 0.8);
		transition: 0.5s ease-in-out;
		&:hover {
			background: rgba(200, 200, 200, 0.9);
		}
	}
`;

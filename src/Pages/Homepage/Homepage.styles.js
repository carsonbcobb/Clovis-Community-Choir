import styled from "styled-components";

export const HomepageContainer = styled.div`
	width: 100vw;
	height: 250vh;
	overflow-y: hidden;
	color: #373737;
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
			font-family: "Playfair Display", serif;

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
					font-family: "Playfair Display", serif;
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
		.about-button {
			font-size: 1.5rem;
			background: #f1cfb6;
			transition: 0.75s ease;
			border: 1px solid #b49b88;
			&:hover {
				background: #b49b88;
				color: #faf7ed;
				border: 1px solid #f1cfb6;
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

	.facebook-container {
		height: auto;
		width: 25%;
		display: flex;
		justify-content: center;

		img {
			width: 50%;
		}
	}

	.info-header {
		h2 {
			transform: translateY(50%);
			font-size: 2rem;
		}
	}
	.text-container {
		transform: translateY(-80%);
		p {
			font-size: 1.7rem;
			margin: 0;
			.like-icon {
				color: #3b5998;
				transform: translateY(15%);
			}
		}
	}

	.facebook-button-container {
		transform: translateY(-90%);

		.facebook-button {
			padding: 15px;
		}
	}
`;

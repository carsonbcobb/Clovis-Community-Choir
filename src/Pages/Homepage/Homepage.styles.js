import styled from "styled-components";

export const HomepageContainer = styled.div `
	width: 100vw;
	height: 250vh;
	color: #373737;
	@media (max-width: 414px) and (max-height: 896px) {
		height: 225vh !important;
	}
	@media (max-width: 414px) and (max-height: 736px) {
		height: 225vh;
	}
	
	@media (max-width: 320px) and (max-height: 568px) {
		height: 235vh;
	}
	@media (max-width: 375px) and (max-height: 667px) {
		height: 235vh;
	}
	@media (max-width: 414px) and (max-height: 736px) {
		height: 235vh;
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
	height: 235vh;
	}
`;

export const SliderContainer = styled.div `
	.slider {
		width: 100vw;
		height: 90vh;

		.previousButton,
		.nextButton {
			polygon {
				fill: #faf7ed;
				opacity: 0.8;
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
				transform: translate(-50%, -75%);
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
	@media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
		.slider {
			height: 65vh;
			.slider-content {
				.inner {
					h1 {
						font-size: 4rem;
					}
					p {
						font-weight: 600;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 414px) and (max-height: 736px) and (-webkit-device-pixel-ratio: 3) {
		.slider {
			height: 65vh;
			.slider-content {
				.inner {
					h1 {
						font-size: 3rem;
					}
					p {
						font-weight: 600;
						font-size: 1rem;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		.slider {
			height: 75vh;
			.slider-content {
				.inner {
					h1 {
						font-size: 2rem !important;
					}
					p {
						font-size: 1rem;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
		.slider {
			height: 75vh;
			.slider-content {
				.inner {
					h1 {
						font-size: 3rem;
					}
					p {
						font-size: 1rem;
					}
				}
			}
		}
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		.slider {
			height: 75vh;
			.slider-content {
				.inner {
					h1 {
						font-size: 6rem;
					}
					p {
						font-size: 2.5rem;
					}
				}
			}
		}
	}
`;

export const About = styled.div `
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
		padding: 5%;

		p {
			font-size: 1.5rem;
			font-weight: bold;
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

	@media (max-width: 414px) and (max-height: 896px) {
		.text-container {
			p {
				font-size: 0.9rem;
			}
		}
	}

	@media (max-width: 375px) and (max-height: 667px) {
		.text-container {
			p {
				font-size: 0.8rem;
			}
		}
	}
	@media (max-width: 320px) and (max-height: 568px) {
		.text-container {
			p {
				font-size: 0.7rem;
			}
		}
		.button-container {
			.about-button {
				font-size: 1rem;
			}
		}
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		.text-container {
			p {
				font-size: 2.5rem;
			}
		}
		.button-container {
			.about-button {
				font-size: 2.5rem;
			}
		}
	}
`;

export const Sponsors = styled.div `
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
	@media (max-width: 414px) and (max-height: 896px) {
		.text-container {
			padding: 5%;
			p {
				padding-left: 5%;

				font-size: 1.3rem;
			}
		}
	}
	@media (max-width: 375px) and (max-height: 667px) {
		.text-container {
			p {
				font-size: 1.1rem;
			}
		}
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		.text-container {
			p {
				font-size: 2.5rem;
			}
		}
	}
`;

export const Info = styled.div `
	height: 40vh;
	background: #faf7ed;
	display: flex;
	align-items: center;
	flex-direction: column;

	.facebook-container {
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

	@media (max-width: 414px) and (max-height: 896px) {
		.info-header {
			h2 {
				transform: translateY(80%);
				font-size: 2rem;
			}
		}
		.text-container {
			transform: translateY(0%);
			text-align: center;
			p {
				font-size: 1.3rem;
				padding: 5%;
			}
		}

		
		.facebook-container {
			height: auto;
			width: 55%;
			transform: translateY(15%);

			img {
				width: 100%;
			}
		}
	}
	@media (max-width: 375px) and (max-height: 812px) {
		.text-container {
			p {
				font-size: 1.2rem;
			}
		}
	}

	@media (max-width: 414px) and (max-height: 736px) {
		.text-container {
			transform: translateY(-20%);
			p {
				font-size: 1.2rem;
			}
		}
		.facebook-button-container {
			transform: translateY(-70%);
		}
		.facebook-container {
			img {
				width: 60%;
			}
		}
	}
	@media (max-width: 375px) and (max-height: 667px) {
		.facebook-container {
			img {
				width: 60%;
			}
		}
		.text-container {
			p {
				font-size: 1rem;
			}
		}
	}
	@media (max-width: 320px) and (max-height: 568px) and (-webkit-device-pixel-ratio: 2) {
		.info-header {
			transform: translateY(-50%);
		}

		.facebook-container {
			img {
				width: 50%;
				-webkit-max-logical-width: 50%;
			}
		}

		.facebook-button-container {
			transform: translateY(-40%);
		}
	}
	@media only screen and (min-width: 1024px) and (max-height: 768px) and (-webkit-device-pixel-ratio: 2) {
		.facebook-container {
			img {
				width: 65%;
				-webkit-max-logical-width: 65%;
			}
		}
	}
	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2) {
		.facebook-container {
			img {
				width: 65%;
				-webkit-max-logical-width: 65%;
			}
		}
		.info-header {
			h2 {
				font-size: 3rem;
			}
		}
		.text-container {
			p {
				font-size: 2rem;
			}
		}
		.facebook-button-container {
			transform: translateY(-20%);
			.facebook-button{
				padding: 25px;
				font-size: 2rem;
				
			}
		}
		
	}
	@media only screen and (min-width: 1366px) and (max-height: 768px) {
		.facebook-container {
			img {
				width: 35%;
				-webkit-max-logical-width: 35%;
			}
		}
		.info-header {
			transform: translateY(-20%);
		
	}
		.text-container {
			transform: translateY(-40%);
			
			
		}
		.facebook-button-container {
			transform: translateY(-20%);
			.facebook-button{
				padding: 15px;
				font-size: 1.5rem;
				
			}
		}
		
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){

		.facebook-container {
			width: 100%;
			transform: translateY(10%);

			img {
				width: 10%;
				-webkit-max-logical-width: 10%;
			}
		}
		.info-header {
			transform: translateY(-20%);
		h2 {
			font-size: 4.5rem;
		}
	}
		.text-container {
			transform: translateY(-40%);
			
			p {
				font-size: 2.5rem;
			}
		}
		.facebook-button-container {
			transform: translateY(-20%);
			.facebook-button{
				padding: 25px;
				font-size: 2.5rem;
				
			}
		}
	}
`;
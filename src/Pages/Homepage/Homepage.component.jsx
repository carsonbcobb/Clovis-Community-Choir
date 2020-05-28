import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-styles/slider-animations.css";
import { AiOutlineLike } from "react-icons/ai";
import { Button, Icon } from "semantic-ui-react";

import {
	HomepageContainer,
	About,
	Sponsors,
	Info,
	SliderContainer,
} from "./Homepage.styles";
import Footer from "../../components/Footer/Footer.component";

const slides = [
	{
		title: "Clovis Community Choir",
		description:
			"Bringing the beauty of Choral Music to the Fresno area since 2014",
		image: "https://i.imgur.com/GEKNBEZ.jpg?2",
	},
	{
		title: "Come Sing With Us!",
		description:
			"We would love for you to join our choir family! Come join us!",
		image: "https://i.imgur.com/xCzjSX9.jpg",
	},
	{
		title: "A Diverse Musical Sound",
		description:
			"Come take a trip with us, as we sing songs from across the world, past to present",
		image: "https://i.imgur.com/h123Hgn.jpg",
	},
];

const clovisAdultLogo = require("../../assets/CAE.png");
const choirLogo = require("../../assets/Logo.png");
const facebookLogo = require("../../assets/facebook.png");

const HomePage = () => (
	<HomepageContainer>
		<SliderContainer>
			<Slider autoplay={4000}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="slider-content"
						style={{
							background: `url('${slide.image}') no-repeat center center`,
							backgroundSize: "cover",
						}}
					>
						<div className="inner">
							<h1>{slide.title}</h1>
							<p>{slide.description}</p>
						</div>
					</div>
				))}
			</Slider>
		</SliderContainer>
		<About>
			<div class="image-container">
				<img src={choirLogo} alt="Clovis Community Choir Logo" />
			</div>
			<div class="text-container">
				<p>
					The Clovis Community Choir is here to provide an opportunity for
					singers of all experience levels an encouraging and welcoming
					environment in which to sing a variety of quality choral music. We
					also strive to present enriching and inspiring concerts for all ages
					in the great Clovis/Fresno community
				</p>

				<div class="button-container">
					<Button className="about-button" href="/AboutUs">
						Learn More
					</Button>
				</div>
			</div>
		</About>
		<Info>
			<div class="info-header">
				<h2>Don't Miss Out!</h2>
			</div>
			<div class="facebook-container">
				<img src={facebookLogo} alt="Facebook Logo" />
			</div>
			<div class="text-container">
				<p>
					Stay up to date with our performances and like us on Facebook!
					<AiOutlineLike size="2em" class="like-icon" />{" "}
				</p>
			</div>
			<div className="facebook-button-container">
				{" "}
				<Button
					className="facebook-button"
					href="https://www.facebook.com/Clovis-Community-Choir-691609034259996"
					target="_blank"
					color="facebook"
					animated
				>
					<Button.Content visible>
						<Icon name="facebook" /> Facebook
					</Button.Content>
					<Button.Content hidden>
						<Icon name="arrow right" />
					</Button.Content>
				</Button>
			</div>
		</Info>
		<Sponsors>
			<div class="text-container">
				<p>
					Clovis Community Choir is supported, in part, by Clovis Adult
					Education through the Clovis Unified School District.
				</p>
			</div>
			<div class="image-container">
				<img src={clovisAdultLogo} alt="Clovis Adult Logo" />
			</div>
		</Sponsors>
		<Footer />
	</HomepageContainer>
);

export default HomePage;

import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-styles/slider-animations.css";
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
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi blanditiis voluptatum explicabo, atque error aspernatur.",
		image: "https://i.imgur.com/GEKNBEZ.jpg?2",
	},
	{
		title: "Come Sing With Us!",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi blanditiis voluptatum explicabo, atque error aspernatur.",
		image: "https://i.imgur.com/xCzjSX9.jpg",
	},
	{
		title: "A Diverse Musical Sound",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi blanditiis voluptatum explicabo, atque error aspernatur.",
		image: "https://i.imgur.com/h123Hgn.jpg",
	},
];

const clovisAdultLogo = require("../../assets/CAE.png");

const HomePage = () => (
	<HomepageContainer>
		<SliderContainer>
			<Slider autoplay={5000}>
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
			<div class="head">
				<h2>Clovis Community Choir</h2>
			</div>
			<div class="body">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
					blanditiis voluptatum explicabo, atque error aspernatur.Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Modi blanditiis
					voluptatum explicabo, atque error aspernatur.Lorem ipsum dolor sit
					amet, consectetur adipisicing elit. Modi blanditiis voluptatum
					explicabo, atque error aspernatur.Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Modi blanditiis voluptatum explicabo,
					atque error aspernatur.
				</p>
				<div class="button-container">
					<button>Learn More</button>
				</div>
			</div>
		</About>
		<Info>
			<h2>Don't Miss Out!</h2>
			<p>Stay up to date with our performances</p>
			<button>Go To Upcoming Events</button>
		</Info>
		<Sponsors>
			<div class="text-container">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
					est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
					est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, est.
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

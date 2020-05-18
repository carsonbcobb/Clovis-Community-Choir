import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-styles/slider-animations.css";
import { AiOutlineLike } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
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
const choirLogo = require("../../assets/Logo.png");

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
			<div class="info-header">
				<h2>Don't Miss Out!</h2>
			</div>
			<div class="facebook-container">
				{" "}
				<FaFacebookSquare style={{ color: "#3B5998" }} size="4em" />
			</div>
			<div class="text-container">
				<p>
					Stay up to date with our performances and like us on Facebook!
					<AiOutlineLike size="2em" />{" "}
				</p>
			</div>
			<div class="button-container">
				<button>Visit Our Page</button>
			</div>
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
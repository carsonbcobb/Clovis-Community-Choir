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
					The Clovis Community Choir is a non-auditioned choral group for
					singers of all backgrounds, with a membership of 90-plus voices. Our
					singers range from those who are highly skilled to those who have
					never sung in a choir before, but we all have these things in common:
					*Love singing great choral music of all styles: Inspirational ballads
					to heartwarming sacred favorites.  Quality arrangements of Pop Music
					and Show Tunes. Patriotic and Americana to Classical pieces by the
					masters. A Capella selections or accompanied by varieties of
					instruments!
				</p>
				<p>
					 *Enjoy the weekly aspect of all that takes place in a fast paced and
					fun, yet challenging rehearsal with other singers from around the
					community…each of varying age and experience.  Learning from each
					other.  Growing together, musically and socially.  A “high note” of
					the week! *Desire the thrill of presenting top-notch concerts that
					bring joy and inspiration to our community in ways that only choral
					music, presented with dedication and excellence, can do!
				</p>
				<p>
					The choir rehearses weekly during its season which is broken into 3
					segments…late August through December, February through April, and May
					through June. We are sponsored by Clovis Adult School Community
					Education, and each year the Choir performs 4 major concerts, and
					various other performances around the community…and, our concerts are
					free to the public!
				</p>
				<div class="button-container">
					<Button className="about-button" href="/Join">
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

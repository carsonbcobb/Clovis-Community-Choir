import React from "react";

import Footer from "../../../components/Footer/Footer.component";

import {
	AboutContainer,
	HeaderImage,
	BodyContainer,
	BodyHeader,
	BodyText,
	Title,
} from "../About.styles";

const HistoryPage = () => (
	<AboutContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/YcbdCdG.jpg"} alt="Our History" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Our History</h2>
			</Title>
			<BodyHeader>
				<h1>Many Years Ago, in 2014, we began to sing...</h1>
			</BodyHeader>
			<BodyText>
				<p>
					After years of sponsoring personal growth classes and events for the
					Clovis/Fresno communities, the Community Education department of
					Clovis Adult School was eager to offer a choral opportunity for those
					who enjoy singing! Ed Cobb, a choral conductor in the area for many
					years, was contacted and proudly accepted the “challenge” to start a
					new choir.
				</p>
				<p>
					Knowing that there is always an interest in patriotic music, it was
					decided to put together a group, and schedule a concert to celebrate
					Independence Day. Fifty people showed up, and the rest is history! The
					first concert was held in the Clovis Veteran’s Memorial Building
					Auditorium…to a standing room only crowd!
				</p>
				<p>
					Since then, the Choir has grown, numerically-- with over 90 voices and
					musically. The the desire has always been to present a varied program
					of music for our audiences. Our concerts range from the annual
					Patriotic Concert, to seasonal concerts, and pop-like concerts
					featuring great Broadway and Movie tunes. One of the favorite
					traditions has been an annual concert of sacred music. Each fall, the
					Choir, accompanied by a variety of brass, woodwind, strings and
					percussion presents some of the best in sacred choir literature.
					Classics, contemporary, gospel and spirituals!
				</p>
				<p>
					In addition to our annual 4 concert series put on throughout the year,
					we also perform in various ways around the community. The choir has
					presented the National Anthem for the Fresno Grizzlies Triple-A
					baseball team, as well as the internationally known Harlem
					Globetrotters, in the Save Mart Center. In addition, the Choir has
					taken pleasure in performing in conjunction with the Fresno Rescue
					Mission, and Save the Children, in Fresno; and has collaborated with
					other groups such as the Bach Children’s Choir, the Clovis Community
					Band, and several well-known vocal and instrumental soloists.
				</p>
			</BodyText>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</AboutContainer>
);

export default HistoryPage;

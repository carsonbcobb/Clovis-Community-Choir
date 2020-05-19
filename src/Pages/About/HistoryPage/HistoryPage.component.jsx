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
					Clovis Adult School was desiring to offer a choral opportunity for
					those who would enjoy singing! Ed Cobb, a choral conductor in the area
					for many years, was contacted and gladly accepted the “challenge” to
					begin a new choir. Knowing that there is always an interest in
					“patriotic” music, it was decided to put together a group, and
					schedule a concert to celebrate Independence Day. Fifty people showed
					up, and the rest is history! The first concert was held in the Clovis
					Veteran’s Memorial Building Auditorium…to a standing room only crowd.
				</p>
				<p>
					Since then, the Choir has grown, not only numerically-- with over 90
					voices, but musically, and the desire has always been to present a
					varied program of music. Our concerts have ranged from the annual
					Patriotic Concert, to seasonal concerts, and even pops-like concerts
					featuring great Broadway and Movie tunes. One of the favorite
					traditions has been an annual concert of sacred music. Each fall, the
					Choir, accompanied by a variety of brass, woodwind, strings and
					percussion, presents some of the best in sacred choir literature.
					Classics, contemporary, gospel and spirituals!
				</p>
				<p>
					In addition to our 4 major concerts each year, we also perform in
					various ways around the community. On several occasions, the choir has
					presented the National Anthem for the Fresno Grizzlies Triple-A
					baseball team, as well as the internationally known Harlem
					Globetrotters, in the Save Mart Center. In addition, the Choir has
					enjoyed performing in conjunction with the Fresno Rescue Mission, and
					Save the Children, in Fresno; and has collaborated with other groups
					such as the Bach Children’s Choir, the Clovis Community Band, and
					several well-known vocal and instrumental soloists.
				</p>
			</BodyText>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</AboutContainer>
);

export default HistoryPage;

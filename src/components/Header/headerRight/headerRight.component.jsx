import React from "react";

import { HeaderContainer, MainNav, SubMenu } from "./headerRight.styles";
const HeaderRight = ({ open, handleClick }) => {
	return (
		<HeaderContainer open={open}>
			<MainNav>
				<li>
					<a href="/">Home</a>
				</li>

				<li>
					<p>About</p>

					<SubMenu>
						<li>
							<a href="/AboutUs">About Us</a>
						</li>
						<li>
							<a href="/OurDirector">Our Director</a>
						</li>

						<li>
							<a href="/OurAcc">Our Accompanist</a>
						</li>

						<li>
							<a href="/OurHistory">Our History</a>
						</li>
					</SubMenu>
				</li>

				<li>
					<p>Events</p>

					<SubMenu>
						<li>
							<a href="/UpcomingEvents">Upcoming Events</a>
						</li>

						<li>
							<a href="/PastEvents">Past Performances</a>
						</li>
					</SubMenu>
				</li>

				<li>
					<p>Contact</p>

					<SubMenu>
						<li>
							<a href="/Join">Join Us</a>
						</li>

						<li>
							<a href="/Book">Book Us</a>
						</li>
						<li>
							<a href="/Contact">Contact Us</a>
						</li>
					</SubMenu>
				</li>

				<li>
					<a href="https://app.choirmanager.com/en/login/" target="_new">
						Sign In
					</a>
				</li>
			</MainNav>
		</HeaderContainer>
	);
};

export default HeaderRight;

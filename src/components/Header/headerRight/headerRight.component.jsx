import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

import { OptionsLinkContainer } from "./headerRight.styles";
const HeaderRight = ({ open, handleClick }) => {
	return (
		<OptionsLinkContainer open={open}>
			<Menu.Item class="menu-item">
				<a href="/">Home</a>
			</Menu.Item>
			<Dropdown item text="About" class="dropdown">
				<Dropdown.Menu className="dropdown-menu">
					<Dropdown.Item>
						<a class="item-link" href="/OurDirector">
							Our Director
						</a>
					</Dropdown.Item>
					<Dropdown.Item>
						<a class="item-link" href="/OurHistory">
							Our History
						</a>
					</Dropdown.Item>
					<Dropdown.Item>
						<a class="item-link" href="/OurMission">
							Our Mission
						</a>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown item text="Events" class="dropdown">
				<Dropdown.Menu className="dropdown-menu">
					<Dropdown.Item>
						<a class="item-link" href="/UpcomingEvents">
							Upcoming Events
						</a>
					</Dropdown.Item>
					<Dropdown.Item>
						<a class="item-link" href="/PastEvents">
							Past Performances
						</a>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown item text="Contact" class="dropdown">
				<Dropdown.Menu className="dropdown-menu">
					<Dropdown.Item>
						<a class="item-link" href="/Join">
							Join Us
						</a>
					</Dropdown.Item>
					<Dropdown.Item>
						<a class="item-link" href="/Book">
							Book Us
						</a>
					</Dropdown.Item>
					<Dropdown.Item>
						<a class="item-link" href="/Contact">
							Contact Us
						</a>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Menu.Item class="menu-item">
				<a href="/">Sign In</a>
			</Menu.Item>
		</OptionsLinkContainer>
	);
};

export default HeaderRight;

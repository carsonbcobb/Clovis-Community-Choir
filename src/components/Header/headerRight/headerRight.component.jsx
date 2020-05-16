import React from "react";


import { OptionsLinkContainer, OptionsLink, Dropdown, DropdownMenu, DropdownItems, StyledPopup} from "./headerRight.styles";
const HeaderRight = ({ open, handleClick }) => {
  return (
    <OptionsLinkContainer open={open}>
      <OptionsLink to="/" onClick={handleClick}>
        Home
      </OptionsLink>
      <StyledPopup
      trigger={<Dropdown> About </Dropdown>}
      position="bottom center"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      arrow={false}
    >
      <DropdownMenu>
        <DropdownItems><a href="/About" alt="Our Director">Our Director</a></DropdownItems>
        <DropdownItems ><a href="/About" alt="Our History">Our History</a></DropdownItems>
        <DropdownItems ><a href="/About" alt="Our Mission">Our Mission</a></DropdownItems>
      </DropdownMenu>
    </StyledPopup>
    <StyledPopup
      trigger={<Dropdown> Events </Dropdown>}
      position="bottom center"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      arrow={false}
    >
      <DropdownMenu>
        <DropdownItems><a href="/Events" alt="Upcoming Events">Upcoming Events</a></DropdownItems>
        <DropdownItems><a href="/Events" alt="Past Performances">Past Performances</a></DropdownItems>
      </DropdownMenu>
    </StyledPopup>
    <StyledPopup
      trigger={<Dropdown> Contact </Dropdown>}
      position="bottom center"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      arrow={false}
    >
      <DropdownMenu>
      <DropdownItems><a href="/Contact" alt="Join Us">Join Us</a></DropdownItems>
      <DropdownItems><a href="/Contact" alt="Book Us">Book Us</a></DropdownItems>
      <DropdownItems><a href="/Contact" alt="Contact Us">Contact Us</a></DropdownItems>
      </DropdownMenu>
    </StyledPopup>
      
      <OptionsLink to="/SignIn" onClick={handleClick}>
        Sign In
      </OptionsLink>
    </OptionsLinkContainer>
  );
};

export default HeaderRight;
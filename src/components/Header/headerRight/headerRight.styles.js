import styled from "styled-components";
import Popup from "reactjs-popup";


export const OptionsLinkContainer = styled.div `
  width: 80vw;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: space-evenly;
 
  @media (max-width: 450px) {
    flex-flow: column nowrap;
    background-color: #ff7878;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 8em;
    justify-content: flex-start;
    transition: transform 0.3s ease-in-out;
    z-index: 15;
  }
`;

export const OptionsLink = styled.a `
  font-size: 2em;
  padding: 10px 10px;
  cursor: pointer;
  color: black;
  transition: 1s ease;
  
  
  @media (max-width: 850px) {
    font-size: 4.5em;
    padding: 1.5rem 1.5rem;
    color: white;
    
  }
  @media (max-height: 670px) {
    font-size: 3.5rem;
  }
  @media (max-height: 570px) {
    font-size: 3rem;
    padding-bottom: 10px;
  }
  @media (min-height: 1024px) and (max-width: 768px) {
    font-size: 5rem;
    margin: 30px;
  }
`;


export const StyledPopup = styled(Popup)`
`;



export const Dropdown = styled.div `
  font-size: 2em;
  padding: 10px 10px;
  cursor: pointer;
  color: black;
 

  &:hover{
    color: blueviolet;
  }

`;

export const DropdownMenu = styled.ul`
padding: 35px;
list-style: none;
transform: translateX(-5%);
`;

export const DropdownItems = styled.li`
font-size: 1.4em;
padding: 15px;
width: 10vw;
text-align: center;

a{
  &:hover{
    color: blueviolet;
  }
}

`;
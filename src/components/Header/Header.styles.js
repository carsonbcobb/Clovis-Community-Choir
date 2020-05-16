import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;

  width: 25%;
`;

export const Logo = styled.img`
  height: auto;
  width: 50%;
  @media (max-width: 850px) {
    width: 50%;
  }
`;

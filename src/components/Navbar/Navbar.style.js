import styled, { css } from "styled-components";
import Icon from "../Icon";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 31px 0 36px;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: #222731;
        `};
  margin: 0;
`;

const DarkLightContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: var(--blue-light);
        `};
  :hover {
    ${(props) =>
      props.darkMode
        ? css`
            color: #90a4d4;
          `
        : css`
            color: #222731;
          `};
  }
`;

const DarkLightText = styled.span`
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  margin-right: 8px;
`;

const IconStyled = styled(Icon)`
  :hover {
    /* ${(props) =>
      props.darkMode
        ? css`
            color: #90a4d4;
          `
        : css`
            color: #222731;
          `}; */
    /* color: inherit; */
  }
`;

export { Navbar, Logo, DarkLightContainer, DarkLightText, IconStyled };

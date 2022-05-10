import styled, { css } from "styled-components";
import Icon from "../Icon";

const UserContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: var(--blue-light);
        `}
`;

const IconStyled = styled(Icon)`
  width: 20px;
  height: 20px;
`;

const ContactLink = styled.a`
  color: inherit;
  margin-left: 16px;
  font-weight: 400;
  font-size: 13px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${(props) =>
    !props.active &&
    css`
      pointer-events: none;
      cursor: default;
    `};

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export { UserContactItem, ContactLink, IconStyled };

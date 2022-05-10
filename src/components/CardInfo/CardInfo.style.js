import styled, { css } from "styled-components";

const CardInfo = styled.article`
  margin: 16px 0 80px;
  padding: 32px 24px 48px;
  border-radius: 15px;
  ${(props) =>
    props.darkMode
      ? css`
          background-color: var(--purple-dark);
        `
      : css`
          background-color: var(--white-light);
          box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
        `};

  @media (min-width: 1024px) {
    margin-top: 24px;
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export { CardInfo };

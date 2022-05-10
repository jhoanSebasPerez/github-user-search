import styled, { css } from "styled-components";

const UserFollowers = styled.div`
  padding: 18px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  ${(props) =>
    props.darkMode
      ? css`
          background-color: var(--black-dark);
        `
      : css`
          background-color: var(--lightgray-light);
        `};
  @media (min-width: 768px) {
    padding: 15px 32px;
  }

  @media (min-width: 1024px) {
    margin-left: 21%;
    margin-top: 32px;
  }
`;

const Item = styled.div`
  height: auto;
  flex: 1;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ItemTitle = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 11px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: var(--blue-light);
        `};
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

const ItemValue = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: var(--black-light);
        `};
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export { UserFollowers, Item, ItemTitle, ItemValue };

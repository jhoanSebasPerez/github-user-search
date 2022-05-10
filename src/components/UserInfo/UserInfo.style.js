import styled, { css } from "styled-components";

const UserInfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 33px;
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const UserDetails = styled.div`
  @media (min-width: 1024px) {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
`;

const NameContainer = styled.div`
  height: auto;
`;

const ImgContainer = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Name = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;

  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: var(--black-light);
        `}
  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

const Username = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  color: var(--primary-color);
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Joined = styled.p`
  margin-top: 6px;
  font-weight: 400;
  font-size: 13px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: var(--gray-light);
        `}
  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    text-align: right;
    width: 40%;
    margin-top: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 13px;
  ${(props) =>
    props.darkMode
      ? css`
          color: var(--white-dark);
        `
      : css`
          color: var(--blue-light);
        `}
  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    margin-left: 20.9%;
  }
`;

export {
  UserInfoHeader,
  ImgContainer,
  Img,
  Name,
  Username,
  Joined,
  Description,
  UserDetails,
  NameContainer,
};

import React from "react";
import {
  UserInfoHeader,
  ImgContainer,
  UserDetails,
  NameContainer,
} from "../UserInfo/UserInfo.style";
import { ContentLoading } from "./Loading.style";
import GlobalStyles from "../../styles/GlobalStyles";

const UserInfoLoadingComponent = ({ darkMode }) => {
  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <UserInfoHeader>
        <ImgContainer>
          <ContentLoading type="circular" />
        </ImgContainer>
        <UserDetails>
          <NameContainer>
            <ContentLoading type="big" />
            <ContentLoading type="medium" />
          </NameContainer>
          <ContentLoading type="medium" />
        </UserDetails>
      </UserInfoHeader>
      <ContentLoading type="xbig" />
    </>
  );
};

export default UserInfoLoadingComponent;

import React from "react";
import {
  UserFollowers,
  Item,
  ItemTitle,
} from "../UserFollowers/UserFollowers.style";
import { ContentLoading } from "./Loading.style";
import GlobalStyles from "../../styles/GlobalStyles";

const UserFollowersLoading = ({ darkMode }) => {
  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <UserFollowers darkMode={darkMode}>
        <Item>
          <ItemTitle darkMode={darkMode}>Repos</ItemTitle>
          <ContentLoading type="small" />
        </Item>
        <Item>
          <ItemTitle darkMode={darkMode}>Followers</ItemTitle>
          <ContentLoading type="small" />
        </Item>
        <Item>
          <ItemTitle darkMode={darkMode}>Following</ItemTitle>
          <ContentLoading type="small" />
        </Item>
      </UserFollowers>
    </>
  );
};

export default UserFollowersLoading;

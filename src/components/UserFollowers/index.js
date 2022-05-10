import {
  UserFollowers,
  Item,
  ItemTitle,
  ItemValue,
} from "./UserFollowers.style.js";

const UserFollowersComponent = ({ repos, followers, following, darkMode }) => {
  return (
    <UserFollowers darkMode={darkMode}>
      <Item>
        <ItemTitle darkMode={darkMode}>Repos</ItemTitle>
        <ItemValue darkMode={darkMode}>{repos}</ItemValue>
      </Item>
      <Item>
        <ItemTitle darkMode={darkMode}>Followers</ItemTitle>
        <ItemValue darkMode={darkMode}>{followers}</ItemValue>
      </Item>
      <Item>
        <ItemTitle darkMode={darkMode}>Following</ItemTitle>
        <ItemValue darkMode={darkMode}>{following}</ItemValue>
      </Item>
    </UserFollowers>
  );
};

export default UserFollowersComponent;

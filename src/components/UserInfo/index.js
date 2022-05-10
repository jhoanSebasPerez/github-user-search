import {
  UserInfoHeader,
  ImgContainer,
  Img,
  Name,
  Username,
  Joined,
  Description,
  UserDetails,
  NameContainer,
} from "./UserInfo.style.js";
import GlobalStyles from "../../styles/GlobalStyles";
import formatDate from "../../utils/formatDate";

const UserInfo = ({
  avatar,
  username,
  name,
  joined,
  description,
  darkMode,
}) => {
  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <UserInfoHeader>
        <ImgContainer>
          <Img src={avatar} alt={username} />
        </ImgContainer>
        <UserDetails>
          <NameContainer>
            <Name darkMode={darkMode}>{name}</Name>
            <Username>@{username}</Username>
          </NameContainer>
          <Joined darkMode={darkMode}>
            Joined {formatDate(new Date(joined))}
          </Joined>
        </UserDetails>
      </UserInfoHeader>
      <Description
        darkMode={darkMode}
        className="user-description"
        style={!description ? { opacity: 0.5 } : {}}
      >
        {!!description && description}
        {!description && "This profile has no bio"}
      </Description>
    </>
  );
};

export default UserInfo;

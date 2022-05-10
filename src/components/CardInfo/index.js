import { useContext, useEffect } from "react";
import axios from "axios";
import UserInfo from "../UserInfo";
import UserFollowers from "../UserFollowers";
import UserContact from "../UserContact";
import AppContext from "../../context/AppContext";
import { CardInfo } from "./CardInfo.style";
import LoadingComponent from "../Loading";

const API = "https://api.github.com/users/";

const CardInfoComponent = () => {
  const {
    state: { user, searchText, darkMode, loading },
    updateUser,
    notFoundUser,
    updateLoading,
  } = useContext(AppContext);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios(`${API}${searchText}`);
        updateUser(response.data);
      } catch (error) {
        notFoundUser();
      }
    }
    fetchUser();
  }, [searchText]);

  const {
    avatar_url: avatar,
    login: username,
    name,
    created_at: joined,
    bio: description,
    public_repos: repos,
    followers,
    following,
    location,
    blog: website,
    twitter_username: twitter,
    company,
  } = user;

  return loading ? (
    <LoadingComponent />
  ) : (
    <CardInfo darkMode={darkMode}>
      <UserInfo
        avatar={avatar}
        username={username}
        name={name}
        joined={joined}
        description={description}
        darkMode={darkMode}
      />
      <UserFollowers
        repos={repos}
        followers={followers}
        following={following}
        darkMode={darkMode}
      />
      <UserContact
        location={location}
        website={website}
        twitter={twitter}
        company={company}
        darkMode={darkMode}
      />
    </CardInfo>
  );
};
export default CardInfoComponent;

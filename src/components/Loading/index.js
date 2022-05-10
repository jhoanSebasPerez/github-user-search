import { useContext } from "react";
import UserContactLoading from "./UserContactLoading";
import UserFollowersLoading from "./UserFollowersLoading";
import UserInfoLoading from "./UserInfoLoading";
import { CardInfo } from "../CardInfo/CardInfo.style";
import AppContext from "../../context/AppContext";

const LoadingComponent = () => {
  const {
    state: { darkMode },
  } = useContext(AppContext);

  return (
    <CardInfo darkMode={darkMode}>
      <UserInfoLoading darkMode={darkMode} />
      <UserFollowersLoading darkMode={darkMode} />
      <UserContactLoading darkMode={darkMode} />
    </CardInfo>
  );
};

export default LoadingComponent;

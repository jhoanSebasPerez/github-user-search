import { UserContact } from "./UserContact.style.js";
import UserContactItem from "../UserContactItem";

const UserContactComponent = ({
  location,
  website,
  twitter,
  company,
  darkMode,
}) => {
  return (
    <UserContact>
      <UserContactItem darkMode={darkMode} content={location} type="location" />
      <UserContactItem darkMode={darkMode} content={website} type="website" />
      <UserContactItem darkMode={darkMode} content={twitter} type="twitter" />
      <UserContactItem darkMode={darkMode} content={company} type="company" />
    </UserContact>
  );
};

export default UserContactComponent;

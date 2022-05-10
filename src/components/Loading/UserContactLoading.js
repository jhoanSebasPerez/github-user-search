import React from "react";
import { UserContact } from "../UserContact/UserContact.style";
import UserContactItem from "../UserContactItem";

const UserContactLoading = ({ darkMode }) => {
  return (
    <UserContact>
      <UserContactItem darkMode={darkMode} loading type="location" />
      <UserContactItem darkMode={darkMode} loading type="website" />
      <UserContactItem darkMode={darkMode} loading type="twitter" />
      <UserContactItem darkMode={darkMode} loading type="company" />
    </UserContact>
  );
};

export default UserContactLoading;

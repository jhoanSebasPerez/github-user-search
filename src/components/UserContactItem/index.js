import { UserContactItem, ContactLink } from "./UserContactItem.style.js";
import Icon from "../Icon";
import GlobalStyles from "../../styles/GlobalStyles.js";
import { ContentLoading } from "../Loading/Loading.style.js";

const UserContactItemComponent = ({ content, type, darkMode, loading }) => {
  const targetUrl = {
    website: `https://${content}`,
    twitter: `https://twitter.com/${content}`,
    company: `https://github.com/${!!content && content.slice(1)}`,
  };

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <UserContactItem
        darkMode={darkMode}
        style={!content ? { opacity: 0.5 } : null}
      >
        <Icon type={type} className="contact" />
        {loading ? (
          <ContentLoading type="medium" style={{ margin: "0 0 0 16px" }} />
        ) : (
          <ContactLink
            active={type !== "location" && content}
            href={targetUrl[type]}
            target="_blank"
            rel="noreferrer"
          >
            {content || "Not Available"}
          </ContactLink>
        )}
      </UserContactItem>
    </>
  );
};

export default UserContactItemComponent;

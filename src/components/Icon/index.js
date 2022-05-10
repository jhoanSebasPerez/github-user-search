import { ReactComponent as IconCompany } from "./assets/icon-company.svg";
import { ReactComponent as IconDark } from "./assets/icon-moon.svg";
import { ReactComponent as IconSearch } from "./assets/icon-search.svg";
import { ReactComponent as IconLocation } from "./assets/icon-location.svg";
import { ReactComponent as IconWebsite } from "./assets/icon-website.svg";
import { ReactComponent as IconTwitter } from "./assets/icon-twitter.svg";
import { ReactComponent as SunIcon } from "./assets/icon-sun.svg";
import "./Icon.css";

const Icon = ({ type, className }) => {
  const typeIcon = {
    company: <IconCompany />,
    dark: <IconDark />,
    search: <IconSearch />,
    location: <IconLocation />,
    website: <IconWebsite />,
    twitter: <IconTwitter />,
    light: <SunIcon />,
  };

  return <div className={className}>{typeIcon[type]}</div>;
};

export default Icon;

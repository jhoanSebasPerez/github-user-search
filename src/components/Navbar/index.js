import { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Navbar,
  Logo,
  DarkLightContainer,
  DarkLightText,
  IconStyled,
} from "./Navbar.style";
import GlobalStyles from "../../styles/GlobalStyles";

const NavbarComponent = () => {
  const {
    state: { darkMode },
    updateDarkMode,
  } = useContext(AppContext);

  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <Navbar>
        <Logo darkMode={darkMode}>devfinder</Logo>

        <DarkLightContainer
          darkMode={darkMode}
          onClick={() => updateDarkMode()}
        >
          <DarkLightText darkMode={darkMode}>
            {darkMode ? "LIGHT" : "DARK"}
          </DarkLightText>
          <IconStyled type={darkMode ? "light" : "dark"} />
        </DarkLightContainer>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

import Navbar from "../Navbar";
import Search from "../Search";
import CardInfo from "../CardInfo";
import AppContext from "../../context/AppContext";
import useInitialState from "../../hooks/useInitialState";
import GlobalStyles from "../../styles/GlobalStyles";
import "./App.css";

function App() {
  const initialState = {
    loading: true,
    user: {},
    noResult: false,
    searchText: "octocat",
    darkMode: false,
  };

  return (
    <AppContext.Provider value={useInitialState(initialState)}>
      <GlobalStyles darkMode={initialState.darkMode} />
      <div className="container">
        <Navbar />
        <Search />
        <CardInfo />
      </div>
    </AppContext.Provider>
  );
}

export default App;

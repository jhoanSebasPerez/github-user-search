import { useState } from "react";

const useInitialState = (initialState) => {
  const [state, setState] = useState(initialState);

  const updateUser = (payload) => {
    setState({
      ...state,
      user: payload,
      noResult: false,
      loading: false,
    });
  };

  const updateSearchText = (payload) => {
    setState({ ...state, searchText: payload, loading: true });
  };

  const updateDarkMode = () => {
    setState({ ...state, darkMode: !state.darkMode });
  };

  const notFoundUser = () => {
    setState({ ...state, noResult: true, loading: false });
  };

  const updateLoading = () => {
    setState({ ...state, loading: !state.loading });
  };

  return {
    state,
    updateUser,
    updateSearchText,
    updateDarkMode,
    notFoundUser,
    updateLoading,
  };
};

export default useInitialState;

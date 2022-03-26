import {HeaderAcrion, HeaderState} from '../../types/header'
const SEARCH_INPUT_VALUE = "SEARCH_INPUT_VALUE";
const OPEN_INPUT_SEARCH = "OPEN_INPUT_SEARCH";


const initState: HeaderState = {
  inputValue: "",
  openInputSearch: false,
};

export const headerReducer = (state = initState, action: HeaderAcrion): HeaderState => {
  switch (action.type) {
    case "SEARCH_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "OPEN_INPUT_SEARCH":
      return { ...state, openInputSearch: !state.openInputSearch };

    default:
      return state;
  }
};

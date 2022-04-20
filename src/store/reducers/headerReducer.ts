import {HeaderAcrion, HeaderState} from '../../types/header'


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

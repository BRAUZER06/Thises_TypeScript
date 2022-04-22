const CLICK_TOGGLE_INPUT = "CLICK_TOGGLE_INPUT";
const INPUT_VALUE = "INPUT_VALUE";

const initState = {
  toggleInput: false,
  inputValue: "",
};

export const headerReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CLICK_TOGGLE_INPUT":
      return { ...state, toggleInput: action.payload };

    case "INPUT_VALUE":
      return { ...state, inputValue: action.payload };

    default:
      return state;
  }
};

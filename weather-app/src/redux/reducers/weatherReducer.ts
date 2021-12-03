import {
  WeatherState,
  WeatherActionTypes,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from "../store/types";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: "",
};

export const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state, // ******************NEED TO CHECK LATER *******************
        data: action.payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

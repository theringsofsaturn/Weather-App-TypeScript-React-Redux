import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  WeatherActionTypes,
  WeatherData,
  WeatherError,
  GET_WEATHER,
  SET_ERROR,
  SET_LOADING,
} from "../store/types";

export const getWeather =
  (city: string): ThunkAction<void, RootState, null, WeatherActionTypes> =>
  async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=972c3e9d41fd20885faecb49876e8ba6`
      );

      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      console.log("RES DATA HERE:", resData);
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (error) {
    //   dispatch({
    //     type: SET_ERROR,
    //     payload: error.message,
    //   });
    }
  };
getWeather("London");
export const setLoading = (): WeatherActionTypes => ({
  type: SET_LOADING,
});

export const setError = (error: string): WeatherActionTypes => ({
    type: SET_ERROR,
    payload: "Something went wrong",
});
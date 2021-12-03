import './App.css';
import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "./redux/store"
import { setAlert } from './redux/actions/alertActions';
import { setError } from './redux/actions/weatherActions';
import Search from './components/Search';
import Weather from './components/Weather';
import Alert from './components/Alert';


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const error = useSelector((state: RootState) => state.weather.error);
  const alert = useSelector((state: RootState) => state.alert.message);
  const loading = useSelector((state: RootState) => state.weather.loading);
  return (
    <div className="has-text-centered">
    <Search title="Search for the weather in your city 🌡" />
    {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}

    {alert && <Alert message={alert} onClose={() => dispatch(setAlert(''))} />}
    {error && <Alert message={error} onClose={() => dispatch(setError("Something went wrong"))} />}
  </div>
  );
}

export default App;

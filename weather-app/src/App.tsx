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
  return (
    <div className="App">
     
    </div>
  );
}

export default App;

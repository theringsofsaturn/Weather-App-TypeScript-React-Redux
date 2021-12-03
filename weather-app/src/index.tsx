import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import {Provider} from 'react-redux'; 
import store from './redux/store';



ReactDOM.render(
  <React.StrictMode>
    {/* make store available to app */}
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

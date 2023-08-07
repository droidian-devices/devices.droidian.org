import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NoRoot } from './errors';
import './styles/fontello/css/fontello.css';
import store from './store';

const target = document.getElementById('root');
if (!target) throw new NoRoot();

const root = ReactDOM.createRoot(target);

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

root.render(<Root />);

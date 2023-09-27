import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CurrentUserProvider } from "./CurrentUserContext"


ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './siemensIndex.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { myToggle } from './components/myToggle'
import { myDropdown } from './components/myDropdown'
import { selectTheme } from './components/selectTheme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <br />
    {myToggle()}
    <br />
    {myDropdown()}
    <br />
    <div style={{width:"200px"}}>
    {selectTheme()}
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

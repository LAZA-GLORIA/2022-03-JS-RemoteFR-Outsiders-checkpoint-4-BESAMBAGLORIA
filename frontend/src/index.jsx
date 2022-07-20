import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./contexts/MainContext";
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <MainContextProvider>
  <App />
  </MainContextProvider>    
  </BrowserRouter>,
  document.getElementById("root")
);
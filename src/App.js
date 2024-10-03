import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "./js/store";
import Home from "./Home.js";
import Formulaire from "./Formulaire.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Formulaire />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

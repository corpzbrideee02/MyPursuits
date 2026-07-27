import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
const Travel = lazy(() => import("./components/Travel"));
const Photography = lazy(() => import("./components/Photography"));
const Home = lazy(() => import("./components/Home"));
const Nature = lazy(() => import("./components/Nature"));
const Music = lazy(() => import("./components/Music"));
const Sidebar = lazy(() => import("./shared/Sidebar"));
const About = lazy(() => import("./components/About"));
const Arts = lazy(() => import("./components/Arts"));
const Film = lazy(() => import("./components/Film"));

/* import Travel from "./components/Travel";
import Photography from "./components/Photography";
import Home from "./components/Home";
import Nature from "./components/Nature";
import Music from "./components/Music";
import Sidebar from './components/Sidebar';
import About from './components/About';
import Arts from './components/Arts'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* page not found route */}
          <Route
            path="*"
            element={
              <main className="flex items-center justify-center" >
                <img src={require("./images/404_black.webp")} width="500" alt="Page Not found" />
              </main>
            } />
          <Route path="/" element={<Sidebar />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/travels" element={<Travel />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/film" element={<Film />} />
            <Route path="/music" element={<Music />} />
            <Route path="/arts" element={<Arts />} />

          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

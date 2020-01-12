import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import MainMenu from './MainMenu'
import ProductList from './ProductList'
import Slider from './Slider'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Living from "./Living";
import Dormitor from "./Dormitor";
import Iluminat from "./Iluminat";

function App() {
  return (
    <div className="App">
      <MainMenu width={ '20%' } />

      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" weight="120"/>
        <span><h2>
        La <i>αʋҽɳʂƙყ</i>, sustenabilitatea domină în tot ceea ce facem,
        </h2><h2>
  de la modul în care ne proiectăm mobilierul până la modul în care lucrăm și furnizăm produsele noastre.
        </h2></span>
      </header>
      <Slider />
      
     <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink to="/">Toate</NavLink></li>
          <li><NavLink to="/living">Living</NavLink></li>
          <li><NavLink to="/dormitor">Dormitor</NavLink></li>
          <li><NavLink to="/iluminat">Corpuri iluminat</NavLink></li>

        </ul>
        <div className="content">
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/living" component={Living}/>
          <Route exact path="/dormitor" component={Dormitor}/>
          <Route exact path="/iluminat" component={Iluminat}/>

        </div>
      </div>
    </HashRouter>
         
</div>
    
    
    
  );
}

export default App;

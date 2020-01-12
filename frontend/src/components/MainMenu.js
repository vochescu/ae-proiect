import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../styles/MainMenu.css';
 
class MainMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu theme='default'>
      
        <a id="products" className="menu-item" href="/"> ℋome</a>
        <a id="about" className="menu-item" href="/about">𝓐bout</a>
        <a id="contact" className="menu-item" href="/contact">𝓒ontact</a>
      </Menu>
    );
  }
}

export default MainMenu
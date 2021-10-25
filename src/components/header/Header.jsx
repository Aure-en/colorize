import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const Header = () => (
  <HeaderNav>
    <div id="logo">{logo}</div>
    <ul>
      <li><NavLink to="#">Home</NavLink></li>
      <li><NavLink to="#">Création</NavLink></li>
      <li className="btn-right">
        <select>
          <option value="formatColor">Hex</option>
          <option value="formatColor">Rgb</option>
          <option value="formatColor">Hsl</option>
          <option value="formatColor">Hsv</option>
          <option value="formatColor">Cmyk</option>
        </select>
      </li>
      <li className="btn-right">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </li>
      <li className="btn-right"><NavLink to="#">Sign Up</NavLink></li>
      <li className="btn-right"><NavLink to="#">Sign In</NavLink></li>
    </ul>
  </HeaderNav>

);

const HeaderNav = styled.div`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 15px 10px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: red;
}

li.active {
  background-color: #333;
}

li.btn-right {
  float: right;
}

#logo_fixe { position : fixed; left : 10px; top : 10px; }

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 25px;
  height: 15px;
  transform: translateY(100%);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 11px;
  width: 11px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(11px);
  -ms-transform: translateX(11px);
  transform: translateX(11px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`;

export default Header;

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
        <select className="select-css">
          <option>Hex</option>
          <option>Rgb</option>
          <option>Hsl</option>
          <option>Hsv</option>
          <option>Cmyk</option>
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
  padding-left: 40px
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

.select-css {
display: block;
font-size: 12px;
font-family: sans-serif;
font-weight: 700;
color: #444;
line-height: 1;
padding: .4em 1.4em .4em .8em;
width: 81%;
box-sizing: border-box;
margin: 10px;
border: 1px solid #aaa;
box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
border-radius: .5em;
-moz-appearance: none;
-webkit-appearance: none;
appearance: none;
background-color: #fff;
background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
background-repeat: no-repeat, repeat;
background-position: right .7em top 50%, 0 0;
background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
display: none;
}
.select-css:hover {
border-color: #888;
}
.select-css:focus {
border-color: #aaa;
box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
box-shadow: 0 0 0 3px -moz-mac-focusring;
color: #222;
outline: none;
}
.select-css option {
font-weight:normal;
}
`;

export default Header;

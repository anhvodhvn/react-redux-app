import React from 'react';
const NavMultiLevel = ({}) => {
  return (
    <div className="main-nav-level">
        <ul>
            <li className="div-visible"><a href="#">Home</a></li>
            <li className="div-visible"><a href="#">HTML & CSS</a>
              <ul>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a>
                  <ul>
                    <li><a href="#">Resets</a></li>
                    <li><a href="#">Grids</a></li>
                    <li><a href="#">Frameworks</a></li>
                  </ul>
                </li>
                <li><a href="#">JavaScript</a>
                  <ul>
                    <li><a href="#">Ajax</a></li>
                    <li><a href="#">jQuery</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Java Script <b className="caret"></b></a>
              <ul>
                <li><a href="#">JQuery</a></li>
                <li><a href="#">Knockout Js</a></li>
                <li>
                  <a href="#">Angular<b className="caret caret-right"></b></a>
                  <ul>
                    <li><a href="#">Angular Js</a></li>
                    <li><a href="#">Angular 1-5x</a></li>
                  </ul>
                </li>
                <li><a href="#">React Js</a></li>
                <li>
                  <a href="#">Node Js <b className="caret caret-right"></b></a>
                  <ul>
                    <li><a href="https://expressjs.com/">Express Js</a></li>
                    <li><a href="http://koajs.com/">Koa Js</a></li>
                    <li><a href="http://hapijs.com">Hapi Js</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="div-visible"><a href="#">About Us</a></li>
        </ul>
    </div>
  );
};

export default NavMultiLevel;

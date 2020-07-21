import React from "react";
import "../assets/styles/components/_sidebars.scss";

const Sidebar = () => {
  return (
    <div className="sidebar--listado">
      <h3>Noticias Destacadas</h3>
      <ul>
        <li>
          <a href="#">
            <span className="sidebar--listado__numero">1</span>
            <span className="sidebar--listado__titulo">
              GTA VI: Filtraciones que son bastante dudosas
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sidebar--listado__numero">2</span>
            <span className="sidebar--listado__titulo">
              Secuela de The Legend of Zelda: Breath of the Wild anunciada en el
              E3 2019
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sidebar--listado__numero">3</span>
            <span className="sidebar--listado__titulo">
              Red Dead Online recibe actualización masiva y sale de Beta
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";

const Box = ({
  imagen,
  detail,
  title,
  positionBox,
  sizeBox,
  category,
  stats,
}) => {

  console.log('hola');
  return (
    <a className={`caja--con-fondo ${sizeBox} ${positionBox}`}>
      <div className="caja__imagen">
        <img src={imagen} />
      </div>
      <div className="caja--con-fondo__contenido">
        <span className="caja--con-fondo__categoria">{category}</span>
        <h2>{title}</h2>
        <p>{detail}</p>
      </div>
      <div className="caja--con-fondo__stats">
        <ul>
          <li>
            <i className="fas fa-share"></i>
            <span>{stats.shared}</span>
          </li>
          <li>
            <i className="fas fa-eye"></i>
            <span>{stats.views}</span>
          </li>
          <li>
            <i className="fas fa-comment-alt"></i>
            <span>{stats.comments}</span>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default Box;

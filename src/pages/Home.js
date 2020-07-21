import React from "react";
import "../assets/styles/components/_homepages.scss";
import Imagen from "../assets/images/cyberpunk-2077.jpg";
import Imagen2 from "../assets/images/rdr2.jpg";
import Imagen3 from "../assets//images/ff.jpg";
import Imagen4 from "../assets/images/xbox.jpg";
import Imagen5 from "../assets/images/fortnite.jpg";
import Imagen6 from "../assets/images/zelda.jpg";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";

import Box from "../components/Box";

const boxes = [
  {
    id: 1,
    imagen: Imagen,
    title: "Cyberpunk 2077 tiene tres prólogos distintos",
    detail: `En Cyberpunk 2077 los jugadores podrán seleccionar entre tres
            historias de origen diferentes, cada una presentando una ubicación
            de partida distinta para su personaje.`,
    positionBox: "",
    sizeBox: "caja--grande",
    category: "Destacadas",
    stats: {
      shared: 275,
      views: 275,
      comments: 12,
    },
  },
  {
    id: 2,
    imagen: Imagen2,
    title: "Red Dead Redemption 2 llegará a PC",
    detail: "",
    positionBox: "caja-rdr2",
    sizeBox: "caja--pequena",
    category: "PS4",
    stats: {
      shared: 245,
      views: 434,
      comments: 51,
    },
  },
  {
    id: 3,
    imagen: Imagen3,
    title: "Final Fantasy XIV recibirá una serie live-action en televisión",
    detail: "",
    positionBox: "caja-ff",
    sizeBox: "caja--pequena",
    category: "PS4",
    stats: {
      shared: 245,
      views: 434,
      comments: 51,
    },
  },
  {
    id: 4,
    imagen: Imagen4,
    title: "Conoce las actualizaciones de XBOX Game Pass",
    detail: "",
    positionBox: "caja-xbox",
    sizeBox: "caja--pequena",
    category: "XBOX",
    stats: {
      shared: 245,
      views: 434,
      comments: 51,
    },
  },
  {
    id: 5,
    imagen: Imagen5,
    title: "Fortnite une fuerzas con Stranger Things",
    detail: "",
    positionBox: "caja-fortnite",
    sizeBox: "caja--pequena",
    category: "FORTNITE",
    stats: {
      shared: 245,
      views: 434,
      comments: 51,
    },
  },
  {
    id: 6,
    imagen: Imagen6,
    title:
      "Secuela de The Legend of Zelda: Breath of the Wild anunciada en el E3 2019",
    detail: "",
    positionBox: "caja-zelda",
    sizeBox: "caja--mediana",
    category: "Switch",
    stats: {
      shared: 245,
      views: 434,
      comments: 51,
    },
  },
];

const Home = () => {
  return (
    <section className="contenedor--home">
      <div className="container">
        {boxes.map((box) => {
          return <Box key={box.id} {...box} />;
        })}
        <Banner />
        <Sidebar />
      </div>
    </section>
  );
};

export default Home;

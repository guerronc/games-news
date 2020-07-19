import React from "react";
import "../assets/styles/components/_homepages.scss";
import Imagen from "../assets/images/cyberpunk-2077.jpg";
import Imagen2 from "../assets/images/rdr2.jpg";
import Imagen3 from "../assets//images/ff.jpg";
import Imagen4 from "../assets/images/xbox.jpg";
import Imagen5 from "../assets/images/fortnite.jpg";
import Imagen6 from "../assets/images/zelda.jpg";

const Home = () => {
  return (
    <section class="contenedor--home">
      <a class="caja--con-fondo caja--grande">
        <div class="caja__imagen">
          <img src={Imagen} />
        </div>
        <div class="caja--con-fondo__contenido">
          <span class="caja--con-fondo__categoria">Destacadas</span>
          <h2>Cyberpunk 2077 tiene tres prólogos distintos</h2>
          <p>
            En Cyberpunk 2077 los jugadores podrán seleccionar entre tres
            historias de origen diferentes, cada una presentando una ubicación
            de partida distinta para su personaje.
          </p>
        </div>
        <div class="caja--con-fondo__stats">
          <ul>
            <li>
              <i class="fas fa-share"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-eye"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-comment-alt"></i>
              <span>12</span>
            </li>
          </ul>
        </div>
      </a>

      <a class="caja--con-fondo caja--pequena caja-rdr2">
        <div class="caja__imagen">
          <img src={Imagen2} />
        </div>
        <div class="caja--con-fondo__contenido">
          <span class="caja--con-fondo__categoria">PS4</span>
          <h2>Red Dead Redemption 2 llegará a PC</h2>
        </div>
        <div class="caja--con-fondo__stats">
          <ul>
            <li>
              <i class="fas fa-share"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-eye"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-comment-alt"></i>
              <span>12</span>
            </li>
          </ul>
        </div>
      </a>

      <div class="banner--homepage">
        <h3>
          Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa.
        </h3>
        <p>
          Dos nuevos trailers de Apex Legends muestran lo que nos espera en la
          Temporada 2 del battle royale de Respawn.
        </p>
        <a class="button">Leer mas</a>
      </div>

      <a class="caja--con-fondo caja--pequena caja-ff">
        <div class="caja__imagen">
          <img src={Imagen3} />
        </div>
        <div class="caja--con-fondo__contenido">
          <span class="caja--con-fondo__categoria">PS4</span>
          <h2>
            Final Fantasy XIV recibirá una serie live-action en televisión
          </h2>
        </div>
        <div class="caja--con-fondo__stats">
          <ul>
            <li>
              <i class="fas fa-share"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-eye"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-comment-alt"></i>
              <span>12</span>
            </li>
          </ul>
        </div>
      </a>

      <a class="caja--con-fondo caja--pequena caja-xbox">
        <div class="caja__imagen">
          <img src={Imagen4} />
        </div>
        <div class="caja--con-fondo__contenido">
          <span class="caja--con-fondo__categoria">XBOX</span>
          <h2>Conoce las actualizaciones de XBOX Game Pass</h2>
        </div>
        <div class="caja--con-fondo__stats">
          <ul>
            <li>
              <i class="fas fa-share"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-eye"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-comment-alt"></i>
              <span>12</span>
            </li>
          </ul>
        </div>
      </a>

      <a class="caja--con-fondo caja--pequena caja-fortnite">
        <div class="caja__imagen">
          <img src={Imagen5} />
        </div>
        <div class="caja--con-fondo__contenido">
          <span class="caja--con-fondo__categoria">FORTNITE</span>
          <h2>Fortnite une fuerzas con Stranger Things</h2>
        </div>
        <div class="caja--con-fondo__stats">
          <ul>
            <li>
              <i class="fas fa-share"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-eye"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-comment-alt"></i>
              <span>12</span>
            </li>
          </ul>
        </div>
      </a>

      <a class="caja--con-fondo caja--mediana caja-zelda">
        <div class="caja__imagen">
          <img src={Imagen6} />
        </div>
        <div class="caja--con-fondo__contenido">
          <span class="caja--con-fondo__categoria">Switch</span>
          <h2>
            Secuela de The Legend of Zelda: Breath of the Wild anunciada en el
            E3 2019
          </h2>
        </div>
        <div class="caja--con-fondo__stats">
          <ul>
            <li>
              <i class="fas fa-share"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-eye"></i>
              <span>275</span>
            </li>
            <li>
              <i class="fas fa-comment-alt"></i>
              <span>12</span>
            </li>
          </ul>
        </div>
      </a>
      
      <div class="sidebar--listado">
        <h3>Noticias Destacadas</h3>
        <ul>
          <li>
            <a href="#">
              <span class="sidebar--listado__numero">1</span>
              <span class="sidebar--listado__titulo">
                GTA VI: Filtraciones que son bastante dudosas
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="sidebar--listado__numero">2</span>
              <span class="sidebar--listado__titulo">
                Secuela de The Legend of Zelda: Breath of the Wild anunciada en
                el E3 2019
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="sidebar--listado__numero">3</span>
              <span class="sidebar--listado__titulo">
                Red Dead Online recibe actualización masiva y sale de Beta
              </span>
            </a>
          </li>
        </ul>
      </div>
    
    </section>
  );
};

export default Home;

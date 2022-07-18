import "./Content.css";
import slider1 from "./img/slider1.png";
import slider2 from "./img/slider2.png";
import slider3 from "./img/slider3.png";
import slider4 from "./img/slider4.png";
import slider5 from "./img/slider5.png";
import slider6 from "./img/slider6.jpg";

export default function Content() {
  return (
    <main>
      <div className="univers">
        <ul id="hadUnivres">
          <li>
            <a href="">
              <span className="icon-univers">
                <i className=" fa-solid fa-dog "></i>
              </span>
              <span className="text-univers">Chiens</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="icon-univers">
                <i className=" fa-solid fa-cat"></i>
              </span>
              <span className="text-univers">Chats</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="icon-univers">
                <i className="fa-solid fa-fish-fins"></i>
              </span>
              <span className="text-univers">Poissons</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="icon-univers">
                <i className="fa-solid fa-dove"></i>
              </span>
              <span className="text-univers">Oiseaux</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="icon-univers">
                <i className="fa-solid fa-dog"></i>
              </span>
              <span className="text-univers">Rongeurs </span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="icon-univers">
                <i className="fa-solid fa-worm"></i>
              </span>
              <span className="text-univers">Reptiles </span>
            </a>
          </li>
        </ul>
      </div>
      <section className="slide">
        <div className="slider">
          <div className="image">
            <img src={slider1} alt="" />
            <img src={slider2} alt="" />
            <img src={slider3} alt="" />
            <img src={slider4} alt="" />
            <img src={slider5} alt="" />
            <img src={slider6} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

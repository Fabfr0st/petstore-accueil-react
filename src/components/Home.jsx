import "./Content.css";

export default function Home() {
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
            <img src="./assets/img/slider1.png" alt="" />
            <img src="./assets/img/slider2.png" alt="" />
            <img src="./assets/img/slider3.png" alt="" />
            <img src="./assets/img/slider4.png" alt="" />
            <img src="./assets/img/slider5.png" alt="" />
            <img src="./assets/img/slider6.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

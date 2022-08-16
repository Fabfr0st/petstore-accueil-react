import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav id="navp">
        <div id="logoNav">
          <Link to="/">
            <img src="./assets/img/logo1.png" alt="logo de petstore  " />
          </Link>
        </div>
        <div>
          {/* <div className="container"></div> */}
          <ul id="headMenu">
            <li>
              <div>
                <input type="search" placeholder="Rechercher ..." />
                <button type="submit">Search</button>
              </div>
            </li>
            <li>
              <Link to="/">
                <div className="icon">
                  <i className="fa-solid fa-house fa-2xl"></i>
                </div>
                <div>
                  <span>Home</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <div className="icon">
                  <i className="fa-solid fa-phone fa-2xl"></i>
                </div>
                <div>
                  <span>Contact</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/connexion">
                <div className="icon">
                  <i className="fa-solid fa-user fa-2xl"></i>
                </div>
                <div>
                  <span>Connexion</span>
                </div>
              </Link>
            </li>
            <li>
              <a href="">
                <div className="icon">
                  <i className="fa-solid fa-basket-shopping fa-2xl"></i>
                </div>
                <div>
                  <span>Panier</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

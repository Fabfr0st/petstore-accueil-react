import "./Header.css";
import logo from "./img/logo1.png";

export default function Header() {
  return (
    <header>
      <nav id="navp">
        <div id="logoNav">
          <a href="index.php?page=accueil">
            <img src={logo} alt="logo de petstore  " />
          </a>
        </div>
        <div>
          <ul id="headMenu">
            <div className="container">
              <input type="search" placeholder="Rechercher ..." />
              <button type="submit">Search</button>
            </div>
            <li>
              <a href="index.php?page=accueil">
                <div className="icon">
                  <i className="fa-solid fa-house fa-2xl"></i>
                </div>
                <div>
                  <span>Home</span>
                </div>
              </a>
            </li>

            <li>
              <a href="index.php?page=contact">
                <div className="icon">
                  <i className="fa-solid fa-phone fa-2xl"></i>
                </div>
                <div>
                  <span>Contact</span>
                </div>
              </a>
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

            <li>
              <a href="index.php?page=connexion">
                <div className="icon">
                  <i className="fa-solid fa-user fa-2xl"></i>
                </div>
                <div>
                  <span>Connexion</span>
                </div>
              </a>
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

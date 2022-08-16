import "./contact.css";
import "./form.css";

export default function Contact() {
  return (
    <>
      <div className="hearder">
        <h2>Contacter Nous</h2>
      </div>

      <div className="box">
        <div className="left">
          <div className="box-left">
            <form action="index.php?page=contact" method="post">
              <div className="form-group">
                <label for="Nom"> Nom :</label>
                <input type="text" name="Nom" required />
              </div>
              <div className="form-group">
                <label for="mail ">Email:</label>
                <input type="email" name="mail" required />
              </div>
              <div className="form-group">
                <label for="Numéro de télephone">Numéro de téléphone: </label>
                <input type="text" name="Numéro de télephone" required />
              </div>
              <div className="form-group">
                <label for="msg">Comment pouvons-nous vous aider ? : </label>
                <textarea id="msg" name="user_message"></textarea>
              </div>
              <div className="toto">
                <input type="submit" value="Envoyer" id="submit" />
              </div>
            </form>
          </div>
        </div>

        <div className="container-right">
          <div className="box-right">
            <ul id="right-column">
              <li>
                <div className="icone">
                  <i className="fa-solid fa-location-dot"></i> Address: 194 Rue de
                  la Ronce, 76230 Isneauville{" "}
                </div>
              </li>
              <li>
                <div className="icone">
                  <i className="fa-solid fa-phone"></i> Téléphone: 07 50 50 50 50{" "}
                </div>
              </li>
              <li>
                <div className="icone">
                  <i className="fa-solid fa-envelope-circle-check"></i> Email:
                  contact@petstor.com
                </div>
              </li>
            </ul>

            <ul id="reseauxSociaux">
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i className="fa-brands fa-linkedin  fa-2xl"></i>{" "}
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i className="fa-brands fa-facebook-square  fa-2xl"></i>{" "}
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i className="fa-brands fa-twitter fa-2xl"></i>
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i className="fa-brands fa-instagram fa-2xl"></i>{" "}
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

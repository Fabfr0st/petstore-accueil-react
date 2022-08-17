import "./contact.css";
import "./form.css";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = { nom, email, tel, message };
    axios
      .post("http://localhost:1517/contacts", contacts)
      .then((reponse) => {
        console.log(reponse);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (submitted) {
    return (
      <>
        <div className="hearder">
          <h2>Votre message à bien été transmis.</h2>
        </div>
      </>
    );
  }

  return (
    <div className="contact">
      <div className="hearder">
        <h2>Nous Contacter</h2>
      </div>

      <div className="box">
        <div className="left">
          <div className="box-left">
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="Nom"> Nom :</label>
                <input
                  type="text"
                  name="nom"
                  onChange={(event) => setNom(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="mail ">Email:</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="Numéro de télephone">Numéro de téléphone: </label>
                <input
                  type="text"
                  name="tel"
                  onChange={(e) => setTel(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="msg">Comment pouvons-nous vous aider ? : </label>
                <textarea
                  id="msg"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
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
                  <i className="fa-solid fa-location-dot"></i> Address: 194 Rue
                  de la Ronce, 76230 Isneauville
                </div>
              </li>
              <li>
                <div className="icone">
                  <i className="fa-solid fa-phone"></i> Téléphone: 07 50 50 50
                  50
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
                    <i className="fa-brands fa-linkedin  fa-2xl"></i>
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="iconeReseaux">
                    <i className="fa-brands fa-facebook-square  fa-2xl"></i>
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
                    <i className="fa-brands fa-instagram fa-2xl"></i>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

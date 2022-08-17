import "./inscription.css";
import "./form.css";
import axios from "axios";
import { useState } from "react";

export default function Inscription() {
  const [submitted, setSubmitted] = useState(false);
  const [titre, setTitre] = useState();
  const [prenom, setPrenom] = useState();
  const [nom, setNom] = useState();
  const [pwd, setPwd] = useState();
  const [adresse, setAdresse] = useState();
  const [email, setCp] = useState();
  const [cp, setEmail] = useState();
  const [ville, setVille] = useState();
  const [tel, setTel] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inscription = {
      titre,
      prenom,
      nom,
      pwd,
      adresse,
      email,
      cp,
      ville,
      tel,
    };
    axios
      .post("http://localhost:1517/inscriptions", inscription)
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
          <h2>Vous êtes inscrit.</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="hearder">
        <h2>Inscription</h2>
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="box">
          <div className="left-box">
            <div className="titre">
              <h3>Infomation Générales</h3>
            </div>

            <div>
              <select
                className="select"
                name="titre"
                onChange={(event) => setTitre(event.target.value)}
              >
                <option value="1" selected>
                  Title
                </option>
                <option value="H">Homme</option>
                <option value="F">Femme</option>
                <option value="N">Non précisé</option>
              </select>
            </div>

            <div className="ligne">
              <div>
                <label for="prenom">Votre Prénom :</label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  onChange={(event) => setPrenom(event.target.value)}
                />
              </div>

              <div>
                <label for="nom">Votre Nom :</label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
            </div>

            <div>
              <label for="email">Email :</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div>
              <label for="emailConfirm">Email Confirm :</label>
              <input type="email" name="emailConfirm" id="emailConfirm" />
            </div>

            <div className="ligne2">
              <div>
                <label for="password1">Password :</label>
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  onChange={(event) => setPwd(event.target.value)}
                />
              </div>

              <div>
                <label for="password2">Password Confirm :</label>
                <div>
                  <input type="password" name="password2" id="password2" />
                </div>
              </div>
            </div>
          </div>

          <div className="right-box">
            <div className="titre">
              <h3>Contact Details</h3>
            </div>
            <div>
              <label for="adresse">Adresse :</label>
              <textarea
                type="text"
                name="adresse"
                id="adresse"
                cols="30"
                rows="3"
                onChange={(event) => setAdresse(event.target.value)}
              ></textarea>
            </div>
            <div>
              <label for="complementsadresse">Compléments adresse :</label>
              <textarea
                type="text"
                name="adressePlus"
                id="complementsadresse"
                cols="30"
                rows="3"
              ></textarea>
            </div>

            <div className="ligne3">
              <div>
                <label for="codepostal">Code Postal :</label>
                <input
                  type="text"
                  name="codePostal"
                  id="codePostal"
                  onChange={(event) => setCp(event.target.value)}
                />
              </div>

              <div>
                <label for="ville">Ville :</label>
                <input
                  type="text"
                  name="ville"
                  id="ville"
                  onChange={(event) => setVille(event.target.value)}
                />
              </div>
            </div>

            <div className="ligne4">
              <div>
                <label for="telephone">Téléphone :</label>
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  onChange={(event) => setTel(event.target.value)}
                />
              </div>
            </div>

            <div>
              <label for="form2Example3"></label>
              <input type="checkbox" value="" id="form2Example3c" />
              J'accepte les{" "}
              <a href="#!" className="text-white">
                <u>termes et conditions</u>
              </a>{" "}
              de votre site.
            </div>

            <div className="champValid">
              <input type="reset" value="Effacer" />
              <input type="submit" value="Envoyer" />
            </div>
          </div>
        </div>
        <input type="hidden" name="frmInscription" />
      </form>
    </>
  );
}

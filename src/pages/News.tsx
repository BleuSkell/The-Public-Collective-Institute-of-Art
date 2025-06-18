import { useState } from "react";
import "../css/News.css";

function News() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Naam is verplicht.";
    }

    if (!email.trim()) {
      newErrors.email = "E-mailadres is verplicht.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ongeldig e-mailadres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Aanmelding verstuurd:", { name, email });
      setSubmitted(true);
      setName("");
      setEmail("");
      setErrors({});
    }
  };

  return (
    <div>
      <main>
        <h1 className="newspage-title">Nieuws</h1>

        <div className="news-alignment">
          <div className="news-container">
            <div className="news-item">
              <h1>
                Nieuwe updates aan de website komen eraan
              </h1>

              <p>
                We zijn bezig met het finetunen van de ervaring op The Public Collective Institute of Art. 
                Binnenkort kun je sneller navigeren door tentoonstellingen, wordt het archief beter doorzoekbaar 
                en voegen we nieuwe manieren toe om digitaal werk te bekijken — inclusief fullscreen-modus, 
                ambient audio en een 'slow scroll'-optie. De kunst blijft centraal, de interface wordt stiller.
                Stay tuned.
              </p>
            </div>

            <div className="news-item">
              <h1>
                Binnenkort: exclusieve kunstwerken komen op de site
              </h1>

              <p>
                We werken samen met een aantal makers aan digitale werken die alleen via deze site te zien zullen zijn. 
                Denk aan interactieve webpagina’s, AI-gegenereerde poëzie, animaties die reageren op jouw tijdzone en meer.  
                Deze exclusieve werken verschijnen vanaf eind juli — je hoeft niets te downloaden, gewoon kijken.
              </p>
            </div>

            <div className="news-item">
              <h1>
                Discussie: de website uitbreiden met user posts
              </h1>

              <p>
                Wat als jij ook iets kon toevoegen? We denken erover na om gebruikers toe te laten hun eigen 
                digitale werk, gedachten of visuele experimenten te posten. Open voor iedereen, met ruimte voor 
                experiment en samenzijn. Maar: hoe voorkomen we chaos? Wat moeten de grenzen zijn (als die er zijn)?  
                Laat je stem horen — via mail of DM op onze socials.
              </p>
            </div>

            <div className="news-item">
              <h1>
                Nieuwe samenwerking: kunstenaars & code
              </h1>

              <p>
                We zijn gestart met een kleine serie waarin kunstenaars samenwerken met developers, designers en AI’s.  
                Wat gebeurt er als een schilder werkt in HTML? Of als een gedicht realtime herschreven wordt door een algoritme?  
                Eerste projecten verschijnen binnenkort op de site.
              </p>
            </div>

            <div className="news-item">
              <h1>
                De site werkt ook op je telefoon (echt!)
              </h1>

              <p>
                Het heeft even geduurd, maar we hebben onze mobiele versie verbeterd.  
                Kunst scrollt nu soepeler, teksten zijn leesbaar zonder loep, en fullscreen is écht fullscreen.  
                Want ook op de bank of in de trein verdien je een digitale kunstervaring zonder gedoe.
              </p>
            </div>
          </div>
        </div>

        <div className="signup-container">
          <div className="signup-news">
            <h2>Meld je aan voor onze nieuwsbrief!</h2>
            <p>Krijg wekelijks nieuwe updates van de website, kunst-wereld, of soortgelijke onderwerpen</p>

            {submitted && <p style={{ color: "green" }}>Bedankt voor je aanmelding!</p>}

            <form onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="naam"
                  className="signup-input"
                />
                {errors.name && <p className="input-error">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e-mail adres"
                  className="signup-input"
                />
                {errors.email && <p className="input-error">{errors.email}</p>}
              </div>

              <button type="submit" className="signup-button">Aanmelden</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default News;
// Import des outils d'animation de framer-motion
import { motion, transform } from 'framer-motion'

// Import des composants internes
import { Demarche } from './Demarche';
import { Compte } from './Compte';
import { Actualite } from './Actualite';
import { CommentNousAider } from './Aide';
import { Footer } from './Footer';

// Import des hooks React
import { lazy, Suspense, useState } from 'react';

// Import de l’image utilisée dans la section principale
import imageFille from './assets/feminin-removebg-preview.png';

// Chargement dynamique d’un composant Home (à noter : potentiellement redondant avec le composant actuel)
const Actualit = lazy(() => import("./Home"));

// Fonction pour charger une page dynamiquement avec un fallback pendant le chargement
function charge_page_dom(){
 return(
  <>
   <Suspense fallback={<div>Chargement en cours</div>}>
    <Actualit/>
  </Suspense>
  </>
 )
}

// Composant principal de la page d'accueil
export function Home() {

  // Fonction pour faire défiler la page jusqu'à une section spécifique
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // État pour gérer l'affichage conditionnel (ex: page Actualit après don)
  const [chargement , setchargement] = useState(false);

  return (
    <section className='flex flex-col gap-10'>

      {/* -------- HEADER -------- */}
      <header className="flex justify-between items-center w-[90%] mx-auto">
        
        {/* Logo et titre */}
        <div className="flex gap-[10px] items-center">
          <div style={{ width: "50px", height: "auto"}}>
            {/* SVG = cœur = logo */}
            <svg viewBox="0 0 37 32" fill="#ff05de" stroke="#ff05de" width="40" height="40">
              <path d="..."/>
            </svg>
          </div>
          <h1 className="text-[#ff05de] font-bold text-xl">La Féminité</h1>
        </div>

        {/* Menu de navigation (visible sur écran moyen et plus) */}
        <div>
          <ul className="flex gap-5 liste-none items-center hidden md:flex">
            <li onClick={() => scrollToSection("qui_somme_nous")}>Qui sommes nous ?</li>
            <li onClick={() => scrollToSection("aide")}>Nous soutenir</li>
            <li onClick={() => scrollToSection("actualite")}>Nos actualités</li>
            <li onClick={() => scrollToSection("qui_somme_nous")}>
              <button>Espace bénévolats</button>
            </li>
          </ul>
        </div>
      </header>

      {/* -------- SECTION DE PRÉSENTATION -------- */}
      <section id='qui_somme_nous' className="lg:flex-row flex flex-col gap-40 flex-col-reverse justify-around items-center">
        
        {/* Texte d’introduction avec animation à l'apparition */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className='lg:w-[40%] w-[90%] mx-auto'
        >
          <h1 style={{ fontSize: 50 }}>Humilité, dignité , partage</h1>
          <p style={{ fontSize: 20 }}>
            Aidons les femmes les plus démunies à conserver un peu leurs féminités
          </p>
          {/* Bouton déclenchant l'affichage de la page dynamique */}
          <button onClick={() => setchargement(true)}>Faire un don</button>
          {/* Affichage conditionnel de la page */}
          {chargement && charge_page_dom()}
        </motion.div>

        {/* Carte avec image animée */}
        <motion.div
          className='md:w-[500px] overflow-hidden flex justify-center items-center relative w-full h-[400px] -mb-[120px]'
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
        >
          {/* Forme de fond stylisée */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            clipPath: `path("...")`,
            background: `linear-gradient(306deg, #FF05B4, hsl(10, 100%, 50%))`
          }} />

          {/* Carte contenant l’image */}
          <motion.div
            variants={{
              offscreen: { y: 300 },
              onscreen: {
                y: 50, rotate: -10,
                transition: { type: "spring", bounce: 0.4, duration: 0.8 }
              }
            }}
            className='md:w-[300px] items-center rounded-md w-[70%] bg-[#f5f5f5] relative shadow-[...] overflow-visible'
          >
            <img src={imageFille} alt="femme" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
        </motion.div>

        {/* Réseaux sociaux (icônes SVG animées) */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          viewport={{ amount: 0.8 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="overflow-hidden flex flex-col gap-[10px] absolute right-0"
        >
          <div className="reseau">{/* Facebook */}<svg>...</svg></div>
          <div className="reseau">{/* YouTube */}<svg>...</svg></div>
          <div className="reseau">{/* Instagram */}<svg>...</svg></div>
        </motion.div>

      </section>

      {/* -------- SECTION : NOTRE DÉMARCHE -------- */}
      <section className='flex flex-col gap-10' id="demarche">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h1 className="font-bold text-2xl">Notre démarche</h1>
          <p className='lg:w-[60%]'>Fémininité sans abri lutte contre la précarité en distribuant des kits d’hygiène aux plus démunies.</p>
        </motion.div>

        {/* Composant Démarche */}
        <div><Demarche /></div>

        {/* Composant Compte (statistiques ?) */}
        <div id="compte"><Compte /></div>

        {/* Section Actualités */}
        <div><Actualite /></div>

        {/* Section Aides + Footer */}
        <div style={{ backgroundColor: "#f8eaf4" }}>
          <div><CommentNousAider /></div>
          <div><Footer /></div>
        </div>
      </section>

    </section>
  );
}

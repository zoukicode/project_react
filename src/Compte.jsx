import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Composant principal "Compte"
 * Affiche des statistiques animées avec Framer Motion
 */
export function Compte() {
  return (
    <div className="flex flex-col gap-10 py-16 px-2" id="compte">
      <h1 className="font-bold text-2xl text-center ">
        Féminité sans abri, c'est aussi...
      </h1>

      <div className="flex justify-center flex-wrap gap-8">
        {statistique.map((element, index) => (
          <AnimatedStat
            key={index}
            nombre={element.nombre}
            description={element.description}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Composant enfant pour l'animation d'un nombre
 */
function AnimatedStat({ nombre, description }) {
  const valeur = useMotionValue(0);
  const [affichage, setAffichage] = useState(0);
  const valeurFinale = parseFloat(nombre.replace(',', '.'));

  const animer = () => {
    valeur.set(0); // Redémarre l'animation
    animate(valeur, valeurFinale, {
      duration: 2,
      onUpdate: (v) => {
        setAffichage(Number(v).toFixed(0)); // Affiche sans décimale
      },
    });
  };

  return (
    <motion.div
      onViewportEnter={animer}
      viewport={{ once: true, amount: 0.6 }}
      className="text-center min-w-[150px]"
    >
      <motion.h1 className="text-[#e7009a] text-3xl font-bold">
        {new Intl.NumberFormat('fr-FR').format(affichage)}
      </motion.h1>
      <p className="text-gray-700 opacity-80">{description}</p>
    </motion.div>
  );
}

// Données des statistiques
const statistique = [
  { nombre: "47.302", description: "Kits femme distribués" },
  { nombre: "7.302", description: "Kits hommes distribués" },
  { nombre: "7.705", description: "Kits familles" },
  { nombre: "605", description: "Kits collectifs" },
  { nombre: "1.084", description: "Bénévoles" },
];

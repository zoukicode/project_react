import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Compte() {
  return (
    <div className='py-15'>
      <h1 className="font-bold text-2xl">
        Féminité sans abri c'est aussi...
      </h1>
      <div className="flex justify-between flex-wrap">
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

function AnimatedStat({ nombre, description }) {
  const valeur = useMotionValue(0);
  const [affichage, setAffichage] = useState(0);
  const valeurFinale = parseFloat(nombre.replace(',', '.'));

  const animer = () => {
    valeur.set(0); // Remettre à zéro à chaque entrée
    animate(valeur, valeurFinale, {
      duration: 2,
      onUpdate: (v) => {
        setAffichage(Number(v).toFixed(2));
      },
    });
  };

  return (
    <motion.div
      onViewportEnter={animer}
      viewport={{ once: false, amount: 0.6 }}
      style={{
        textAlign: "center",
        margin: "20px",
        minWidth: "150px",
      }}
    >
      <motion.h1 style={{ color: "rgb(231, 0, 154)", fontSize:"30px" }}>
        {affichage}
      </motion.h1>
      <p style={{ opacity: 0.8 }}>{description}</p>
    </motion.div>
  );
}

const statistique = [
  { nombre: "47.302", description: "Kits femme distribués" },
  { nombre: "7.302", description: "Kits hommes distribués" },
  { nombre: "7.705", description: "Kits familles" },
  { nombre: "605", description: "Kits collectifs" },
  { nombre: "1.084", description: "Bénévoles" },
];
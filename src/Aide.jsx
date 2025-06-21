import { motion } from 'framer-motion';

/**
 * Composant CommentNousAider
 * Affiche trois cartes avec des animations Framer Motion pour illustrer
 * comment les utilisateurs peuvent contribuer à l'association.
 */
export function CommentNousAider() {
  // Liste des types d'aide avec titre, description et image
  const aides = [
    {
      titre: "Donner des produits",
      description:
        "La générosité des donateurs est essentielle pour le fonctionnement des Restos. Sans les dons, nous ne pourrions pas assurer nos missions sociales.",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    },
    {
      titre: "Devenir bénévole",
      description:
        "Toutes les bonnes volontés et les savoir-faire sont utiles pour développer les diverses actions de l’association. Postulez à une offre ou proposez votre aide !",
      image: "https://cdn-icons-png.flaticon.com/512/2784/2784445.png",
    },
    {
      titre: "Faire un don",
      description:
        "La générosité des donateurs est essentielle pour le fonctionnement des Restos. Sans les dons, nous ne pourrions pas assurer nos missions sociales.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
  ];

  return (
    <section className="flex flex-col gap-5 py-10" id="aide">
      
      {/* Titre principal */}
      <h1 className="text-[#333] font-bold text-2xl text-center">
        Comment nous aider ?
      </h1>

      {/* Grille des cartes */}
      <div className="flex justify-around gap-[30px] flex-wrap items-center">
        {aides.map((aide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              delay: index * 0.3, // effet de cascade
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col items-center p-5 max-w-[300px] text-center bg-white rounded-xl shadow-md"
          >
            {/* Image illustrant l'action */}
            <img
              src={aide.image}
              alt={aide.titre}
              className="w-20 h-20 object-contain mb-4"
            />

            {/* Titre et description */}
            <h3 className="text-[#e7009a] text-lg font-semibold mb-2">{aide.titre}</h3>
            <p className="text-sm text-gray-700 opacity-80">{aide.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

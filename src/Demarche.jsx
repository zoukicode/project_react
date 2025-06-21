import { motion } from 'framer-motion';

import trash from './assets/trash.png';
import travelers from './assets/undraw_travelers_kud9.svg';
import learning from './assets/Learning-pana.svg';

/**
 * Composant principal pour afficher la démarche de l'association
 */
export function Demarche() {
  return (
    <section id="demarche" className="px-6">
   <h1 className="font-bold text-2xl">Notre démarche</h1>
             <p className='lg:w-[60%] mx-auto'>Fémininité sans abri lutte contre la précarité en distribuant des kits d’hygiène aux plus démunies.</p>
      <ActionsSection />
    </section>
  );
}

/**
 * Composant secondaire pour afficher les différentes étapes de la démarche
 */
const ActionsSection = () => {
  // Données des actions
  const actions = [
    {
      title: 'Nous luttons contre le gaspillage',
      description: 'En récupérant des échantillons et des dons de produits de cosmétique et d’hygiène.',
      image: trash,
    },
    {
      title: 'Nous créons des trousses fait maison',
      description: 'Nos super bénévoles créent des pochons et des trousses pour mettre les produits dedans.',
      image: travelers,
    },
    {
      title: 'Nous distribuons ces trousses',
      description: 'Dans les foyers pour femmes, les centres d’hébergements, les structures d’accueil de jour et auprès d’associations.',
      image: learning,
    },
  ];

  return (
    <motion.div className="flex flex-wrap justify-center gap-10">
      {actions.map((action, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: 'spring',
            duration: 1,
            delay: index * 0.3,
          }}
          className="w-[280px] flex flex-col items-center text-center"
        >
          <div className="w-[130px] h-[130px] bg-[#e992cf] rounded-full flex items-center justify-center ">
            <img
              src={action.image}
              alt={action.title}
              className="w-full h-full object-cover p-3"
            />
          </div>
          <h3 className="font-bold text-lg ">{action.title}</h3>
          <p className="text-sm text-gray-700 opacity-80">{action.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

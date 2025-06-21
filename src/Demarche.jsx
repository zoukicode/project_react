import { motion } from 'framer-motion';

import trash from './assets/trash.png';
import travelers from './assets/undraw_travelers_kud9.svg';
import learning from './assets/Learning-pana.svg';

export function Demarche() {
  return (
    <>
      <ActionsSection />
    </>
  );
}

const ActionsSection = () => {
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
      <motion.div className="md:flex-row md:justify-around flex flex-wrap gap-y-10 justify-center items-center ">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true, amount: 0.8 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: index * 0.4,
            }}
            className="action_item"
          >
            <div className="actions_grid_item">
              <img src={action.image} alt="" className="action_image" />
            </div>
            <h3 className="action-title">{action.title}</h3>
            <p className="action-description">{action.description}</p>
          </motion.div>
        ))}
      </motion.div>
  );
};

// Données des articles de blog à afficher
const table = [
  {
    titre: "Amour",
    Image: "https://th.bing.com/th/id/OIP.FCAcMIctyKJ2-y7quox0LgHaE5?w=247&h=180&c=7&r=0&o=5&pid=1.7",
    description: "Féminisme ou féminiphilie ou amour"
  },
  {
    titre: "La femme dans la société",
    Image: "https://th.bing.com/th/id/OIP.wus4pKqXCtsS59mMF7S-6AHaE8?w=235&h=180&c=7&r=0&o=5&pid=1.7",
    description: "Féminisme pour embellir nos vies"
  },
  {
    titre: "Emancipation de la femme",
    Image: "https://th.bing.com/th/id/OIP.0SIlEL56XdKDdG4gyE0p5AHaEt?w=286&h=182&c=7&r=0&o=5&pid=1.7",
    description: "En crise existentielle : le féminisme"
  },
  {
    titre: "Humoure",
    Image: "https://th.bing.com/th/id/OIP.wrfou9OQ3NoenD1cHSFQhQHaKR?w=125&h=180&c=7&r=0&o=5&pid=1.7",
    description: "Bénévoles"
  }
];

// Composant principal
export function Actualite() {
  return (
    <div className="px-10 flex flex-col gap-5" id="actualite">
      
      {/* Titre de la section */}
      <h1 className="font-bold text-2xl">
        Actualité
      </h1>

      {/* Texte d’introduction */}
      <p className="lg:w-[60%]">
        S'engager aux côtés des féminités sans abri, c'est permettre à l'association de continuer à bénéficier de soutien tout au long de l'année pour assurer ses missions sociales et d’aide à la personne.
      </p>

      {/* Grille des articles de blog */}
      <div className="flex justify-center text-justify gap-5 flex-wrap">
        {table.map((element, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-[#f8eaf4] text-justify w-[300px] rounded overflow-hidden shadow-md"
          >
            {/* Image */}
            <img
              src={element.Image}
              alt={element.titre}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />

            {/* Contenu textuel */}
            <div className="p-5">
              <h3 className="font-bold mb-2">{element.titre}</h3>
              <p className="text-sm opacity-80">{element.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton d'action */}
      <div className="text-center">
        <button className="mt-5 px-6 py-2 bg-[#FF05B4] text-white rounded hover:scale-105 transition-transform">
          Voir plus nos blogs
        </button>
      </div>
    </div>
  );
}

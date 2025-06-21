export function Actualite(){
    return (
        <div className="px-10 flex flex-col gap-5" id="actualite">
           <h1 className="font-bold text-2xl">Féminité sans abri c'est aussi.... </h1>
           <p>S'engager au côté des féminités sans abri c'est permettre à l'association de continuer à bénéficier desoutien tout au long de l'année pour assurer ses missions sociales et d'aides à la personnes </p>
        <div className="flex justify-center text-justify gap-5 flex-wrap">
          {table.map((element, index) => (
            <div key={index} className="flex flex-col justify-between bg-[#f8eaf4] text-justify w-[300px]">
              <img style={{ width:"100%",height:"250px",objectFit:"cover"}} src={element.Image} alt={element.Image} srcset="" />
             <div className='p-[20px]'>
             <h3 className='font-bold'>{element.titre}</h3>
             <p style={{ opacity: 0.8 }}>{element.description}</p>
             </div>
            </div>
          ))}
        </div>
        <div>
        <button>Voir plus nos bogs</button>
        </div>
        </div>
     
      );
    }

const 
table = [
    {
        titre:"Nom du blogs",
        Image:"https://th.bing.com/th/id/OIP.FCAcMIctyKJ2-y7quox0LgHaE5?w=247&h=180&c=7&r=0&o=5&pid=1.7",
        description:"feminisme ou féminiphilie ou amour"
       },
      //  {
      //   titre:"Nom du blogs",
      //   Image:"https://th.bing.com/th/id/OIP.woL_PH-trehkAc2Sh2HI8wHaE8?w=272&h=181&c=7&r=0&o=5&pid=1.7",
      //   description:"Comment la féminité s'inpose enfin dans la societé-humilités"
      //  },
       {
        titre:"Nom du blogs",
        Image:"https://th.bing.com/th/id/OIP.wus4pKqXCtsS59mMF7S-6AHaE8?w=235&h=180&c=7&r=0&o=5&pid=1.7",
        description:"Féminisme pour enbelire nos vie"
       },
       {
        titre:"Nom du blogs",
        Image:"https://th.bing.com/th/id/OIP.0SIlEL56XdKDdG4gyE0p5AHaEt?w=286&h=182&c=7&r=0&o=5&pid=1.7",
     description:"En crise existantielle , le feminisme"
    },
    {
      titre:"Nom du blogs",
      Image:"https://th.bing.com/th/id/OIP.wrfou9OQ3NoenD1cHSFQhQHaKR?w=125&h=180&c=7&r=0&o=5&pid=1.7",
     description:"Bénévoles"
    }
]

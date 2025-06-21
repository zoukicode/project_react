import { motion} from 'framer-motion';

export  function CommentNousAider() {
  const aides = [
    {
      titre: "Donner des produits",
      description:
        "La générosité des donateurs est essentielle pour le fonctionnement des Restos. Sans les dons, nous ne pourrions pas assurer nos missions sociales.",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png", // Remplace avec une image appropriée si besoin
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
    <section className="flex flex-col gap-5 py-10"  id="aide">
      <h1 className="text-[#333] font-bold text-2xl text-center">
        Comment nous aider ?
      </h1>
      <div  className="flex justify-around gap-[30px] flex-wrap items-center">
        {aides.map((aide, index) => (
          <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale:0
          }}
          whileInView={{
            opacity: 1,
            scale:1
          }}
          transition={{
            duration: 1,
            type: "spring",
            delay:index + 0.3
          }}
          viewport={{ once: true, amount: 0.8 }}
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "300px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
          className='flex flex-col items-center'
        >
            <img
              src={aide.image}
              alt={aide.titre}
              style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "15px" }}
            />
            <h3 style={{ color: "#e7009a", fontSize: "1.2rem" }}>{aide.titre}</h3>
            <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>{aide.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
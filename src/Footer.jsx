export function Footer() {
  return (
    <footer className="bg-white mt-10 text-gray-700 text-sm">
      {/* Contenu principal */}
      <div className="flex flex-wrap justify-around px-6 py-12">
        {/* Colonne 1 */}
        <div className="min-w-[200px] mb-6">
          <h4 className="font-bold text-lg mb-3">Qui sommes-nous ?</h4>
          <ul className="space-y-2">
            <li><a href="#">Présentation</a></li>
            <li><a href="#">Nos actions</a></li>
            <li><a href="#">Notre équipe</a></li>
          </ul>
        </div>

        {/* Colonne 2 */}
        <div className="min-w-[200px] mb-6">
          <h4 className="font-bold text-lg mb-3">Nous soutenir</h4>
          <ul className="space-y-2">
            <li><a href="#">Adhérer</a></li>
            <li><a href="#">Faire un don</a></li>
            <li><a href="#">Nos points de collecte</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="min-w-[200px] mb-6">
          <h4 className="font-bold text-lg mb-3">Nous contacter</h4>
          <p>bureaux@femininesansabri.fr</p>
        </div>

        {/* Colonne 4 */}
        <div className="min-w-[200px] mb-6">
          <h4 className="font-bold text-lg mb-3">Suivez-nous sur :</h4>
          <input
            type="email"
            placeholder="Entrez votre e-mail"
            className="w-full p-2 mb-3 border border-gray-300 rounded"
          />
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="https://cdn-icons-png.flaticon.com/24/1384/1384060.png" alt="YouTube" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="text-center py-4 text-xs text-gray-500 border-t">
        <span className="text-pink-600 font-bold">Zoukicode</span> &nbsp;| © Féminité Sans Abris 2025.
      </div>
    </footer>
  );
}

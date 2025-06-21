export  function Footer() {
    return (
      <footer style={{ marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            backgroundColor: "white",padding:"50px 0"
          }}
        >
          {/* Colonne 1 */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h4>Qui sommes-nous ?</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Présentation</li>
              <li>Nos actions</li>
              <li>Notre équipe</li>
            </ul>
          </div>
  
          {/* Colonne 2 */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h4>Nous soutenir</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Adhérer</li>
              <li>Faire un don</li>
              <li>Nos points de collecte</li>
            </ul>
          </div>
  
          {/* Colonne 3 */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h4>Nous contacter</h4>
            <p>bureaux@femininesansabri.fr</p>
          </div>
  
          {/* Colonne 4 */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h4>Suivez nous sur :</h4>
            <input
              type="email"
              placeholder="Entrez votre e-mail"
              style={{
                padding: "8px",
                width: "100%",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/1384/1384060.png" alt="YouTube" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
  
        <div style={{ textAlign: "center", padding:"10px 0", fontSize: "0.9rem", color: "#666" }}>
          <span style={{ color: "hotpink", fontWeight: "bold" }}>Zoukicode</span> &nbsp;| © Féminité Sans Abris 2025.
        </div>
      </footer>
    );
  }
  
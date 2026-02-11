function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>ElevenCard</h1>
      </nav>

      <section className="hero">
        <h2>Smart Credit Cards for Every Lifestyle</h2>
        <p>
          Fast approval. Transparent rates. Designed for modern living.
        </p>

        <a
          href="https://t.me/i_sf_4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Apply Now</button>
        </a>
      </section>

      <section className="why">
        <h2>Why Choose Us?</h2>

        <div className="cards">
          <div className="card">
            <h3>Fast & Easy Application</h3>
            <p>Quick approval through a secure online process.</p>
          </div>

          <div className="card">
            <h3>Transparent Rates</h3>
            <p>No hidden fees. Clear and honest terms.</p>
          </div>

          <div className="card">
            <h3>Cards for Every Lifestyle</h3>
            <p>Cash back, travel rewards, and more.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Contact: us</p>
      </footer>
    </div>
  );
}

export default App;

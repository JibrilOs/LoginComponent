import React from "react";


function Hero({ handleLogout, user, name }) {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome { name }</h2>
        
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
}

export default Hero;

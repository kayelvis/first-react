function Speakers() {
    return(
<section className="speakers">
          <h2>Speakers</h2>
          <div className="grid">
            <div className="card speaker">
              <div className="avatar">TO</div>
              <h3>Tolu Okafor</h3>
              <p>Frontend Engineer</p>
              <p className="talk">"Thinking in Components"</p>
            </div>
            <div className="card speaker">
              <div className="avatar">BA</div>
              <h3>Bisi Adeyemi</h3>
              <p>Product Designer</p>
              <p className="talk">"Design to JSX in 20 Minutes"</p>
            </div>
            <div className="card speaker">
              <div className="avatar">EN</div>
              <h3>Emeka Nwosu</h3>
              <p>Developer Advocate</p>
              <p className="talk">"Shipping Your First React App"</p>
            </div>
          </div>
        </section>
    )
}

export default Speakers;
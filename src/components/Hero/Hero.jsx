import './Hero.css'

function Hero() {
  const stats = [
    { number: '5000+', label: 'Alunos formados' },
    { number: '95%', label: 'Satisfação' },
    { number: '15+', label: 'Anos de experiência' },
    { number: '9', label: 'Cursos disponíveis' }
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-gradient"></div>
        <div className="hero__bg-grid"></div>
        <div className="hero__bg-orb hero__bg-orb--1"></div>
        <div className="hero__bg-orb hero__bg-orb--2"></div>
        <div className="hero__bg-orb hero__bg-orb--3"></div>
        <div className="hero__bg-glow"></div>
      </div>
      
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            <span>Matrículas Abertas 2026</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          
          <h1 className="hero__title">
            Transforme seu futuro com
            <span className="hero__title-highlight"> Inglês</span> e
            <span className="hero__title-highlight"> Tecnologia</span>
          </h1>
          
          <p className="hero__description">
            Na Edukaio, você aprende inglês e desenvolvimento de software com metodologia 
            moderna e prática. Prepare-se para as melhores oportunidades do mercado.
          </p>
          
          <div className="hero__actions">
            <a href="#cta" className="btn btn-primary hero__btn">
              Começar Agora
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#courses" className="btn btn-secondary hero__btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Ver Cursos
            </a>
          </div>
          
        </div>
        
        <div className="hero__visual">
          <div className="hero__cards-container">
            <div className="hero__card hero__card--1">
              <div className="hero__card-icon hero__card-icon--gradient">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="hero__card-content">
                <span className="hero__card-title">Desenvolvimento Web</span>
                <span className="hero__card-subtitle">React, Node.js, Python</span>
              </div>
            </div>
            
            <div className="hero__card hero__card--2">
              <div className="hero__card-icon hero__card-icon--gradient">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className="hero__card-content">
                <span className="hero__card-title">Inglês Fluente</span>
                <span className="hero__card-subtitle">Do básico ao avançado</span>
              </div>
            </div>
            
            <div className="hero__card hero__card--3">
              <div className="hero__card-icon hero__card-icon--gradient">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="hero__card-content">
                <span className="hero__card-title">Certificado</span>
                <span className="hero__card-subtitle">Reconhecido pelo mercado</span>
              </div>
            </div>
            
            {/* Card de código flutuante */}
            <div className="hero__card hero__card--code">
              <div className="hero__code-card-header">
                <div className="hero__code-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <span className="hero__code-card-filename">futuro.js</span>
              </div>
              <pre className="hero__code-card-content"><code><span className="code-keyword">const</span> <span className="code-variable">futuro</span> = {`{`}
  <span className="code-property">escola</span>: <span className="code-string">"Edukaio"</span>,
  <span className="code-property">skills</span>: [<span className="code-string">"inglês"</span>, <span className="code-string">"código"</span>],
  <span className="code-property">sucesso</span>: <span className="code-boolean">true</span>
{`}`};</code></pre>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="hero__stats-wrapper">
        <div className="container">
          <div className="hero__stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero__stat">
                <span className="hero__stat-number">{stat.number}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

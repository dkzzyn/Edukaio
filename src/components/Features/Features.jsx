import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './Features.css'

function Features() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Turmas Reduzidas',
      description: 'Máximo de 12 alunos por turma para garantir atenção personalizada.',
      color: 'blue'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Laboratórios Modernos',
      description: 'Equipamentos de última geração para aprendizado prático.',
      color: 'red'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      title: 'Material Exclusivo',
      description: 'Apostilas e conteúdo digital desenvolvidos especialmente.',
      color: 'accent'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Horários Flexíveis',
      description: 'Aulas nos períodos manhã e tarde .',
      color: 'blue'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Certificado Válido',
      description: 'Certificação reconhecida pelo mercado de trabalho.',
      color: 'red'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: 'Suporte Contínuo',
      description: 'Tire dúvidas com professores mesmo fora da aula.',
      color: 'accent'
    }
  ]

  return (
    <section id="features" className="features section">
      <div className="features__bg"></div>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-label">Diferenciais</span>
            <h2 className="section-title">Por que escolher a Edukaio?</h2>
            <p className="section-subtitle">
              Oferecemos a melhor estrutura e metodologia para você alcançar seus objetivos profissionais
            </p>
          </div>
        </ScrollReveal>
        
        <div className="features__grid">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div className={`features__card features__card--${feature.color}`}>
                <div className={`features__icon features__icon--${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="features__title">{feature.title}</h3>
                <p className="features__description">{feature.description}</p>
                <div className="features__card-glow"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

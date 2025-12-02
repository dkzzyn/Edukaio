import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './Courses.css'

function Courses() {
  const courses = [
    {
      title: 'Inglês Básico',
      duration: '6 meses',
      description: 'Fundamentos do idioma, vocabulário essencial e conversação básica.',
      level: 'iniciante',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      color: 'red'
    },
    {
      title: 'Inglês Intermediário',
      duration: '6 meses',
      description: 'Gramática avançada, fluência na conversação e compreensão de textos.',
      level: 'intermediário',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      color: 'red'
    },
    {
      title: 'Inglês Avançado',
      duration: '6 meses',
      description: 'Domínio completo, business english e preparação para certificações.',
      level: 'avançado',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      color: 'red'
    },
    {
      title: 'Inglês para Kids',
      duration: '12 meses',
      description: 'Aprendizado lúdico e divertido para crianças de 6 a 12 anos.',
      level: 'iniciante',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: 'red'
    },
    {
      title: 'Informática Básica',
      duration: '3 meses',
      description: 'Windows, Word, Excel, PowerPoint e navegação na internet.',
      level: 'iniciante',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Excel Completo',
      duration: '4 meses',
      description: 'Do básico ao avançado: fórmulas, tabelas dinâmicas, gráficos e macros VBA.',
      level: 'todos os níveis',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
          <line x1="15" y1="3" x2="15" y2="21"/>
        </svg>
      ),
      color: 'green'
    },
    {
      title: 'Desenvolvimento Web',
      duration: '8 meses',
      description: 'HTML, CSS, JavaScript, React e criação de sites profissionais.',
      level: 'intermediário',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Programação Python',
      duration: '6 meses',
      description: 'Lógica de programação, Python e introdução a dados.',
      level: 'intermediário',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      color: 'blue'
    },
    {
      title: 'Design Gráfico',
      duration: '4 meses',
      description: 'Photoshop, Illustrator, Canva e criação de identidade visual.',
      level: 'iniciante',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      color: 'accent'
    }
  ]

  return (
    <section id="courses" className="courses section">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-label">Formações</span>
            <h2 className="section-title">Conheça nossos cursos</h2>
            <p className="section-subtitle">
              Escolha o curso ideal para você e comece sua jornada de transformação profissional
            </p>
          </div>
        </ScrollReveal>
        
        <div className="courses__grid">
          {courses.map((course, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up"
              delay={index * 80}
            >
              <div className={`courses__card courses__card--${course.color}`}>
                <div className="courses__card-header">
                  <div className={`courses__icon courses__icon--${course.color}`}>
                    {course.icon}
                  </div>
                  <span className={`courses__level courses__level--${course.color}`}>
                    {course.level}
                  </span>
                </div>
                <h4 className="courses__card-title">{course.title}</h4>
                <p className="courses__card-description">{course.description}</p>
                <div className="courses__card-footer">
                  <span className="courses__duration">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {course.duration}
                  </span>
                  <a href="#cta" className={`courses__card-btn courses__card-btn--${course.color}`}>
                    Saiba mais
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
                <div className="courses__card-shine"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses

import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Aluna de Inglês Avançado',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'A Edukaio transformou minha carreira! Em 1 ano e meio, saí do zero e hoje sou fluente em inglês. Consegui uma promoção no trabalho graças ao curso.',
      rating: 5,
      highlight: true
    },
    {
      name: 'João Pedro',
      role: 'Aluno de Desenvolvimento Web',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'O curso de desenvolvimento web é incrível! Os professores são muito didáticos e o conteúdo é super atualizado. Já estou trabalhando como freelancer.',
      rating: 5
    },
    {
      name: 'Ana Carolina',
      role: 'Aluna de Informática',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Aos 55 anos, achei que seria difícil aprender informática. A equipe da Edukaio teve toda paciência e hoje uso o computador com confiança!',
      rating: 5
    },
    {
      name: 'Lucas Mendes',
      role: 'Aluno de Python',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      text: 'Melhor investimento que fiz! O curso de Python me abriu portas para a área de dados. Recomendo demais a Edukaio.',
      rating: 5,
      highlight: true
    }
  ]

  return (
    <section id="testimonials" className="testimonials section">
      <div className="testimonials__bg"></div>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-label">Depoimentos</span>
            <h2 className="section-title">O que nossos alunos dizem</h2>
            <p className="section-subtitle">
              Histórias reais de transformação e sucesso de quem já passou pela Edukaio
            </p>
          </div>
        </ScrollReveal>
        
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up"
              delay={index * 120}
            >
              <div className={`testimonials__card ${testimonial.highlight ? 'testimonials__card--highlight' : ''}`}>
                <div className="testimonials__quote">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <div className="testimonials__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                
                <p className="testimonials__text">"{testimonial.text}"</p>
                
                <div className="testimonials__author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonials__avatar"
                  />
                  <div className="testimonials__author-info">
                    <span className="testimonials__name">{testimonial.name}</span>
                    <span className="testimonials__role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

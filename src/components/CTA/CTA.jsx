import { useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './CTA.css'

function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Obrigado pelo interesse! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', phone: '', course: '' })
  }

  return (
    <section id="cta" className="cta section">
      <div className="cta__bg">
        <div className="cta__bg-gradient"></div>
        <div className="cta__bg-orb cta__bg-orb--1"></div>
        <div className="cta__bg-orb cta__bg-orb--2"></div>
      </div>
      
      <div className="container cta__container">
        <ScrollReveal animation="fade-right">
          <div className="cta__content">
            <span className="cta__label">Matricule-se</span>
            <h2 className="cta__title">
              Pronto para transformar
              <span className="cta__title-highlight"> seu futuro?</span>
            </h2>
            <p className="cta__description">
              Preencha o formulário e receba informações sobre nossos cursos, 
              valores e horários disponíveis. Dê o primeiro passo rumo ao sucesso!
            </p>
            
            <div className="cta__benefits">
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="cta__benefit">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Primeira aula experimental grátis</span>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="cta__benefit">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Desconto especial para matrículas antecipadas</span>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="cta__benefit">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Material didático incluso</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-left" delay={200}>
          <form className="cta__form" onSubmit={handleSubmit}>
            <h3 className="cta__form-title">Comece sua jornada</h3>
            
            <div className="cta__form-group">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>
            
            <div className="cta__form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div className="cta__form-group">
              <label htmlFor="phone">WhatsApp</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>
            
            <div className="cta__form-group">
              <label htmlFor="course">Curso de interesse</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um curso</option>
                <optgroup label="Inglês">
                  <option value="ingles-basico">Inglês Básico</option>
                  <option value="ingles-intermediario">Inglês Intermediário</option>
                  <option value="ingles-avancado">Inglês Avançado</option>
                  <option value="ingles-kids">Inglês para Kids</option>
                </optgroup>
                <optgroup label="Informática & Desenvolvimento">
                  <option value="informatica-basica">Informática Básica</option>
                  <option value="desenvolvimento-web">Desenvolvimento Web</option>
                  <option value="python">Programação Python</option>
                  <option value="design-grafico">Design Gráfico</option>
                </optgroup>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary cta__form-btn">
              Quero me matricular
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            
            <p className="cta__form-disclaimer">
              Ao enviar, você concorda em receber comunicações da Edukaio.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTA

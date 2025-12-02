import { useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './VideoTestimonials.css'

function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null)

  const videos = [
    {
      id: 1,
      name: 'Carolina Santos',
      role: 'Desenvolvedora Front-end',
      company: 'Freelancer',
      thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Saí do zero e hoje trabalho como desenvolvedora!'
    },
    {
      id: 2,
      name: 'Rafael Oliveira',
      role: 'Analista de Sistemas',
      company: 'Tech Company',
      thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'O inglês abriu portas para trabalhar em empresa internacional.'
    },
    {
      id: 3,
      name: 'Juliana Costa',
      role: 'Designer Gráfico',
      company: 'Agência Digital',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'O curso de design mudou minha carreira completamente!'
    },
    {
      id: 4,
      name: 'Pedro Henrique',
      role: 'Desenvolvedor Python',
      company: 'Startup',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Consegui minha primeira vaga em apenas 6 meses!'
    },
    {
      id: 5,
      name: 'Amanda Lima',
      role: 'Professora de Inglês',
      company: 'Escola Bilingue',
      thumbnail: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'A metodologia da Edukaio é diferenciada!'
    },
    {
      id: 6,
      name: 'Bruno Martins',
      role: 'Full Stack Developer',
      company: 'Consultoria',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Melhor investimento que fiz na minha carreira!'
    }
  ]

  const openVideo = (video) => {
    setActiveVideo(video)
    document.body.style.overflow = 'hidden'
  }

  const closeVideo = () => {
    setActiveVideo(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="video-testimonials" className="video-testimonials section">
      <div className="video-testimonials__bg"></div>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Vídeos
            </span>
            <h2 className="section-title">Histórias de sucesso</h2>
            <p className="section-subtitle">
              Assista aos depoimentos de quem transformou sua carreira com a Edukaio
            </p>
          </div>
        </ScrollReveal>

        <div className="video-testimonials__grid">
          {videos.map((video, index) => (
            <ScrollReveal 
              key={video.id} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div 
                className="video-card"
                onClick={() => openVideo(video)}
              >
                <div className="video-card__thumbnail">
                  <img src={video.thumbnail} alt={video.name} />
                  <div className="video-card__overlay">
                    <div className="video-card__play">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  </div>
                  <div className="video-card__duration">2:45</div>
                </div>
                <div className="video-card__content">
                  <p className="video-card__quote">"{video.quote}"</p>
                  <div className="video-card__author">
                    <span className="video-card__name">{video.name}</span>
                    <span className="video-card__role">{video.role} • {video.company}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="video-testimonials__cta">
            <a 
              href="https://youtube.com/@edukaio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
              Ver mais no YouTube
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal de Vídeo */}
      {activeVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal__close" onClick={closeVideo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="video-modal__video">
              <iframe
                src={activeVideo.videoUrl + '?autoplay=1'}
                title={activeVideo.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal__info">
              <h3 className="video-modal__name">{activeVideo.name}</h3>
              <p className="video-modal__role">{activeVideo.role} • {activeVideo.company}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoTestimonials





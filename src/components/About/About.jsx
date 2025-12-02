import { useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './About.css'

function About() {
  // ID do vídeo do YouTube - substitua pelo ID do seu vídeo
  // Exemplo: se o link for https://www.youtube.com/watch?v=dQw4w9WgXcQ
  // O ID é: dQw4w9WgXcQ
  const youtubeVideoId = 'dQw4w9WgXcQ' // SUBSTITUA PELO ID DO SEU VÍDEO
  
  // Ou use um vídeo local (descomente e ajuste o caminho):
  // const videoSource = '/videos/sobre-edukaio.mp4'
  // const videoPoster = '/images/video-thumbnail.jpg'
  
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // URL do YouTube embed
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`

  return (
    <section id="about" className="about section">
      <div className="about__bg"></div>
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-label">Sobre Nós</span>
            <h2 className="section-title">Conheça a Edukaio</h2>
            <p className="section-subtitle">
              Uma escola comprometida com sua transformação profissional
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="about__content">
            <div className="about__video-container">
              <div className="about__video-wrapper">
                {/* Vídeo do YouTube - FUNCIONAL */}
                <iframe
                  className="about__video"
                  src={youtubeEmbedUrl}
                  title="Sobre a Edukaio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={() => setIsVideoLoaded(true)}
                ></iframe>

                {/* Loading enquanto carrega */}
                {!isVideoLoaded && (
                  <div className="about__video-loading">
                    <div className="about__loading-spinner"></div>
                    <p>Carregando vídeo...</p>
                  </div>
                )}

                {/* Alternativa: Vídeo local (descomente se preferir) */}
                {/*
                <video 
                  className="about__video"
                  controls
                  poster={videoPoster}
                  preload="metadata"
                >
                  <source src={videoSource} type="video/mp4" />
                  <source src={videoSource.replace('.mp4', '.webm')} type="video/webm" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                */}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About

import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './ScrollReveal.css'

function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 600,
  threshold = 0.1,
  className = ''
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold })

  const style = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default ScrollReveal




